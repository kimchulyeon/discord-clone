import React from 'react';
import styled from '@emotion/styled';
import FriendListItem from './FriendListItem';

const MainContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: 'Mark',
    isOnline: true,
  },
  {
    id: 2,
    username: 'Anna',
    isOnline: false,
  },
  {
    id: 3,
    username: 'John',
    isOnline: false,
  },
];

function FriendsList() {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => {
        return <FriendListItem key={friend.id} username={friend.username} isOnline={friend.isOnline} />;
      })}
    </MainContainer>
  );
}

export default FriendsList;
