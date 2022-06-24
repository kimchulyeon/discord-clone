import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../../components/dashboard/Sidebar';
import AppBar from '../../components/dashboard/AppBar';
import Messenger from '../../components/dashboard/Messenger';
import FriendsSidebar from '../../components/dashboard/FriendsSidebar';

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
