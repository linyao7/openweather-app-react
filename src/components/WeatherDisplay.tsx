import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import useIsMobile from '../hooks/useIsMobile';

import cloudy from '../assets/images/cloud.png';
import sun from '../assets/images/sun.png';
import { selectWeatherData } from '../store/selectors';
import { capitalize } from '../utils/capitalize';
import { formatDate } from '../utils/formatDate';

const WeatherDisplay = () => {
  const weatherData = useSelector(selectWeatherData);
  const { isMobile } = useIsMobile();

  const getWeatherImageElement = (cloudiness: number) => {
    if (cloudiness > 50) {
      return <WeatherImage src={cloudy} />;
    } else {
      return <WeatherImage src={sun} />;
    }
  };
  return (
    <WeatherDisplayWrapper>
      {isMobile && (
        <>
          <LeftMobileSection>
            <div>Today's Weather</div>
            {weatherData && (
              <>
                {getWeatherImageElement(weatherData.cloudiness)}
                <CurrentTemperature>{weatherData.temperature}°</CurrentTemperature>
                <div>
                  H: {weatherData.maxTemperature}° L:{weatherData.minTemperature}°
                </div>
                <CountrySection>
                  {weatherData.city}, {weatherData.countryCode}
                </CountrySection>
              </>
            )}
          </LeftMobileSection>
          <RightMobileSection>
            {weatherData && (
              <>
                <div>{capitalize(weatherData.weatherDescription)}</div>
                <div>Humidity: {weatherData.humidity}%</div>
                <div>{formatDate(weatherData.timestamp)}</div>
              </>
            )}
          </RightMobileSection>
        </>
      )}
      {!isMobile && (
        <>
          <div>Today's Weather</div>
          {weatherData && (
            <>
              {/* abstract logic to show weather images */}
              {getWeatherImageElement(weatherData.cloudiness)}
              <CurrentTemperature>{weatherData.temperature}°</CurrentTemperature>
              <div>
                H: {weatherData.maxTemperature}° L:{weatherData.minTemperature}°
              </div>
              <AdditionalDetails>
                <CountrySection>
                  {weatherData.city}, {weatherData.countryCode}
                </CountrySection>
                <div>{formatDate(weatherData.timestamp)}</div>
                <div>Humidity: {weatherData.humidity}%</div>
                <div>{capitalize(weatherData.weatherDescription)}</div>
              </AdditionalDetails>
            </>
          )}
        </>
      )}
    </WeatherDisplayWrapper>
  );
};

export default WeatherDisplay;

const WeatherDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 220px;
  padding: 23px 20px 0 20px;

  margin-bottom: 26px;

  @media (max-width: 480px) {
    height: 145px;
    flex-direction: row;
    margin-bottom: 20px;
  }
`;

const AdditionalDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: var(--text-secondary);
`;

const LeftMobileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const RightMobileSection = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-secondary);
  gap: 12px;
  padding-top: 56px;
  text-align: end;
`;

const CurrentTemperature = styled.div`
  font-size: 100px;
  font-weight: 750;
  color: #6c40b5;

  @media (max-width: 480px) {
    font-size: 70px;
  }
`;

const CountrySection = styled.div`
  font-weight: var(--font-accent);

  @media (max-width: 480px) {
    color: var(--text-secondary);
  }
`;

const WeatherImage = styled.img`
  position: absolute;
  width: 350px;
  height: 350px;
  transform: translate(275px, -155px);

  @media (max-width: 480px) {
    width: 190px;
    height: 190px;
    transform: translate(115px, -110px);
  }
`;
