import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Backdrop, Button, Grid, Typography } from "@mui/material";
import DeleteIcon from "../../assets/svg/delete-icon.svg";
//---icons
import Image from "next/image";

const DeleteModel = (props: any) => {
  //---usestate handlers and themes
  const { open, handleClose, onDeleteClick } = props;
  const theme: any = useTheme();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box sx={Styles.root}>
        <Grid container>
          <Grid xs={12} item>
            <Box sx={Styles.innerBox(theme)}>
              <Image src={DeleteIcon} alt="" />
              <Box sx={{ pt: "24px", textAlign: "center" }}>
                <Typography variant="h3" sx={Styles.heading}>
                  Are you sure ?
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "500" }}>
                  You won’t be able to revert this !
                </Typography>
              </Box>
              <Box sx={Styles.buttonWrapper}>
                <Button onClick={onDeleteClick} sx={Styles.buttonError(theme)}>
                  Yes, delete it
                </Button>
                <Button onClick={handleClose} sx={Styles.buttonSuccess(theme)}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DeleteModel;
//-----------------------------------------------------------------------
// styles
const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 500 },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  innerBox: (theme: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    pt: "10px",
  }),
  buttonWrapper: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    mt: 3.5,
    mb: 1,
  }),
  buttonError: (theme: any) => ({
    bgcolor: theme.palette.error.darker,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.error.darker },
    px: 2,
    py: 1,
    fontSize: "16px !important",
    fontWeight: "600",
  }),
  buttonSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
    fontSize: "16px !important",
    fontWeight: "600",
  }),
  heading: { fontSize: "24px", fontWeight: "600" },
};
