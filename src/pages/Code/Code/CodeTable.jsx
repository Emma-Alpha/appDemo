import React, { useEffect, useState, useRef } from 'react';
import { Popconfirm, Button, Tooltip, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import { Table } from "@4399ywkf/antd4_components";
import styles from './CodeTable.less';

// export const useShallowEqualSelector = (selector) => useSelector(selector, shallowEqual);

const CodeTable = ({
  dataSource,
  loading,
  total,
  searchTable,
  categories,
  onAddOrEdit,
  deleteCode,
  onBatchAdd,
  onBatchUpdate,
  tableRef,
  defaultProject,
}) => {

  // 渲染表格标题
  const renderTitle = () => {
    return (
      <Space>
        <Button type='primary' onClick={() => onAddOrEdit(null)}><PlusOutlined />添加code</Button>
        <Button type='primary' onClick={onBatchAdd}><PlusOutlined />批量添加</Button>
        <span><a target='_blank' href={`/api/apm/manage/code/all?projectId=${defaultProject}&action=export&filter={}&limit=2&offset=0`}>
          <Button type="default"><ExportOutlined />导出code</Button></a>
        </span>
      </Space>
    );
  };

  // 表格列配置
  const columns = [
    {
      key: 'code',
      dataIndex: 'code',
      title: '错误码',
      sorter: true,
      fullFilter: { type: 'varchar' },
    },
    {
      key: 'tag',
      dataIndex: 'tag',
      title: '中文标签',
      sorter: true,
      fullFilter: { type: 'varchar' },
      width: '20%',
    },
    {
      key: 'desc',
      dataIndex: 'desc',
      title: '描述信息',
      sorter: true,
      fullFilter: { type: 'varchar' },
      width: '28%',
    },
    {
      key: 'category',
      dataIndex: 'category',
      title: 'code分类',
      fullFilter: {
        type: 'enum',
        options: categories.map(o => ({
          value: o.name,
          text: o.name,
        })),
      },
    },
    {
      key: 'analysis',
      dataIndex: 'analysis',
      title: '加入运营分析',
      fullFilter: {
        type: 'enum',
        options: [
          { value: '是', text: '是' },
          { value: '否', text: '否' },
        ]
      },
    },
    {
      key: 'operation',
      dataIndex: 'operation',
      title: '操作',
      render: (text, record, index) => {
        return (
          <Space>
            <Tooltip title='修改'>
              <Button
                type='link'
                size='small'
                onClick={() => onAddOrEdit(record)}
                icon={<EditOutlined />}
              />
            </Tooltip>
            <Popconfirm
              title='确认是否删除？'
              onConfirm={() => deleteCode([record])}
            >
              <Tooltip title='删除'>
                <Button
                  type='link'
                  size='small'
                  danger
                  icon={<DeleteOutlined />}
                />
              </Tooltip>
            </Popconfirm>
          </Space>
        );
      },
      width: 120,
    },
  ];

  // 多选配置
  const rowSelection = {

    action: ({ selectedRows }) => {
      const selectedIds = selectedRows.map(o => o.id);
      return (
        <div>
          <Popconfirm
            title='确认要删除选中的所有项，一旦删除不可撤销？'
            onConfirm={() => {
              deleteCode(selectedRows);
              // 清空多选
              if (tableRef) {
                tableRef.current();
              }
            }}
          >
            <Button type='link'>批量删除</Button>
          </Popconfirm>
          <Button type='link' onClick={() => onBatchUpdate(selectedIds)}>批量修改</Button>
        </div>
      )
    },
  };

  return (
    <Table
      title={renderTitle}
      rowKey='code'
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      sticky={{ offsetHeader: 0, offsetScroll: 0 }}
      className={styles.paginationSticky}
      rowSelection={{ ...rowSelection }}
      onClearSelectedRows={tableRef}
      pagination={{
        total: total,
        showSizeChanger: true,
        pageSizeOptions: ['20', '50', '100', '200'],
        showQuickJumper: true,
        defaultPageSize: 20,
        showTotal: (total) => `共有 ${total} 条记录`,
      }}
      total={total}
      // 后端搜索
      onSearch={(value) => searchTable(value)}
    />
  );
};

export default CodeTable;