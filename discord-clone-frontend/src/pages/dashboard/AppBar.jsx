import React from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
  border-bottom: 1px solid black;
  background-color: #36393f;
  width: calc(100% - 326px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

function AppBar() {
  return <MainContainer></MainContainer>;
}

export default AppBar;
