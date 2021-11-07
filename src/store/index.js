import { configureStore } from '@reduxjs/toolkit';

import { storageService } from '../services';

import user from './user';
import computers from './computers';

const preloadedState = {
  user: storageService.getItem('auth') || undefined,
};

export const store = configureStore({
  reducer: {
    user,
    computers,
  },
  preloadedState,
});
