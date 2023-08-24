import { FC, useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Grid, Modal, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ButtonWithIcon from "../../locals/ButtonWithIcon";
import BankDetailsForm from "./bankDetailsForm/BankDetailsForm";
import BankdetailsTable from "./bank-details-table/BankdetailsTable";
const BankDetails: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [flags, setFlags] = useState({ addRefModel: false });
  const ModelOpen = () => {
    setFlags((pre) => ({ ...pre, addRefModel: true }));
  };

  const ModelClose = () => {
    setFlags((pre) => ({ ...pre, addRefModel: false }));
  };

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item>
          <Typography
            sx={{ fontWeight: 600, color: theme.palette.primary.main }}
          >
            Bank Details
          </Typography>
        </Grid>
        <Grid item>
          <InfoIcon sx={{ color: theme.palette.primary.main }} />
        </Grid>
      </Grid>
      <Grid item container sx={{ margin: "0.5em 0em" }}>
        <ButtonWithIcon text="Add Bank Details" onClick={ModelOpen} />
      </Grid>
      <BankdetailsTable />
      <Grid item sx={{ mt: 2 }}>
        <Button variant="contained" onClick={activateNextForm}>
          continue
        </Button>
      </Grid>

      <Modal open={flags.addRefModel} onClose={ModelClose}>
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
          <BankDetailsForm addRefModelClose={ModelClose} />
        </Grid>
      </Modal>
    </Grid>
  );
};

export default BankDetails;
