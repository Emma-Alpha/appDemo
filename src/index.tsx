import React from 'react';
import { renderClient } from '@config/router';
import { routes } from '@src/routes';
import useGlobalStore from '@store/global';
import history from '@config/history';
import Loading from './loading';
import { ConfigProvider } from 'antd';
import { openUpdateVersionNotify } from '@src/utils/updateVersion';
import './index.css';

const AppName = process.env.APP_NAME!;

// 配置antd 静态方法使用的
ConfigProvider.config({
  prefixCls: AppName,
});

const context = {
  routes: routes,
  loadingComponent: () => <Loading name={'基座'} />,
  rootElement: document.getElementById(AppName)!,
  basename: '/',
  history: history,
};

openUpdateVersionNotify(3000);

// 子应用接入
export const provider = () => {
  return {
    render({ basename }) {
      // 更改basename的值
      context.basename = basename;
      renderClient(context);
      window.Garfish.channel.emit('router', {
        name: AppName,
        routes: routes,
      });
    },
    destroy({ dom }) {
      dom.unmount();
    },
  };
};

// 添加单独启动逻辑
if (!window.__GARFISH__) {
  renderClient(context);
}
