import React from 'react';
import CustomPrimaryBtn from '../../layouts/CustomPrimaryBtn';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d',
};

const handleOpenAddFriendDialog = () => {};

function AddFriendbutton() {
  return (
    <>
      <CustomPrimaryBtn
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
    </>
  );
}

export default AddFriendbutton;
