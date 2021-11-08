import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import { computersService } from '../services';

export const getAllComputersThunk = createAsyncThunk(
  'computers/getAllComputers',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await computersService.getAllComputers();
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const initialState = {
  computers: [],
  isLoading: false,
};

const computersSlice = createSlice({
  name: 'computers',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllComputersThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllComputersThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.computers = action.payload.computers;
    },
    [getAllComputersThunk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
  },
});

export const { actions, reducer } = computersSlice;

export default reducer;