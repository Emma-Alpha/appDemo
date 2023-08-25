import React, { useEffect } from 'react';
import RequireAuth from '@src/components/RequireAuth/RequireAuth';
import styles from './index.less';
import ManualSlavePage from '@src/components/ManualSlave/ManualSlavePage';
import useGlobalStore from '@store/global';

const Index = (props: any) => {
  const setLayout = useGlobalStore((state) => state.setLayout);

  useEffect(() => {
    setLayout({
      renderSider: false,
    });
    return () => {
      setLayout({
        renderSider: true,
      });
    };
  }, []);

  return (
    <div className={styles['micro__app']}>
      <ManualSlavePage />
    </div>
  );
};

export default RequireAuth(Index, { targetPerarr: '01' });
