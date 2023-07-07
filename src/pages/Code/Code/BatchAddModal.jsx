import React, { useEffect, useState, useRef } from 'react';
// import { shallowEqual, useSelector } from 'dva';
import { Button, Form, Modal, Input } from 'antd';
const { TextArea } = Input;

// export const useShallowEqualSelector = (selector) => useSelector(selector, shallowEqual);

const BatchAddModal = ({ isModalOpen, batchAddCode, onModalCancel }) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form
      .validateFields().then((values) => {
        batchAddCode(values);
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
        title='批量添加'
        visible={isModalOpen}
        onCancel={onCancel}
        footer={
          <div>
            <Button onClick={() => form.resetFields()}>重置</Button>
            <Button type='primary' onClick={onSubmit}>提交</Button>
          </div>
        }
        width='60%'
      >
        <Form form={form} {...layout}>
          <Form.Item name='data' label='批量添加' rules={[{ type: 'string', required: true, message: '请填写数据' }]}>
            <TextArea rows={8} />
          </Form.Item>
          <Form.Item label='说明'>
            <div>
              <div style={{ color: '#999', lineHeight: '24px', paddingTop: '4px' }}>
                <p>1. 按格式批量输入，单个值之间用 | 隔开，每行为一行记录</p>
                <p>2. 格式为：code|code分类|中文标签|描述信息|是否加入运营分分析<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;例1：1001|登录相关|登录超时1|登录超时，可能是HTTP不通|是<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;例2：1002|登录相关|登录超时2|登录超时，可能Server不通|否<br />

                </p>
                <p>3. 一次性提交数量上限200个  </p>
              </div>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BatchAddModal;