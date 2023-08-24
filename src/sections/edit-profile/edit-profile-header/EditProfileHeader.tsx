import { Grid, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";
import { useTheme } from "@emotion/react";
import { shortName } from "../util/Util";
import { useGetProfileProgressInfoQuery } from "@root/services/update-profile/about-the-candidate/aboutTheCandidateApi";
import FormSkeleton from "../render-form/FormSkeleton";

const EditProfileHeader = () => {
  const theme: any = useTheme();
  const { data, isLoading } = useGetProfileProgressInfoQuery({});
  if (isLoading) return <FormSkeleton />;
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", color: theme.palette.primary.main }}
        >
          {shortName(data?.data?.name || "Name", 25)}
        </Typography>
      </Grid>
      <Grid item>
        <p style={{ fontWeight: "500" }}>
          Here you can see the progress of{" "}
          {shortName(data?.data?.name || "Name", 25)}‘s application.
        </p>
      </Grid>
      {/* Progress Bar  */}
      <Grid item>
        <ProgressBar percentage={data?.data?.overalProfileCompletion || 0} />
      </Grid>
      {/* A Line  */}
      <Grid
        item
        sx={{ borderBottom: "1px solid #C4C4C4", margin: "1em" }}
      ></Grid>
      <Grid item container direction="row-reverse" spacing={3}>
        <Grid item>
          <Typography sx={{ fontWeight: "bold" }}>
            User Type:
            <span style={{ color: theme.palette.primary.main }}>
              {shortName(data?.data?.defaultRole, 35)}
            </span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: "bold" }}>
            User Status:{" "}
            <span style={{ color: theme.palette.primary.main }}>
              {shortName(data?.data?.isActive ? "Active" : "Inactive", 15)}
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditProfileHeader;
