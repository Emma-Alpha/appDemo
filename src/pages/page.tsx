import React from 'react';
import { Link } from 'react-router-dom';
import RequireAuth from '@src/components/RequireAuth/RequireAuth';

const Index = () => {
  return (
    <>
      <Link to={'/dts'}>数传服务</Link>
    </>
  );
};

export default Index;
// export default RequireAuth(Index, { autoRedirect: true });
