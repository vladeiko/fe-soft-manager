import { Outlet } from 'react-router';

import { AuthHeader } from '../../components';

import './style.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <AuthHeader />
      <div className="main-layout__content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
