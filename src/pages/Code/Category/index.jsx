import React, { useEffect, useState, useRef } from 'react';
import { Popconfirm, Button, Form, Modal, Tooltip, Space, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import useStore from '@models/public';
import useCategoryStore from "@models/Code/category";

import { Table } from "@4399ywkf/antd4_components";

function index() {

  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [record, setRecord] = useState(null);

  const { defaultProject, getDefaultProjectLoading, getDefaultProjectFetch } = useStore()
  const {
    categories,
    getCategoriesLoading,
    getCategoriesFetch,
    postCategory,
    postCategoryLoading,
    putCategoryDelete,
    putCategoryReorder
  } = useCategoryStore()

  // 首次加载页面，请求projectId 
  useEffect(() => {
    getDefaultProjectFetch().then((res) => {
      // 根据项目的id 值, 去请求
      getCategoriesFetch({ projectId: res })
    })
  }, [])

  useEffect(() => {
    form.setFieldsValue({
      name: record?.name,
      cname: record?.cname,
    });
  }, [record]);


  const onEdit = (record) => {
    setRecord(record);
    setIsModalOpen(true);
  };

  const onDelete = (id) => {
    const payload = {
      action: 'delete',
      data: {},
      id: [id],
      projectId: defaultProject,
    };
    putCategoryDelete(payload)
  };

  const onMove = (id, action) => {
    const payload = {
      action: 'reorder',
      data: {
        action,
      },
      id: [id],
      projectId: defaultProject,
    };
    putCategoryReorder(payload);
  };

  const onModalOk = () => {
    form
      .validateFields().then((values) => {
        if (record) {
          // 编辑
          Object.assign(record, values);
          postCategory(record)
          // dispatch({ type: 'manageCodeCategory/postCategory', payload: record });
        } else {
          // 添加
          const payload = {
            ...values,
            id: 0,
            projectId: defaultProject,
          };
          postCategory(payload)
          // dispatch({ type: 'manageCodeCategory/postCategory', payload });
        }
        onModalCancel();
      });
  };

  const onModalCancel = () => {
    setIsModalOpen(false);
    setRecord(null);
    form.resetFields();
  };

  // 表格渲染函数
  const renderTable = () => {
    const renderTitle = () => {
      return (
        <Button type='primary' onClick={() => setIsModalOpen(true)}><PlusOutlined />添加分类</Button>
      );
    };

    const columns = [
      {
        key: 'name',
        // className: 'nowrap',
        dataIndex: 'name',
        title: '分类名称',
      },
      {
        key: 'cname',
        // className: 'nowrap',
        dataIndex: 'cname',
        title: '分类描述',
      },
      {
        key: 'operation',
        dataIndex: 'operation',
        // className: 'nowrap',
        title: '操作',
        render: (text, record, index) => {
          return (
            <Space>
              <Tooltip title='编辑'>
                <Button
                  type='link'
                  size='small'
                  onClick={() => onEdit(record)}
                  disabled={record.name === '默认'}
                  icon={<EditOutlined />}
                />
              </Tooltip>
              <Tooltip title='删除'>
                <Popconfirm
                  title='确认是否删除？'
                  onConfirm={() => onDelete(record.id)}
                >
                  <Button
                    type='link'
                    size='small'
                    danger
                    disabled={record.name === '默认'}
                    icon={<DeleteOutlined />}
                  />
                </Popconfirm>
              </Tooltip>
              <Tooltip title='上移'>
                <Button
                  type='link'
                  size='small'
                  onClick={() => onMove(record.id, 'up')}
                  disabled={index === 0}
                  icon={<CaretUpOutlined />}
                />
              </Tooltip>
              <Tooltip title='下移'>
                <Button
                  type='link'
                  size='small'
                  onClick={() => onMove(record.id, 'down')}
                  disabled={index === categories.length - 1}
                  icon={<CaretDownOutlined />}
                />
              </Tooltip>
            </Space>
          );
        }
      }
    ]
    return (
      <Table
        title={renderTitle}
        columns={columns}
        dataSource={categories}
        loading={getCategoriesLoading}
      />
    );
  }

  // 模态框渲染函数
  const renderAddModal = () => {
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };

    return (
      <div>
        <Modal
          title={record ? '编辑分类' : '添加分类'}
          visible={isModalOpen}
          onOk={onModalOk}
          confirmLoading={postCategoryLoading}
          onCancel={onModalCancel}
        >
          <Form form={form} {...layout}>
            <Form.Item
              name='name'
              label='分类名称'
              rules={[{ type: 'string', length: 20, required: true, message: '请输入分类名称' }]}
            >
              <Input placeholder="请输入分类名称" />
            </Form.Item>
            <Form.Item
              name='cname'
              label='分类描述'
              rules={[{ type: 'string', required: true, message: '请输入分类描述' }]}
            >
              <Input placeholder='请输入分类描述' />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }

  return (
    <div>
      {renderTable()}
      {renderAddModal()}
    </div>
  )
}

export default index