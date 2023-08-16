import React, { useEffect } from 'react'
import { Button, Result } from 'antd';
import useGlobalStore from "@store/global";
import { useNavigate } from "react-router-dom";

function index() {

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
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={<Button type="primary" onClick={() => navigate("/")}>返回首页</Button>}
    />
  )
}

export default index