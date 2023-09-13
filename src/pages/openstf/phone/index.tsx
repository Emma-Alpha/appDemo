import React from 'react';
import RequireAuth from '@src/components/RequireAuth/RequireAuth';
import styles from './index.less';
import ManualSlavePage from '@src/components/ManualSlave/ManualSlavePage';

const ErrorPage = () => {
  return (
    <div className={styles['micro__app']}>
      <ManualSlavePage />
    </div>
  );
};

export default RequireAuth(ErrorPage);
