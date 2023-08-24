import React from "react";
import { Box, Skeleton, useTheme } from "@mui/material";

const TableSkeleton = (): JSX.Element => {
  const theme: any = useTheme();

  return (
    <Box sx={{ mt: 1, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {/* <CircularProgress sx={{ width: 90, height: 90 }} /> */}
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={50}
          sx={style.root(theme)}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={50}
          sx={style.root(theme)}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={50}
          sx={style.root(theme)}
        />
      </Box>
    </Box>
  );
};

export default TableSkeleton;

//style
const style = {
  root: (theme: any) => ({
    bgcolor: theme.palette.mode === "light" ? theme.palette.grey[300] : "",
    borderRadius: "6px",
  }),
};
