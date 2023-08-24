import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const UnsignedDialogbox = (props: any) => {
  const { open, handleClose, component } = props;
  const theme: any = useTheme();
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          p={1}
          sx={{
            fontSize: 20,
            textAlign: "center",
          }}
        >
          <NotificationsIcon
            sx={{ fontSize: 120, color: theme?.palette?.primary?.main }}
          />
        </Grid>
        <DialogContent>
          {/* <DialogContentText> */}

          <h2 style={{ textAlign: "center" }}>Reminder</h2>
          <span
            style={{ textAlign: "center", fontSize: "16px", fontWeight: 500 }}
          >
            Do you want to send reminder notification to the Foster Carer?
          </span>
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="error" onClick={handleClose}>
            NO
          </Button>
          <Button variant="contained" onClick={handleClose} sx={{}}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
