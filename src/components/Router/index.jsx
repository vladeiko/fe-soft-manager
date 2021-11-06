import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthLayout } from '../../layouts';
import { MainLayout } from '../../layouts';

import { SignInPage } from '../../pages';
import { HomePage } from '../../pages';

const Router = () => {
  const isAuthorized = useSelector((state) => state.user.isAuthorized);

  const getRoutes = useCallback(() => {
    if (isAuthorized) {
      return (
        <>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<HomePage />} />
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
