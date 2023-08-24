import { useState } from "react";
import { Grid, Modal } from "@mui/material";
import ButtonWithIcon from "@root/sections/edit-profile/locals/ButtonWithIcon";
import WorkExperinceForm from "./addUnemployementPeriodForm/UnemployementPeriodForm";
import UnemploymentTable from "./unemployment-table/UnemploymentTable";
const Unemployement = () => {
  const [flags, setFlags] = useState({ workExperienceModel: false });
  const workExperienceModelOpen = () => {
    setFlags((pre) => ({ ...pre, workExperienceModel: true }));
  };

  const workExperienceModelClose = () => {
    setFlags((pre) => ({ ...pre, workExperienceModel: false }));
  };

  return (
    <Grid container direction="column" sx={{ margin: "1em 0em" }}>
      <Grid item container sx={{ margin: "0.5em 0em" }}>
        <ButtonWithIcon
          text="Add Unemployement Period"
          onClick={workExperienceModelOpen}
        />
      </Grid>
      <UnemploymentTable />

      <Modal
        open={flags.workExperienceModel}
        onClose={workExperienceModelClose}
      >
        <Grid
          container
          sx={{
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          sm={5}
          xs={10}
        >
          <WorkExperinceForm close={workExperienceModelClose} />
        </Grid>
      </Modal>
    </Grid>
  );
};

export default Unemployement;
