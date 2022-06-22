import React from 'react';
import CustomPrimaryBtn from '../../layouts/CustomPrimaryBtn';

export default function LoginFooter({ handleLogin, isFormValid }) {
  return (
    <div>
      <CustomPrimaryBtn
        label="Log in"
        additionalStyles={{ marginTop: '30px' }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
  );
}
