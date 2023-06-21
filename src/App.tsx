import React from 'react';
import styled from 'styled-components';

import Home from './pages/Home';

import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <AppPadding>
      <AppWrapper>
        <GlobalStyle />
        <Home />
      </AppWrapper>
    </AppPadding>
  );
};

export default App;

const AppPadding = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: 480px) {
    padding: 19px 0;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 700px;

  @media (max-width: 480px) {
    width: 360px;
  }
`;
