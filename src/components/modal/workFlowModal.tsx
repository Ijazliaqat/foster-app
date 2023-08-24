import * as React from "react";
import Modal from "@mui/material/Modal";
import { Backdrop, Grid, Box } from "@mui/material";
import Image from "next/image";
import workFlowImage from "../../assets/svg/referral/workFlowImage.svg";

const WorkFlowModal = (props: any) => {
  const { open, handleClose } = props;

  return (
    <Box>
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
              <Image
                src={workFlowImage}
                width={1015}
                height={845}
                alt="image"
              ></Image>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};
export default WorkFlowModal;
const Styles = {
  root: () => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 1015 },
    height: { xs: "95%", sm: 845 },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
  }),
};
