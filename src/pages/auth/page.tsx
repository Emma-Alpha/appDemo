import React, { useState, useEffect, useMemo } from "react";
import { Card, Tabs, Spin, Form, Input, Row, Col, Button, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox"
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useLocalStorageState } from "ahooks";
import useAuthStore from "@store/auth";
import userGlobalStore, { BasicInfoResponse } from "@store/global";
import { useNavigate } from "react-router-dom"
import styles from "./layout.less";

import qs from "query-string";
const Cookie = require("js-cookie");



interface AccountInfoProps {
  password: string,
  name: string
}

const LOCALSTORAGE_NAME = "loginParams"
const LOCALSTORAGE_REMEMBER = "remember_password"

const OMLogin = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [remember, setRemember] = useLocalStorageState<boolean>(
    LOCALSTORAGE_REMEMBER,
    {
      defaultValue: true
    }
  )
  const [accountInfo, setAccountInfo] = useLocalStorageState<AccountInfoProps | undefined>(
    LOCALSTORAGE_NAME,
    {
      defaultValue: undefined
    }
  )

  const {
    showCaptcha,
    captchaR,
    login,
    loginLoading
  } = useAuthStore()

  const {
    getBasicInfo,
  } = userGlobalStore()

  const onChangeRemember = (e: CheckboxChangeEvent) => {
    setRemember(e.target.checked)
  }

  useEffect(() => {
    if (remember) {
      form.setFieldsValue(accountInfo)
    }
  }, [])

  /**
   * 有两种情况，一种是URL上携带了 redirect 重定向的URL，一种是根据登录后的权限位
   */
  const JumpRouteUrl = (value: BasicInfoResponse) => {
    const parsed = qs.parse(location.search)
    if (parsed?.redirect) {
      navigate((parsed?.redirect) as string)
      return
    } else {
      value.navCode.map(o => {
        const findMicroApp = value.modules.find(m => m.perarr === o)
        if (findMicroApp) {
          if (findMicroApp.defaultroute) {
            navigate(`/${findMicroApp.path}${findMicroApp.defaultroute}`)
          } else {
            navigate(`/${findMicroApp.path}`)
          }
        } else {
          return
        }
      })
    }
  }

  const onFinish = () => {
    form.validateFields().then((values) => {
      login({ payload: { ...values, type: "OM" }, }).then((res) => {
        if (!res.loginStatus) return
        if (remember) {
          setAccountInfo({ password: values.password, name: values.name })
        }
        getBasicInfo({}).then((res) => {
          JumpRouteUrl(res)
        })
      })
    })
  }

  return (
    <Form form={form} name={"OmLoginForm"} className={styles["login__form"]}>
      <Form.Item
        name={"name"}
        rules={[
          {
            required: true,
            message: "请填写用户名"
          }
        ]}
      >
        <Input placeholder="请输入用户名" size="large" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[
          {
            required: true,
            message: "请输入密码"
          }
        ]}
      >
        <Input.Password placeholder="请输入密码" size="large" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item style={{ display: showCaptcha ? 'block' : 'none' }} >
        <Row gutter={24}>
          <Col xs={10} md={10}>
            <Form.Item noStyle name='verifycode' rules={[
              {
                required: !!showCaptcha,
                min: 4,
                max: 4,
                message: '请填写验证码',
              },
            ]}>
              <Input size="large" placeholder="验证码" onPressEnter={() => { }} />
            </Form.Item>
          </Col>
          <Col xs={14} md={14}>
            <img width="130px" height="32px" src={`/api/main/gateway/captcha?id=${Cookie.get('client')}&_=${captchaR}`} alt="验证码" />
          </Col>
        </Row>
      </Form.Item>
      <div style={{ marginBlockEnd: 24, display: "flex", justifyContent: "space-between" }}>
        <Checkbox checked={remember} onChange={onChangeRemember}>记住密码</Checkbox>
        <a href={"http://u.4399om.com/main/?r=forgetPassword"} target={"_blank"}>忘记密码</a>
      </div>
      <Button type={"primary"} loading={loginLoading} style={{ width: "100%" }} onClick={onFinish}>登录</Button>
      <div className={styles["other__action"]} />
    </Form>
  )
}

const AuthPage = () => {
  return (
    <>
      <div className={styles["title"]}>欢迎来蓝信系统</div>
      <Tabs
        className={styles["accountTab"]}
        items={[
          {
            key: "om",
            label: <div className={styles["header__title"]}>OM登录</div>,
            children: <OMLogin />
          }
        ]}
      />
    </>
  )
}

export default AuthPage;