import React, { useEffect } from 'react';
import { useRouteData } from '@config/router/routeContext';
import useGlobalStore from '@store/global';
import Garfish from 'garfish';
import styles from './ManualSlavePage.less';
import Loading from '@src/loading';

let app: any;

const ManualSlavePage = () => {
  const { route } = useRouteData();
  let domId = `manual_${route.microApp}`;
  let basename = `/${route.microApp}`;

  const { microActiveApps } = useGlobalStore();

  const asyncLoadApp = async ({ route }) => {
    app = await Garfish.loadApp(route.microApp, {
      cache: true,
      basename: basename,
      entry: route.entry,
      domGetter: `#${domId}`,
    });
    await app?.mount();
  };

  useEffect(() => {
    if (route.microApp) {
      asyncLoadApp({ route });
    }
    return () => {
      app.unmount();
    };
  }, []);

  let loading = microActiveApps.findIndex((o) => o.loading);
  console.log(microActiveApps);
  return (
    <>
      <div id={domId} className={`h-full ${styles['micro-container']}`} />
      {loading !== -1 ? <Loading name={microActiveApps[loading]?.props?.cname ?? ''} /> : undefined}
    </>
  );
};

export default ManualSlavePage;
