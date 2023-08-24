import { Grid } from "@mui/material";
import Layout from "@root/layouts";
import EditProfile from "@root/sections/edit-profile/EditProfile";

const PAGE_TITLE = "";

// Page Layout
UpdateProfile.getLayout = function getLayout(page: any) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

export default function UpdateProfile() {
  return (
    <Grid container columnSpacing={2} sx={{ mt: 2 }}>
      <EditProfile />
    </Grid>
  );
}
