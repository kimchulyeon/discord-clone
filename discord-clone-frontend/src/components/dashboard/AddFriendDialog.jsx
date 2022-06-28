import React, { useState, useEffect } from 'react';
import {
  DialogTitle,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import LabelInput from '../../layouts/LabelInput';

import { validateMail } from '../../assets/js/validators';
import CustomPrimaryBtn from '../../layouts/CustomPrimaryBtn';

import { postFriendInvitation } from '../../store/index';
import { useDispatch } from 'react-redux';

function AddFriendDialog({ isDialogOpen, closeDialogHandler }) {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');
  const dispatch = useDispatch();

  // 친구 초대 버튼 클릭o========================================================================
  const handleSendInvitation = () => {
    dispatch(
      // 친구추가 POST
      postFriendInvitation({
        mail: mail,
      }),
    );
  };
  //===========================================================================================
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
          {/* 이메일 입력 인풋 */}
          <LabelInput
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        {/* 버튼 */}
        <DialogActions>
          <CustomPrimaryBtn
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog;
