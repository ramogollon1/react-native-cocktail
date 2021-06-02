import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import itemsService from '../../services/api';

export interface ItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

interface AppState {
  fetching: boolean;
  items: ItemProps[];
}

export const queryItems = createAsyncThunk(
  'app/searchItems',
  async (query: string, thunkAPI) => {
    const response = await itemsService.searchItems(query);
    return response;
  },
);

const initialState: AppState = {
  fetching: false,
  items: [],
};

const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(queryItems.pending, (state, action) => {
      state.fetching = true;
    })
    .addCase(queryItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.fetching = false;
    })
    .addCase(queryItems.rejected, (state, action) => {
      state.fetching = false;
    });
});

export default appReducer;
