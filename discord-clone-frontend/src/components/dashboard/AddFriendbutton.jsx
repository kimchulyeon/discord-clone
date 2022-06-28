import React, { useState } from 'react';
import CustomPrimaryBtn from '../../layouts/CustomPrimaryBtn';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d',
};

function AddFriendbutton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {/* 버튼 */}
      <CustomPrimaryBtn
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      {/* 친구추가 모달창 */}
      <AddFriendDialog isDialogOpen={isDialogOpen} closeDialogHandler={handleCloseAddFriendDialog} />
    </>
  );
}

export default AddFriendbutton;
