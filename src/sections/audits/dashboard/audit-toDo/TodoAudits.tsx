import React from "react";
import { todoAudits } from "..";
import { Box, Typography } from "@mui/material";

const TodoAudits = () => {
  return (
    <Box sx={Style.cardStyle}>
      <Typography sx={{ color: "#0E918C", fontSize: "14px", fontWeight: "600" }}>
        Audits to Do
      </Typography>
      {todoAudits.map((item: any,index:number) => (
        <Box display="flex" alignItems="center" key={index} gap="10px" mt="19px" ml="14px">
          <Box sx={Style.bulletStyle}></Box>
          <Typography key={item?.id} fontSize="14px" fontWeight="500">
            {item?.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TodoAudits;

const Style = {
  cardStyle: {
    padding: { md: "30px", xs: "10px" },
    minHeght: "292px",
    boxShadow: "0px 0px 7px rgba(14, 145, 140, 0.25)",
    borderRadius: "10px",
  },
  bulletStyle: {
    width: "14px",
    height: "13px",
    background: "#0E918C",
    borderRadius: "5px",
  },
};
