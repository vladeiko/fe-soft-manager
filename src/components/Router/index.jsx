import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthLayout } from '../../layouts';

import { SignInPage } from '../../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
