import React from 'react';
import styled from '@emotion/styled';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const MainContainer = styled.div`
  width: 100%;
  height: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const DUMMY_INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'Mark',
      mail: 'mark@test.com',
    },
  },
  {
    _id: '2',
    senderId: {
      username: 'John',
      mail: 'john@test.com',
    },
  },
];

function PendingInvitationsList() {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitation) => {
        return (
          <PendingInvitationsListItem
            key={invitation._id}
            id={invitation._id}
            username={invitation.senderId.username}
            mail={invitation.senderId.mail}
          />
        );
      })}
    </MainContainer>
  );
}

export default PendingInvitationsList;
