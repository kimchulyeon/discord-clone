import React, { useState } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import Avatar from './Avatar';
import InvitationDecisionButton from './InvitationDecisionButton';

function PendingInvitationsListItem({
  id,
  username,
  mail,
  acceptInvitation = () => {},
  rejectInvitation = () => {},
}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptInvitation({ id });
    setButtonDisabled(true);
  };
  const handleRejectInvitation = () => {
    rejectInvitation({ id });
    setButtonDisabled(false);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* 사용자 아이콘 */}
          <Avatar username={username} />
          {/* 사용자명 */}
          <Typography
            sx={{
              marginLeft: '7px',
              fontWeight: '700',
              flexGrow: '1',
              color: 'gray',
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          {/* 초대 결정 버튼 */}
          <InvitationDecisionButton
            disabled={buttonDisabled}
            handleAcceptInvitation={handleAcceptInvitation}
            handleRejectInvitation={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
}

export default PendingInvitationsListItem;
