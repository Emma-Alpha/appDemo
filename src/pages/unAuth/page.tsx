import React, { useEffect } from 'react';
import useGlobalStore from "@store/global";
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";

const Index = () => {
  const setLayout = useGlobalStore(state => state.setLayout)
  const navigate = useNavigate();

  useEffect(() => {
    setLayout({
      renderSider: false
    })
    return () => {
      setLayout({
        renderSider: true
      })
    }
  }, [])

  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您无权访问此页面。"
      extra={<Button type="primary" onClick={() => navigate("/")}>返回首页</Button>}
    />
  )
}

export default Index