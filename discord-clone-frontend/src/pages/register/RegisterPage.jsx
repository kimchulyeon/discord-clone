import React, { useState } from 'react';
import { Typography } from '@mui/material';
import RegisterInput from '../../components/register/RegisterInput';
import AuthBox from '../../layouts/AuthBox';
import RegisterFooter from '../../components/register/RegisterFooter';
import { useEffect } from 'react';
import { validateRegisterForm } from '../../assets/js/validators';

export default function RegisterPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log(username, mail, password);
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
