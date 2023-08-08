import React from "react";
import { Layout, ConfigProvider } from "antd";

import Logo from "./components/Logo/Logo";
import Avatar from "./components/Avatar/Avatar";
import Menu from "./components/Menu/Menu";

import "./Header.less";

export const Header = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            colorBgHeader: "#0e79c6"
          }
        }
      }}
    >
      <Layout.Header
        className="px-0 header flex"
        style={{ height: 50 }}
      >
        <Logo />
        <Menu />
        <Avatar />
      </Layout.Header>
    </ConfigProvider>
  )
}