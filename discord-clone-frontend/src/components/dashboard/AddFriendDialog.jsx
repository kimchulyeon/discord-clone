import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogTitle, Typography } from '@mui/material';
import LabelInput from '../../layouts/LabelInput';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { validateMail } from '../../assets/js/validators';

function AddFriendDialog({ isDialogOpen, closeDialogHandler, sendFriendInvitation = () => {} }) {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    //send friend request to server
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail('');
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter e-mail address of friend which you would like to invite</Typography>
          </DialogContentText>
          <LabelInput
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog;
