import React, { useState } from 'react';
// import { shallowEqual, useSelector } from 'dva';
import { Button, Form, Modal, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

// export const useShallowEqualSelector = (selector) => useSelector(selector, shallowEqual);

const BatchUpdateModal = ({ isModalOpen, batchUpdateCode, onModalCancel, fields, attrs, loading }) => {
  const [form] = Form.useForm();
  // 属性被选中时，更改此状态量值达到重新渲染的目的
  const [isFieldClicked, setIsFieldClicked] = useState(0);

  const onSubmit = () => {
    form
      .validateFields().then((values) => {
        batchUpdateCode(values);
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
        title='批量修改'
        visible={isModalOpen}
        onCancel={onCancel}
        footer={
          <div>
            <Button onClick={() => form.resetFields()}>重置</Button>
            <Button type='primary' onClick={onSubmit}>提交</Button>
          </div>
        }
      >
        <Form form={form} {...layout}>
          <FormItem name='field' label='属性' rules={[{ required: true, message: '请选择修改属性' }]}>
            <Select
              placeholder='请选择修改属性'
              loading={loading}
              onChange={() => setIsFieldClicked(isFieldClicked + 1)}
            >
              {fields.map((o, index) => <Option key={index} value={o.field}>{o.name}</Option>)}
            </Select>
          </FormItem>
          <FormItem name='value' label='值' rules={[{ required: true, message: '请选择修改属性' }]}>
            <Select
              placeholder='请选择属性值'
              loading={loading}
            >
              {
                attrs.filter(item => item.field === form.getFieldValue('field'))
                  .map(o => <Option key={o.id} value={o.value}>{o.value}</Option>)
              }
            </Select>
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
};

export default BatchUpdateModal;