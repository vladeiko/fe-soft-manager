import { configureStore } from '@reduxjs/toolkit';

import { storageService } from '../services';

import computers from './computers';
import soft from './soft';
import user from './user';

const preloadedState = {
  user: storageService.getItem('auth') || undefined,
};

export const store = configureStore({
  reducer: {
    computers,
    soft,
    user,
  },
  preloadedState,
});
