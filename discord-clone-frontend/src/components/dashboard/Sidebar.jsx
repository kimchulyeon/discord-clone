import React from 'react';
import styled from '@emotion/styled';
import MainPageButton from './MainPageButton';

const MainContainer = styled.div`
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202225;
`;

function Sidebar() {
  return (
    <MainContainer>
      <MainPageButton />
    </MainContainer>
  );
}

export default Sidebar;
