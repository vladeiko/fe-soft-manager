import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import { softService } from '../services';

export const getAllSoftThunk = createAsyncThunk(
  'soft/getAllSoft',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await softService.getAllSoft();
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const deleteSoftThuk = createAsyncThunk(
  'soft/deleteSoft',
  async (softId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await softService.deleteSoft(softId);
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const addSoftThunk = createAsyncThunk(
  'soft/addSoft',
  async ({ name, type, sub_type, license_type }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await softService.addSoft({ name, type, sub_type, license_type });
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const initialState = {
  soft: [],
  isLoading: false,
};

const softSlice = createSlice({
  name: 'soft',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllSoftThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllSoftThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.soft = action.payload.soft;
    },
    [getAllSoftThunk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
    [deleteSoftThuk.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteSoftThuk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.soft = state.soft.filter((soft) => soft.id !== action.payload.deletedSoftId);
    },
    [deleteSoftThuk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
    [addSoftThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addSoftThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.soft.push(action.payload.soft);
    },
    [addSoftThunk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
  },
});

export const { actions, reducer } = softSlice;

export default reducer;
