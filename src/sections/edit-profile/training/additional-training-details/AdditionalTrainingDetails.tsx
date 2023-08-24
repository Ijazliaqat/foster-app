import { FC, useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Grid, Modal, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ButtonWithIcon from "../../locals/ButtonWithIcon";
import AddTrainingDocForm from "./addTrainingForm/AddTrainingDocForm";
import AdditionalTrainingTable from "./additional-training-table/AdditionalTrainingTable";
const AdditionalTrainingDetails: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [flags, setFlags] = useState({ addRefModel: false });
  const addRefModelOpen = () => {
    setFlags((pre) => ({ ...pre, addRefModel: true }));
  };

  const addRefModelClose = () => {
    setFlags((pre) => ({ ...pre, addRefModel: false }));
  };

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item>
          <Typography
            sx={{ fontWeight: 600, color: theme.palette.primary.main }}
          >
            Additional Training Details
          </Typography>
        </Grid>
        <Grid item>
          <InfoIcon sx={{ color: theme.palette.primary.main }} />
        </Grid>
      </Grid>
      <Grid item container>
        <ButtonWithIcon text="Add Taining Docs" onClick={addRefModelOpen} />
      </Grid>
      <Grid item sm={12}>
        <AdditionalTrainingTable />
      </Grid>
      <Grid item sx={{ mt: 2 }}>
        <Button variant="contained" onClick={activateNextForm}>
          continue
        </Button>
      </Grid>
      <Modal open={flags.addRefModel} onClose={addRefModelClose}>
        <Grid
          container
          sx={{
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "40%",
          }}
        >
          <AddTrainingDocForm addRefModelClose={addRefModelClose} />
        </Grid>
      </Modal>
    </Grid>
  );
};

export default AdditionalTrainingDetails;
