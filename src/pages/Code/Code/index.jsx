import React, { useEffect, useState, useRef } from 'react';
// import { useDispatch, shallowEqual, useSelector } from 'dva';
import { Popconfirm, Button, Form, Modal, Tooltip, Space, Input } from 'antd';

import CodeTable from './CodeTable';
import SingleModeModal from './SingleModeModal';
import BatchAddModal from './BatchAddModal';
import BatchUpdateModal from './BatchUpdateModal';

import useStore from '@models/public';
import useCodeStore from "@models/Code/code";

// export const useShallowEqualSelector = (selector) => useSelector(selector, shallowEqual);

const Code = () => {
  // const dispatch = useDispatch();
  const [form] = Form.useForm();
  
  const { defaultProject, getDefaultProjectLoading, getDefaultProjectFetch } = useStore()
  const {
    codes,
  } = useCodeStore();
  // const { defaultProject, codes, codeTotal, codesLoading, categories, fields, attrs, attrLoading } = useShallowEqualSelector((state) => ({
  //   defaultProject: state.public.defaultProject,
  //   codes: state.manageCode.codes,
  //   codesLoading: state.loading.effects['manageCode/getCodeAll'],
  //   codeTotal: state.manageCode.codeTotal,
  //   categories: state.manageCodeCategory.categories,
  //   fields: state.manageCode.fields,
  //   attrs: state.manageCode.attrs,
  //   attrLoading: state.loading.effects['manageCode/getCodeAttr'],
  // }));
  // 设置缓存钩子，目的是为了在初始化时能够在异步调用的回调里获取到请求参数的最新值
  const defaultProjectRef = useRef(null);
  defaultProjectRef.current = defaultProject;

  // 表格状态量
  const [searchVal, setSearchVal] = useState(null);
  const tableRef = useRef();
  // 添加/编辑模态框状态量
  const [isSingleModalOpen, setIsSingleModalOpen] = useState(false);
  const [codeRecord, setCodeRecord] = useState(null);
  // 批量添加模态框状态量
  const [isBatchAddModalOpen, setIsBatchAddModalOpen] = useState(false);
  // 批量编模态框状态量
  const [isBatchUpdateModalOpen, setIsBatchUpdateModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  // 表格搜索兼初始化
  const searchTable = (values) => {
    const getPayload = () => {
      let tidyFilter = {};
      if (values?.filter) {
        const rawFilter = { ...values.filter };
        Object.keys(rawFilter).forEach(e => {
          tidyFilter[e] = rawFilter[e].value;
        });
        tidyFilter = JSON.stringify(tidyFilter);
      }

      const payload = {
        ...values,
        filter: tidyFilter,
        projectId: defaultProjectRef.current,
      };
      setSearchVal({
        ...values,
      });
      return payload;
    }

    // 未获得默认项目id，页面初始化
    if (defaultProjectRef.current === 0) {
      getDefaultProjectFetch().then(() => {

      })
      dispatch({ type: 'public/getApmPublicProject' }).then(() => {
        // 请求code分类数据，用于构造表格头筛选框和模态框选择器
        dispatch({ type: 'manageCodeCategory/getCategories', payload: { projectId: defaultProjectRef.current } });
        dispatch({ type: 'manageCode/getCodeAll', payload: getPayload() });
      });
    } else {
      dispatch({ type: 'manageCode/getCodeAll', payload: getPayload() });
    }
  };

  // 打开添加/编辑code模态框
  const onAddOrEdit = (record) => {
    setCodeRecord(record);
    setIsSingleModalOpen(true);
  };

  // 添加/编辑code
  const postCode = (values) => {
    dispatch({
      type: 'manageCode/postCode', payload: {
        ...values,
        projectId: defaultProjectRef.current,
      }
    }).then(() => {
      searchTable(searchVal);
    });
  };

  // 添加/编辑code模态框关闭回调
  const onSingleModalCancel = () => {
    setIsSingleModalOpen(false);
    setCodeRecord(null);
  };

  // 删除code
  const deleteCode = (rows) => {
    const ids = rows.map(elem => elem.id);
    const codes = rows.map(elem => elem.code);
    dispatch({
      type: 'manageCode/putCodeDelete', payload: {
        action: 'delete',
        data: {},
        id: [...ids],
        projectId: defaultProjectRef.current,
      }
    }).then(() => {
      // 如果新删除的错误码与【数据分析/实时监控】页面在客户端本地缓存的错误码列表存在交集，需要同时更新缓存，
      // 从而确保该页面的查询不出现脏数据
      const monitorCodesStr = localStorage.getItem('appstat_monitor_code');
      if (monitorCodesStr && monitorCodesStr !== '[]') {
        const originalMonitorCodes = JSON.parse(monitorCodesStr);
        let pureMonitorCodes = [];
        originalMonitorCodes.forEach(elem => {
          if (codes.indexOf(elem) === -1) {
            pureMonitorCodes.push(elem);
          }
        });

        localStorage.setItem('appstat_monitor_code', JSON.stringify(pureMonitorCodes));
      }
      searchTable(searchVal);
    });
  };

  // 打开批量添加模态框
  const onBatchAdd = () => {
    setIsBatchAddModalOpen(true);
  };

  // 批量添加code
  const batchAddCode = (values) => {
    const payload = {
      action: 'binsert',
      data: {
        ...values,
      },
      id: [0],
      projectId: defaultProjectRef.current,
    };
    dispatch({ type: 'manageCode/putCodeBinsert', payload }).then(() => {
      searchTable(searchVal);
    });
  };

  // 批量添加模态框关闭回调
  const onBatchAddModalCancel = () => {
    setIsBatchAddModalOpen(false);
  };

  // 打开批量编辑模态框
  const onBatchUpdate = (ids) => {
    setSelectedIds(ids);
    dispatch({ type: 'manageCode/getCodeAttr', payload: { projectId: defaultProjectRef.current } });
    setIsBatchUpdateModalOpen(true);
  };

  // 批量编辑code
  const batchUpdateCode = (values) => {
    const payload = {
      action: 'bedit',
      data: { ...values },
      id: [...selectedIds],
      projectId: defaultProjectRef.current,
    };
    dispatch({ type: 'manageCode/putCodeBedit', payload }).then(() => {
      // 清空多选
      if (tableRef) {
        tableRef.current();
      }
      searchTable(searchVal);
    });
  };

  // 批量编辑模态框关闭回调
  const onBatchUpdateModalCancel = () => {
    setIsBatchUpdateModalOpen(false);
  };

  // 获取所有数据供导出消费
  const getExportedDataSource = async () => {
    // const payload = {
    //   filter: {},
    //   projectId: defaultProjectRef.current,
    //   offset: 0,
    //   limit: 199,  // Number.MAX_SAFE_INTEGER
    // };
    // try {
    //   const response = await dispatch({ type: 'manageCode/getCodeAll', payload });
    //   const data = response.data?.rows;
    //   return data;
    // } catch (error) {
    //   console.error(error);
    //   return [];
    // }
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px 20px' }}>
      <CodeTable
        dataSource={codes}
        loading={codesLoading}
        total={codeTotal}
        searchTable={searchTable}
        categories={categories}
        onAddOrEdit={onAddOrEdit}
        deleteCode={deleteCode}
        onBatchAdd={onBatchAdd}
        onBatchUpdate={onBatchUpdate}
        tableRef={tableRef}
        defaultProject={defaultProjectRef.current}
      />
      <SingleModeModal
        isModalOpen={isSingleModalOpen}
        record={codeRecord}
        postCode={postCode}
        onModalCancel={onSingleModalCancel}
        categories={categories}
      />
      <BatchAddModal
        isModalOpen={isBatchAddModalOpen}
        batchAddCode={batchAddCode}
        onModalCancel={onBatchAddModalCancel}
      />
      <BatchUpdateModal
        isModalOpen={isBatchUpdateModalOpen}
        batchUpdateCode={batchUpdateCode}
        onModalCancel={onBatchUpdateModalCancel}
        fields={fields}
        attrs={attrs}
        loading={attrLoading}
        tableRef={tableRef}
      />
    </div>
  );
};

export default Code;