import { Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const AddMoreBtn: React.FC<any> = (props) => {
  const theme: any = useTheme();
  return (
    <Grid
      {...props}
      item
      container
      direction="column"
      sx={{
        width: "100px",
        margin: "0.5em",
        userSelect: "none",
        cursor: "pointer",
      }}
      justifyContent="center"
    >
      <Grid
        item
        sx={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <AddCircleOutlineRoundedIcon
          sx={{
            fontSize: "2em",
            color: theme.palette.primary.main,
          }}
        />
      </Grid>
      <Grid item sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
        Add more
      </Grid>
    </Grid>
  );
};

export default AddMoreBtn;
