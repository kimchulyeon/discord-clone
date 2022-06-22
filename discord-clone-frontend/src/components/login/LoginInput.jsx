import React from 'react';
import LabelInput from '../../layouts/LabelInput';

export default function LoginInput({ mail, setMail, password, setPassword }) {
  return (
    <>
      <LabelInput
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail address"
      />
      <LabelInput
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
}
