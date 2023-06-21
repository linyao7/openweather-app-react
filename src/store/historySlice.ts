import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IWeatherData } from '../typings';

interface ISearchRecords {
  searchRecords: IWeatherData[];
}

const initialState: ISearchRecords = {
  searchRecords: [],
};

export const historySlice = createSlice({
  name: 'searchRecords',
  initialState,
  reducers: {
    setSearchRecords: (state, action: PayloadAction<IWeatherData[]>) => {
      state.searchRecords = action.payload;
    },
  },
});

export const { setSearchRecords } = historySlice.actions;

export default historySlice.reducer;
