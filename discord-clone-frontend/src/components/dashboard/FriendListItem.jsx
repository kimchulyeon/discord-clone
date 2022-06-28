import React from 'react';
import { Button, Typography } from '@mui/material';
import Avatar from './Avatar';
import OnlineIndicator from './OnlineIndicator';

function FriendListItem({ username, isOnline }) {
  return (
    <Button
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}
    >
      {/* 사용자 아이콘 */}
      <Avatar username={username} />
      {/* 이름 */}
      <Typography
        style={{
          marginLeft: '7px',
          fontWeight: '700',
          color: '#8e9297',
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {/* 온라인 체크 */}
      <OnlineIndicator isOnline={isOnline} />
    </Button>
  );
}

export default FriendListItem;
