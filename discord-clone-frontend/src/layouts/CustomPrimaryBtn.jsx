import React from 'react';
import Button from '@mui/material/Button';

export default function CustomPrimaryBtn({ label, additionalStyles, disabled, onClick }) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: '#5865f2',
        color: '#ffffff',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: '500',
        width: '100%',
        height: '40px',
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
