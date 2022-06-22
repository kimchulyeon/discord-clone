import React from "react";
import CustomPrimaryBtn from "../../layouts/CustomPrimaryBtn";
import RedirectInfo from "../../layouts/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

export default function LoginFooter({ handleLogin, isFormValid }) {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    console.log("move to register page");
    navigate("/register");
  };

  const getFormNotValidMessage = () => {
    return "Enter correct e-mail address and password should contains between 6 and 12 characters";
  };
  const getFormValidMessage = () => {
    return "Press to Log in!";
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          {/* 버튼 */}
          <CustomPrimaryBtn
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      {/* 회원가입 버튼 */}
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
}
