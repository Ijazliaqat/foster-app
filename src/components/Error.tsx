import React from "react";
import Img from "@root/assets/img/somethingWentWrong.png";
import Image from "next/image";
import { Box } from "@mui/material";

const Error = () => {
  return (
    <Box
      sx={(theme: any) => ({
        display: "grid",
        placeItems: "center",
        placeContent: "center",
        mt: theme.spacing(10),
      })}
    >
      <Image src={Img} alt="Error" style={{ width: "min(80vw, 250px)" }} />
    </Box>
  );
};

export default Error;
