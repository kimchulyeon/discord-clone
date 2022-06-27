import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';

function InvitationDecisionButton({ disabled, handleRejectInvitation, handleAcceptInvitation }) {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {/* 수락 */}
      <IconButton
        style={{
          color: 'white',
        }}
        disabled={disabled}
        onClick={handleAcceptInvitation}
      >
        <CheckIcon />
      </IconButton>
      {/* 거절 */}
      <IconButton
        style={{
          color: 'white',
        }}
        disabled={disabled}
        onClick={handleRejectInvitation}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
}

export default InvitationDecisionButton;
