import React from 'react';
import styled from 'styled-components';

import useGetWeatherData from '../hooks/useGetWeatherData';
import useIsMobile from '../hooks/useIsMobile';
import useSearchRecords from '../hooks/useSearchRecords';

import DeleteIconWhite from '../assets/icons/delete-round-white.svg';
import SearchIconWhite from '../assets/icons/search-round-white.svg';

interface IProps {
  city: string;
  countryCode: string;
  date: string;
  index: number;
}

const SearchRecord = ({ city, countryCode, date, index }: IProps) => {
  const { deleteSearchRecord } = useSearchRecords();
  const { fetchWeatherData } = useGetWeatherData();
  const { isMobile } = useIsMobile();

  return (
    <RecordWrapper>
      <LeftSection>
        <div>
          {city}, {countryCode}
        </div>
        {isMobile && <DateStyle>{date}</DateStyle>}
      </LeftSection>
      <RightSection>
        {!isMobile && <DateStyle>{date}</DateStyle>}
        <IconStyled src={SearchIconWhite} onClick={() => fetchWeatherData(city)} />
        <IconStyled src={DeleteIconWhite} onClick={() => deleteSearchRecord(index)} />
      </RightSection>
    </RecordWrapper>
  );
};

export default SearchRecord;

const RecordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  padding: 13px 15px;
  border-radius: 16px;
  width: 100%;
`;

const LeftSection = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconStyled = styled.img`
  width: 34px;
  height: 34px;

  cursor: pointer;
`;

const DateStyle = styled.div`
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
