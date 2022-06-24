import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../../components/dashboard/Sidebar';
import AppBar from './AppBar';
import Messenger from './Messenger';
import FriendsSidebar from './FriendsSidebar';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Dashboard() {
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}
