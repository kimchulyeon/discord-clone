import React from "react";
import CustomPrimaryBtn from "../../layouts/CustomPrimaryBtn";
import RedirectInfo from "../../layouts/RedirectInfo";
import { useNavigate } from "react-router-dom";

export default function LoginFooter({ handleLogin, isFormValid }) {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    console.log("move to register page");
    navigate("/register");
  };

  return (
    <>
      <div>
        {/* 버튼 */}
        <CustomPrimaryBtn
          label="Log in"
          additionalStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
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
