import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import { userService, storageService } from '../services';

export const signInThunk = createAsyncThunk(
  'user/signIn',
  async ({ email, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await userService.signIn({ email, password });
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const initialState = {
  user: null,
  acccess_token: null,
  isAuthorized: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signInThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [signInThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      state.isAuthorized = true;
      storageService.setItem('auth', { isAuthorized: true, access_token: action.payload.access_token });
    },
    [signInThunk.rejected]: (state, action) => {
      state.isLoading = false;

      if (action.payload.status === 400) {
        message.error(action.payload.data.error);
      }
    }
  },
});

export const { actions, reducer } = userSlice;

export default reducer;
