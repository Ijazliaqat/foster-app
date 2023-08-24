import { Typography } from "@mui/material";
import React from "react";

const RadiaHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography sx={{ color: "#14142B" }} variant="h6">
      {text}
    </Typography>
  );
};

export default RadiaHeader;
