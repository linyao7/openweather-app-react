import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectSearchRecords } from '../store/selectors';
import { formatDate } from '../utils/formatDate';
import SearchRecord from './SearchRecord';

const SearchHistory = () => {
  const searchRecords = useSelector(selectSearchRecords);

  return (
    <HistoryWrapper>
      Search History
      <HistoryList>
        {searchRecords.map((searchRecord, index) => (
          <SearchRecord
            key={index}
            index={index}
            city={searchRecord.city}
            countryCode={searchRecord.countryCode}
            date={formatDate(searchRecord.timestamp)}
          />
        ))}
      </HistoryList>
    </HistoryWrapper>
  );
};

export default SearchHistory;

const HistoryWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  min-height: 548px;
  border-radius: 24px;
  padding: 23px 20px;

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 22px 17px;
  }
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  gap: 18px;

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;
