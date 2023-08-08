import React, { useEffect } from 'react';
import { ConfigProvider } from "antd";
import { Outlet } from 'react-router-dom';
import { Header } from "@src/components/Header";
import { Sider } from "@src/components/Sider";
import useGlobalStore from "@store/global";
import Garfish from "garfish";
import "./index.css";


const Layout = () => {

  const layout = useGlobalStore(state => state.layout)
  const setLayout = useGlobalStore(state => state.setLayout)

  const handleLayoutChange = (e) => {
    setLayout(e)
  }

  useEffect(() => {
    Garfish.channel.on("layout", handleLayoutChange)
    return () => {
      Garfish.channel.removeListener("layout", handleLayoutChange)
    }
  }, [])

  return (
    <ConfigProvider
      prefixCls="rta"
      theme={{
        token: {
          fontFamily: "FAE8F6F96C59ED1,Microsoft Yahei,Hiragino Sans GB,tahoma,arial,B8B F53",
          colorTextBase: "rgba(0, 0, 0, 0.65)",
          colorTextSecondary: "rgba(0, 0, 0, 0.45)",
          colorTextHeading: "rgba(0, 0, 0, 0.85)",
          colorTextDisabled: "rgba(0, 0, 0, 0.25)"
        }
      }}
    >
      <div className="flex flex-col h-full">
        {layout.renderHeader ? <Header /> : undefined}
        <div className="flex flex-row h-full">
          {layout.renderSider ? <Sider /> : undefined}
          <div className="module__app">
            <Outlet />
          </div>
        </div>
        {layout.renderFooter ? <div>底部</div> : undefined}
      </div>
    </ConfigProvider>
  );
}
export default Layout;