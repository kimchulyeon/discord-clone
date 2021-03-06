import React from 'react';
import styled from '@emotion/styled';

const AvatarPreview = styled.div`
  height: 42px;
  width: 42px;
  background-color: #5865f2;
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-left: 5px;
  color: white;
`;

function Avatar({ username, large }) {
  return (
    <AvatarPreview style={large ? { height: '80px', width: '80px' } : {}}>
      {username.substring(0, 2)}
    </AvatarPreview>
  );
}

export default Avatar;
