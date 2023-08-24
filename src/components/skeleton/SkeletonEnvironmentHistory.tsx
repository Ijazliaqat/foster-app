import { Box, Grid, Skeleton, useTheme } from "@mui/material";
import React from "react";

const SkeletonEnvironmentHistory = () => {
  const theme: any = useTheme();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between", p: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            // p: 2,
          }}
        >
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            sx={style.root(theme)}
          />
          <Box sx={{ display: "flex", flexDirection: "column", ml: 2, justifyContent: 'flex-start' }}>
            <Skeleton
              variant="text"
              width={400}
              height={60}
              sx={style.root(theme)}
            />
            <Skeleton
              variant="text"
              width={100}
              height={30}
              sx={style.root(theme)}
            />
            <Skeleton
              variant="text"
              width={400}
              height={60}
              sx={style.root(theme)}
            />
            <Skeleton
              variant="text"
              width={100}
              height={30}
              sx={style.root(theme)}
            />
          </Box>
        </Box>
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          sx={style.root(theme)}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between", p: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            // p: 2,
          }}
        >
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            sx={style.root(theme)}
          />
          <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
            <Skeleton
              variant="text"
              width={400}
              height={60}
              sx={style.root(theme)}
            />
            <Skeleton
              variant="text"
              width={100}
              height={30}
              sx={style.root(theme)}
            />
          </Box>
        </Box>
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          sx={style.root(theme)}
        />
      </Grid>
    </Grid>
  );
};

export default SkeletonEnvironmentHistory;

const style = {
  root: (theme: any) => ({
    bgcolor: theme.palette.mode === "light" ? theme.palette.grey[300] : "",
    height: 36,
  }),
  boxStyle: {
    px: 0.5,
    py: 1,
  },
};
