import { RootState } from '.';
import { Root } from 'react-dom/client';

//data selectors
export const selectWeatherData = (state: RootState) => state.data.weatherData;
export const selectFetchError = (state: RootState) => state.data.fetchError;

//history selectors
export const selectSearchRecords = (state: RootState) => state.history.searchRecords;
