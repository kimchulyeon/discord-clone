import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const RedirectText = styled.span`
  color: #00aff4;
  font-weight: 500;
  cursor: pointer;
`;

export default function RedirectInfo({ text, redirectText, additionalStyles, redirectHandler }) {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
}
