import React from 'react';
import { Typography } from '@mui/material';

export default function LoginBoxHeader() {
  return (
    <>
      <Typography variant="h5" sx={{ color: 'white' }}>
        Welcom Back!
      </Typography>
      <Typography sx={{ color: '#69bbbe' }}>We are happy that you are with us!</Typography>
    </>
  );
}
