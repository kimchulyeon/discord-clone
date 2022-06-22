import React, { useState } from 'react';
import AuthBox from '../../layouts/AuthBox';
import LoginBoxHeader from '../../components/login/LoginBoxHeader';
import LoginInput from '../../components/login/LoginInput';
import LoginBoxFooter from '../../components/login/LoginBoxFooter';

export default function LoginPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <AuthBox>
        <LoginBoxHeader />
        <LoginInput mail={mail} setMail={setMail} password={password} setPassword={setPassword} />
        <LoginBoxFooter />
      </AuthBox>
    </div>
  );
}
