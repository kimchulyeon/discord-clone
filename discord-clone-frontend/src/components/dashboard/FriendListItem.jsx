import React from "react";
import { Button } from "@mui/material";

function FriendListItem({ id, username, isOnline }) {
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    ></Button>
  );
}

export default FriendListItem;
