import React from "react";
import { Box } from "@mui/material";
import NoContant from "@root/assets/svg/no-contant";

const NoContentFound = (): JSX.Element => {
  return (
    <Box display={"flex"}>
      <NoContant />
    </Box>
  );
};

export default NoContentFound;
