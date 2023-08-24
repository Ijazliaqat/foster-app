import { Grid, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
const SidebarHeader = () => {
  return (
    <Grid container alignItems="center">
      <Grid item sm={1}>
        <HomeIcon />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">PROFILE & AUDIT VIEW</Typography>
      </Grid>
    </Grid>
  );
};

export default SidebarHeader;
