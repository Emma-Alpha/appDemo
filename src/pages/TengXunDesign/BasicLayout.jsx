import React from 'react';
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import ErrorBoundary from './ErrorBoundary';

import zhCN from 'antd/locale/zh_CN';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

function BasicLayout() {

  return (
    <ErrorBoundary>
      <ConfigProvider
        locale={zhCN}
        prefixCls={"demo"}
        theme={{
          token: {
            borderRadius: 0,
            fontSize: 12
          }
        }}
      >
        <Outlet />
      </ConfigProvider>
    </ErrorBoundary>
  )
}

export default BasicLayout