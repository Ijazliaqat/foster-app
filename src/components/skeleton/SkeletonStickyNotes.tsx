import { Box, Grid, Skeleton } from "@mui/material";
import theme from "@root/theme";
import React from "react";

function SkeletonStickyNotes() {
  return (
    <Box sx={style.boxStyle}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        sx={style.root(theme)}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        sx={style.root(theme)}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        sx={style.root(theme)}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        sx={style.root(theme)}
      />
    </Box>
  );
}

export default SkeletonStickyNotes;
//style
const style = {
  root: (theme: any) => ({
    bgcolor: "#d1a813",
    borderRadius: "2px",
    height: 25,
  }),
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginTop:"1rem"
  },
};
