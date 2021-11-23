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

export const deleteComputerThunk = createAsyncThunk(
  'computers/deleteComputer',
  async (computerId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await computersService.deleteComputer(computerId);
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const addComputerThunk = createAsyncThunk(
  'computers/addComputer',
  async ({ owner, location, mac_address }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await computersService.addComputer({ owner, location, mac_address });
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const getComputerSoftThunk = createAsyncThunk(
  'computers/getComputerSoft',
  async (computerId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await computersService.getComputerSoft({ computerId });
      return fulfillWithValue({ computerId, soft: data.soft });
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const removeSoftFromComputerThunk = createAsyncThunk(
  'computers/removeSoftFromComputer',
  async ({ computerId, softId }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await computersService.removeSoftFromComputer(computerId, softId);
      return fulfillWithValue({ computerId, removedSoftId: data.removedSoftId });
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const addSoftToComputerThunk = createAsyncThunk(
  'computers/addSoftToComputer',
  async ({ computer_id, soft_id }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await computersService.addSoftToComputer({ computer_id, soft_id });
      return fulfillWithValue({ computerId: computer_id, addedSoft: data.addedSoft });
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
    [deleteComputerThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComputerThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.computers = state.computers.filter((computer) => computer.id !== action.payload.deletedComputerId);
    },
    [deleteComputerThunk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
    [addComputerThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addComputerThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.computers.push(action.payload.computer);
    },
    [addComputerThunk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
    [getComputerSoftThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getComputerSoftThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      const index = state.computers.findIndex((computer) => computer.id === action.payload.computerId);

      if (index > -1) {
        state.computers[index].soft = action.payload.soft;
      }
    },
    [getComputerSoftThunk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
    [removeSoftFromComputerThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [removeSoftFromComputerThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      const index = state.computers.findIndex((computer) => computer.id === action.payload.computerId);

      if (index > -1) {
        state.computers[index].soft = state.computers[index].soft.filter((soft) => soft.id !== action.payload.removedSoftId);
      }
    },
    [removeSoftFromComputerThunk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
    [addSoftToComputerThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addSoftToComputerThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      const index = state.computers.findIndex((computer) => computer.id === action.payload.computerId);

      if (index > -1) {
        state.computers[index].soft.push(action.payload.addedSoft);
      }
    },
    [addSoftToComputerThunk.rejected]: (state, action) => {
      state.isLoading = false;
      message.error(action.payload.data.error);
    },
  },
});

export const { actions, reducer } = computersSlice;

export default reducer;
