import React from 'react';
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Groups';

function MainPageButton() {
  return (
    <Button
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#5865f2',
      }}
    >
      <GroupIcon />
    </Button>
  );
}

export default MainPageButton;
