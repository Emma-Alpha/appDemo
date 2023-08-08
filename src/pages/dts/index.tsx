import React from 'react';
import RequireAuth from '@src/components/RequireAuth/RequireAuth';
import styles from './index.less';
import ManualSlavePage from '@src/components/ManualSlave/ManualSlavePage';

const Index = (props: any) => {
  return (
    <div className={styles['micro__app']}>
      <ManualSlavePage />
    </div>
  );
};

export default RequireAuth(Index, { targetPerarr: '01' });
