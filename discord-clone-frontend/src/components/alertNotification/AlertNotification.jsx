import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function AlertNotification({ alertMessage, open, closeAlert }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      onClose={closeAlert}
      autoHideDuration={4000}
    >
      <Alert severity="info">{alertMessage}</Alert>
    </Snackbar>
  );
}

export default AlertNotification;
