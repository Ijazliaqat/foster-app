import { Box, Typography } from "@mui/material";
import React from "react";

const StepIconsButton = (number: any, bgColors: any) => {
  return (
    <Box
      sx={{
        border: "2px solid #898989",
        padding: "2px !important",
        borderRadius: "50%",
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          height: 68,
          width: 68,
          background: bgColors,
          display: { sm: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #fff",
          boxShadow: "inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
          "@media (max-width: 600px)": {
            height: 48,
            width: 48,
          },
        }}
      >
        <Typography
          color="white"
          variant="body1"
          sx={{
            fontSize: "35px !important",
            "@media (max-width: 600px)": {
              fontSize: "24px !important",
            },
          }}
        >
          {number + 1}
        </Typography>
      </Box>
    </Box>
  );
};

export default StepIconsButton;
