import React from "react";
import { Box, Grid, Skeleton, useTheme } from "@mui/material";

function SkeletonFormdata() {
  const theme: any = useTheme();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}></Grid>
      <Grid item xs={12} sm={12}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={70}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box sx={style.boxStyle}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={70}
            sx={style.root(theme)}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SkeletonFormdata;
//style
const style = {
  root: (theme: any) => ({
    bgcolor: theme.palette.mode === "light" ? theme.palette.grey[300] : "",
    borderRadius: "2px",
    height: 36,
  }),
  boxStyle: {
    px: 0.5,
    py: 1,
  },
};
