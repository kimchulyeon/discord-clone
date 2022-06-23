import React from 'react';
import CustomPrimaryBtn from '../../layouts/CustomPrimaryBtn';
import RedirectInfo from '../../layouts/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

export default function RegisterFooter({ handleRegister, isFormValid }) {
  const NOT_VALID_MESSAGE =
    'Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail should provide';
  const VALID_MESSAGE = 'Press to register!';

  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate('/login');
  };

  return (
    <>
      <Tooltip title={!isFormValid ? NOT_VALID_MESSAGE : VALID_MESSAGE}>
        <div>
          {/* 로그인 버튼 */}
          <CustomPrimaryBtn
            label="Register"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
}
