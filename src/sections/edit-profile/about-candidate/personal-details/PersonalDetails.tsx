import { Grid } from "@mui/material";
import PersonalDetailsForm from "./personalDetailsForm/PersonalDetailForm";

const PersonalDetails = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={11}>
        <PersonalDetailsForm />
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
