import React from 'react';
import styled from '@emotion/styled';
import AddFriendbutton from './AddFriendbutton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList';
import PendingInvitationsList from './PendingInvitationsList';

const MainContainer = styled.div`
  width: 224px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f3136;
`;

function FriendsSidebar() {
  return (
    <MainContainer>
      <AddFriendbutton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
}

export default FriendsSidebar;
