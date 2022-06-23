import React from 'react';
import LabelInput from '../../layouts/LabelInput';

export default function RegisterInput({ mail, setMail, password, setPassword, username, setUsername }) {
  return (
    <>
      <LabelInput
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter username"
      />
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
