import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import AuthBox from "../../layouts/AuthBox";
import LoginBoxHeader from "../../components/login/LoginBoxHeader";
import LoginInput from "../../components/login/LoginInput";
import LoginBoxFooter from "../../components/login/LoginBoxFooter";
import { validateLoginForm } from "../../assets/js/validators";
import { postLogin } from "../../store/index";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // VALIDATION 체크
  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
    console.log("check validation");
  }, [mail, password, setIsFormValid]);

  // 로그인 핸들러
  const handleLogin = async () => {
    await dispatch(postLogin({ mail, password }));
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
