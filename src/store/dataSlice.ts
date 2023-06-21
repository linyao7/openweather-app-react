import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IWeatherData } from '../typings';

export interface DataState {
  weatherData: IWeatherData | undefined;
  fetchError: string | undefined;
}

const initialState: DataState = {
  weatherData: undefined,
  fetchError: undefined,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<IWeatherData>) => {
      state.weatherData = action.payload;
    },
    setFetchError: (state, action: PayloadAction<string>) => {
      state.fetchError = action.payload;
    },
  },
});

export const { setWeatherData, setFetchError } = dataSlice.actions;

export default dataSlice.reducer;
