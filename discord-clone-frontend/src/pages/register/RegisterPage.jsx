import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import { validateRegisterForm } from '../../assets/js/validators';

import RegisterInput from '../../components/register/RegisterInput';
import AuthBox from '../../layouts/AuthBox';
import RegisterFooter from '../../components/register/RegisterFooter';
import { postRegister } from '../../store/index';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = async () => {
    await dispatch(postRegister({ username, mail, password }));
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, password, username }));
  }, [mail, password, username, setIsFormValid]);

  return (
    <div>
      <AuthBox>
        <Typography variant="h5" sx={{ color: 'white' }}>
          Create an account
        </Typography>
        <RegisterInput
          mail={mail}
          setMail={setMail}
          password={password}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
        />
        <RegisterFooter handleRegister={handleRegister} isFormValid={isFormValid} />
      </AuthBox>
    </div>
  );
}
