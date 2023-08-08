import React from 'react';
import { getRoutes, renderClient, getRouteComponents } from '@config/router';
import { routes } from '@src/routes';
import useGlobalStore from '@store/global';
import history from '@config/history';
// import Garfish from 'garfish';
import Loading from './loading';
import { ConfigProvider } from 'antd';
import { openUpdateVersionNotify } from '@src/utils/updateVersion';
import './index.css';

// 配置antd 静态方法使用的
ConfigProvider.config({
  prefixCls: 'rta',
});

const res = getRoutes({
  api: {
    paths: {
      absSrcPath: '@src/',
      absPagesPath: '@/',
    },
    config: {
      routes: routes,
    },
  },
});

const rootComponents = getRouteComponents({
  routes: res,
  prefix: '',
  api: {},
});

const context = {
  routes: res,
  reactRouter5Compat: false,
  routeComponents: rootComponents,
  loadingComponent: () => <Loading name={'基座'} />,

  basename: '/',
  pluginManager: [],
  history: history,
};

if (window.__GARFISH__) {
  window.Garfish.channel.emit('router', {
    name: 'demo',
    routes: routes,
  });
}

openUpdateVersionNotify();

// 子应用接入
export const provider = () => {
  return {
    render({ basename }) {
      // 更改basename的值
      context.basename = basename;
      renderClient(context);
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
