import { Grid } from "@mui/material";
import PersonalDetailsForm from "./addressDetailsForm/AddressDetailsForm";

const AddressDetails = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={11}>
        <PersonalDetailsForm />
      </Grid>
    </Grid>
  );
};

export default AddressDetails;
