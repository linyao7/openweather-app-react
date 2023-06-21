import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFetchError, setWeatherData } from '../store/dataSlice';
import { IWeatherData } from '../typings';

const API_KEY = process.env.API_KEY;

const useGetWeatherData = () => {
  //TODO loading for fetching result
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const parseWeatherData = (weatherData: any): IWeatherData => {
    const temperature = Math.round(weatherData.main.temp);
    const minTemperature = Math.round(weatherData.main.temp_min);
    const maxTemperature = Math.round(weatherData.main.temp_max);
    const city = weatherData.name;
    const countryCode = weatherData.sys.country;
    //leave in UTC unix format in case there is a need for time comparison
    const timestamp = weatherData.dt;
    const humidity = weatherData.main.humidity;
    const weatherDescription = weatherData.weather?.[0].description;
    const cloudiness = weatherData.clouds.all;
    return {
      temperature,
      minTemperature,
      maxTemperature,
      city,
      countryCode,
      timestamp,
      humidity,
      weatherDescription,
      cloudiness,
    };
  };

  const fetchWeatherData = async (city: string) => {
    const geocodingURI = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    try {
      setLoading(true);
      const geolocationResponse = await fetch(geocodingURI);
      const geolocationData = await geolocationResponse.json();
      if (geolocationData.length > 0) {
        const weatherURI = `https://api.openweathermap.org/data/2.5/weather?lat=${geolocationData[0].lat}&lon=${geolocationData[0].lon}&units=metric&appid=${API_KEY}`;
        const weatherResponse = await fetch(weatherURI);
        const weatherData = await weatherResponse.json();
        const parsedWeatherData = parseWeatherData(weatherData);
        dispatch(setWeatherData(parsedWeatherData));
        setLoading(false);
        dispatch(setFetchError(undefined));
        return parsedWeatherData;
      } else {
        dispatch(setFetchError('City not found.'));
      }
    } catch (e) {
      dispatch(setFetchError(e));
    }
  };

  return { fetchWeatherData, loading };
};

export default useGetWeatherData;
