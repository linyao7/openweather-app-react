import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectFetchError } from '../store/selectors';

const ErrorPanel = () => {
  const fetchError = useSelector(selectFetchError);
  return <>{fetchError && <ErrorDiv>{fetchError}</ErrorDiv>}</>;
};

export default ErrorPanel;

const ErrorDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffdddd;
  color: #e63c3c;
  width: 100%;
  height: 60px;
  border-radius: 20px;

  @media (max-width: 480px) {
    height: 40px;
    border-radius: 8px;
  }
`;
