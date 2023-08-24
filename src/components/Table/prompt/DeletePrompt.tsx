import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Backdrop, Button, Grid, Typography } from "@mui/material";
//---icons
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import TableAction from "@root/components/TableAction";
interface IDeletePrompt {
  onDeleteClick?: any;
}
const DeletePrompt: React.FunctionComponent<IDeletePrompt> = ({
  onDeleteClick,
}) => {
  //---usestate handlers and themes

  const theme: any = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <TableAction size="small" type="delete" onClicked={handleOpen} />
      {open && (
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
                  <CancelOutlinedIcon sx={Styles.crossIcons(theme)} />
                  <Typography variant="h3">Are you sure ?</Typography>
                  <Typography variant="h5">
                    You won’t be able to revert this !
                  </Typography>
                  <Box sx={Styles.buttonWrapper}>
                    <Button
                      onClick={onDeleteClick}
                      sx={Styles.buttonError(theme)}
                    >
                      Yes, delete it
                    </Button>
                    <Button
                      onClick={handleClose}
                      sx={Styles.buttonSuccess(theme)}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default DeletePrompt;
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
  }),
  crossIcons: (theme: any) => ({
    fontSize: "100px",
    color: theme.palette.error.main,
  }),
  buttonWrapper: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    mt: 2,
  }),
  buttonError: (theme: any) => ({
    bgcolor: theme.palette.error.darker,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.error.darker },
    px: 2,
    py: 1,
  }),
  buttonSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
  }),
};
