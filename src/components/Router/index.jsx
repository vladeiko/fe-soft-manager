import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthLayout } from '../../layouts';
import { MainLayout } from '../../layouts';

import { SignInPage } from '../../pages';

import { routes } from '../../constants';

const Router = () => {
  const isAuthorized = useSelector((state) => state.user?.isAuthorized);
  const userSystemRole = useSelector((state) => state.user?.user?.role_sys_name);

  const getRoutes = useCallback(() => {
    if (isAuthorized && userSystemRole) {
      return (
        <>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<MainLayout />}>
            {routes[userSystemRole].map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </>
      );
    }

    return (
      <>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Route>
      </>
    );
  }, [isAuthorized]);

  return (
    <BrowserRouter>
      <Routes>{getRoutes()}</Routes>
    </BrowserRouter>
  );
};

export default Router;
