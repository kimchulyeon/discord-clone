import React, { useState, useEffect } from "react";
import AuthBox from "../../layouts/AuthBox";
import LoginBoxHeader from "../../components/login/LoginBoxHeader";
import LoginInput from "../../components/login/LoginInput";
import LoginBoxFooter from "../../components/login/LoginBoxFooter";
import { validateLoginForm } from "../../assets/js/validators";

export default function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
    console.log("check validation");
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    console.log(mail, password);
  };

  return (
    <div>
      <AuthBox>
        <LoginBoxHeader />
        <LoginInput mail={mail} setMail={setMail} password={password} setPassword={setPassword} />
        <LoginBoxFooter isFormValid={isFormValid} handleLogin={handleLogin} />
      </AuthBox>
    </div>
  );
}
