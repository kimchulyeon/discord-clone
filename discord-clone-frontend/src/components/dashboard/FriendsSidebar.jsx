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
      {/* 친구추가 버튼 */}
      <AddFriendbutton />
      {/* 친구목록 타이틀 */}
      <FriendsTitle title="Private Messages" />
      {/* 친구목록 리스트 */}
      <FriendsList />
      {/* 친구목록 타이틀 */}
      <FriendsTitle title="Invitations" />
      {/* 초대 리스트 */}
      <PendingInvitationsList />
    </MainContainer>
  );
}

export default FriendsSidebar;
