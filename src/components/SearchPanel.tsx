import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import useGetWeatherData from '../hooks/useGetWeatherData';
import useSearchRecords from '../hooks/useSearchRecords';

import SearchIcon from '../assets/icons/search-icon.svg';

const SearchPanel = () => {
  const [city, setCity] = useState('');
  const { fetchWeatherData } = useGetWeatherData();
  const { addSearchRecord } = useSearchRecords();

  //initial weather for Singapore
  useEffect(() => {
    fetchWeatherData('Singapore');
  }, []);

  const handleCityChange = (e: any) => {
    //TODO perform some sanitization
    setCity(e.target.value);
  };

  const fetchAndAddWeatherData = async (city: string) => {
    const searchRecord = await fetchWeatherData(city);
    if (searchRecord) {
      addSearchRecord(searchRecord);
    }
  };

  return (
    <PanelWrapper>
      <InputWrapper>
        <InputStyled
          type="text"
          onChange={handleCityChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              fetchAndAddWeatherData(city);
            }
          }}
          value={city}
          spellCheck={false}
        />
        <LabelStyled>City</LabelStyled>
      </InputWrapper>
      <IconStyled src={SearchIcon} onClick={() => fetchAndAddWeatherData(city)} />
    </PanelWrapper>
  );
};

export default SearchPanel;

const PanelWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const InputWrapper = styled.div`
  flex-grow: 1;
`;

const InputStyled = styled.input`
  height: 60px;
  padding: 8px 22px 0 22px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;

  @media (max-width: 480px) {
    height: 40px;
    padding: 5px 11px 0 11px;
    border-radius: 8px;
    font-size: 12px;
  }
`;

const LabelStyled = styled.label`
  font-size: 10px;
  color: var(--text-secondary);
  position: absolute;
  transform: translate(-602px, 7px);

  @media (max-width: 480px) {
    font-size: 8px;
    transform: translate(-298px, 5px);
  }
`;

const IconStyled = styled.img`
  cursor: pointer;

  @media (max-width: 480px) {
    height: 40px;
  }
`;
