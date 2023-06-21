import { useDispatch, useSelector } from 'react-redux';

import { setSearchRecords } from '../store/historySlice';
import { selectSearchRecords } from '../store/selectors';
import { IWeatherData } from '../typings';

const useSearchRecords = () => {
  const dispatch = useDispatch();
  //deep copy of our search history
  const searchRecords = [...useSelector(selectSearchRecords)];

  const deleteSearchRecord = (index: number) => {
    searchRecords.splice(index, 1);
    dispatch(setSearchRecords(searchRecords));
  };

  const addSearchRecord = (weatherData: IWeatherData) => {
    dispatch(setSearchRecords([...searchRecords, weatherData]));
  };

  return { deleteSearchRecord, addSearchRecord };
};

export default useSearchRecords;
