import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  acccess_token: null,
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions, reducer } = userSlice;

export default reducer;
