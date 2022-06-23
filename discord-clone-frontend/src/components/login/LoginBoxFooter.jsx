import React from 'react';
import CustomPrimaryBtn from '../../layouts/CustomPrimaryBtn';
import RedirectInfo from '../../layouts/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

export default function LoginFooter({ handleLogin, isFormValid }) {
  const NOT_VALID_MESSAGE =
    'Enter correct e-mail address and password should contains between 6 and 12 characters';
  const VALID_MESSAGE = 'Press to Log in!';

  const navigate = useNavigate();

  // 회원가입 버튼 클릭 핸들러
  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <Tooltip title={!isFormValid ? NOT_VALID_MESSAGE : VALID_MESSAGE}>
        <div>
          {/* 로그인 버튼 */}
          <CustomPrimaryBtn
            label="Log in"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      {/* 회원가입 버튼 */}
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
}
