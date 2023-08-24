import { Typography } from "@mui/material";
import React from "react";

export const SavingAccount = () => {
  return (
    <>
    <Typography sx={{ color: "#DC3545" }}>No Details ( No Bank Account !!! )</Typography>
      <Typography sx={{ display: "flex" }}>
        <Typography sx={{ color: "#0E918C", fontWeight: "600", mr: 1 }}>
          Note:
        </Typography>
        Request your Foster Carer / Social Woker to Open a Minor Bank Account
      </Typography>
    </>
  );
};
