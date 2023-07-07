import React, { useEffect, Suspense } from "react";
import useStore from '@models/global';
import { ConfigProvider, Button, Spin, Form, Input } from "antd";

import zhCN from 'antd/locale/zh_CN';

const DemoPage = () => {

  const { count, inc, fetch, fishies, loading } = useStore()

  // useEffect(() => {
  //   fetch()
  // }, [])

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(fishies)
  }, [fishies])

  return (
    <Spin spinning={loading}>
      <div>{count}</div>
      <Button onClick={inc}>点击新增新增</Button>
      <div>{`后端请求数据：${JSON.stringify(fishies)}`}</div>
      {/* <Button onClick={() => fetch("demo")}>请求后端</Button> */}
      <Form form={form} name={"baseForm"}>
        <Form.Item name={"year"} label={"年份"}>
          <Input placeholder="请输入年份" />
        </Form.Item>
        <Form.Item name={["user", "cname"]} label={"姓名"}>
          <Input placeholder="请输入名字" />
        </Form.Item>
        <Form.Item name={["user", "email"]} label={"邮箱"}>
          <Input placeholder="请输入名字" />
        </Form.Item>
        <Form.Item name={["user", "name"]} label={"工号"}>
          <Input placeholder="请输入名字" />
        </Form.Item>
        <Form.Item name={["user", "role"]} label={"身份"}>
          <Input placeholder="请输入名字" />
        </Form.Item>
      </Form>
    </Spin>
  )
}

export default DemoPage;