import React from 'react';
import { Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function OnlineIndicator({ isOnline }) {
  return (
    <Box
      sx={{
        color: '#3ba55d',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '5px',
      }}
    >
      {isOnline ? <FiberManualRecordIcon /> : null}
    </Box>
  );
}

export default OnlineIndicator;
