import React, { useEffect, useState, useRef } from 'react';
// import { useDispatch, shallowEqual, useSelector } from 'dva';
import { Popconfirm, Button, Form, Modal, Tooltip, Space, Input, Select, InputNumber } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const FormItem = Form.Item;
const Option = Select.Option;

// export const useShallowEqualSelector = (selector) => useSelector(selector, shallowEqual);

const SingleModeModal = ({ isModalOpen, record, postCode, onModalCancel, categories }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      code: record?.code,
      categoryId: record?.categoryId ? record.categoryId.toString() : '',
      tag: record?.tag,
      desc: record?.desc,
      analysis: record?.analysis,
    });
  }, [record]);

  const onOk = () => {
    form
      .validateFields().then((values) => {
        values.categoryId = Number(values.categoryId);
        values.code = Number(values.code);
        if (record) {
          // 编辑
          delete record.status;
          delete record.category;
          postCode({
            ...record,
            ...values,
          });
        } else {
          // 添加
          postCode({
            ...values,
            id: 0,
          });
        }
        onCancel();
      });
  };

  const onCancel = () => {
    onModalCancel();
    form.resetFields();
  };

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
        title={record ? '编辑错误码' : '添加错误码'}
        visible={isModalOpen}
        onOk={onOk}
        onCancel={onCancel}
      >
        <Form form={form} {...layout}>
          <FormItem name='code' label='错误码' rules={[
            { required: true, message: '请输入code' },
            { pattern: new RegExp(/^[0-9]\d*$/, "g"), message: "请输入正确的数字！" }
          ]}>
            <InputNumber type placeholder='请输入错误码' style={{width: "100%"}}></InputNumber>
          </FormItem>
          <FormItem name='categoryId' label='错误码分类' rules={[{ required: true, message: '请选择错误码分类' }]}>
            <Select placeholder='请选择错误码分类'>
              {categories.map((o, index) => <Option key={index} value={String(o.id)}>{o.name}</Option>)}
            </Select>
          </FormItem>
          <FormItem name='tag' label='中文标签' rules={[{ type: 'string', required: true, message: '请输入中文标签' }]}>
            <Input placeholder='请输入中文标签'></Input>
          </FormItem>
          <FormItem name='desc' label='描述信息' rules={[{ type: 'string', required: true, message: '请输入描述信息' }]}>
            <Input placeholder='请输入描述信息'></Input>
          </FormItem>
          <FormItem name='analysis' label='加入运营分析' rules={[{ type: 'string', required: true, message: '请选择' }]}>
            <Select placeholder='请选择'>
              <Option key={1} value='是'>是</Option>
              <Option key={2} value='否'>否</Option>
            </Select>
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
};

export default SingleModeModal;