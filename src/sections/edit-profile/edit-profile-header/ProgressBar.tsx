import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import { FC } from "react";

const ProgressBar: FC<{ percentage: number }> = ({ percentage = 0 }) => {
  const theme: any = useTheme();

  return (
    <Grid container sx={{ backgroundColor: "0000001c", borderRadius: "20px" }}>
      <Grid
        container
        justifyContent="center"
        sx={{
          borderRadius: "20px",
          width: `${percentage}%`,
          backgroundColor: theme.palette.primary.main,
          color: "white",
        }}
      >
        {`${percentage}%`}
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
