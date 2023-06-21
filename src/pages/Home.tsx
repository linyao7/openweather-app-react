import React, { useState } from 'react';
import styled from 'styled-components';

import ErrorPanel from '../components/ErrorPanel';
import SearchHistory from '../components/SearchHistory';
import SearchPanel from '../components/SearchPanel';
import WeatherDisplay from '../components/WeatherDisplay';

const Home = () => {
  return (
    <>
      <SearchPanel />
      <ErrorPanel />
      <BodyWrapper>
        <WeatherDisplay />
        <SearchHistory />
      </BodyWrapper>
    </>
  );
};

export default Home;

const BodyWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  min-height: 1145px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  margin-top: 112px;
  padding: 20px 40px;

  @media (max-width: 480px) {
    min-height: 600px;
    border-radius: 24px;
    margin-top: 139px;
    padding: 10px 20px;
  }
`;
