import React from 'react';

import { Outlet } from 'react-router';

import { GuestHeader } from '../../components';

import './style.scss';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <GuestHeader />
      <div className="auth-layout__content">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
