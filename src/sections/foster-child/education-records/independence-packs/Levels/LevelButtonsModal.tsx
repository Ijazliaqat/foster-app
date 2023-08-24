import * as React from "react";
import { Grid, Box, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormProvider } from "@root/components/hook-form";
import SingleLevel from "./SingleLevel";
import BronzeLevel from "@root/assets/svg/bronze-level";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "65%", lg: "55%", xl: "40%" },
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  pl: 2,
  pr: 2,
  pt: 2,
  pb: 4,
};

export default function LevelButtonsModal({
  open,
  handleClose,
  dataArr,
  accountDetail,
  setData,
}: any) {
  let theme = useTheme();
  return (
    <Modal
      sx={{
        borderRadius: "8px",
        border: "1px solid transparent",
      }}
      disableAutoFocus
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, background: theme.palette.background.default }}>
        <Typography
          sx={{ mb: 5, fontWeight: 700 }}
          id="modal-modal-title"
          variant="h5"
          component="h1"
        >
          Select Level
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <SingleLevel levelName="Bronze" bgColor={"#A46628"}>
            <BronzeLevel width="40" height="66" color={"#FFFFFF"} />
          </SingleLevel>
          <SingleLevel levelName="Silver" bgColor={"#A4B0C1"}>
            <BronzeLevel width="40" height="66" color={"#FFFFFF"} />
          </SingleLevel>
          <SingleLevel levelName="Gold" bgColor={"#FFBA01"}>
            <BronzeLevel width="40" height="66" color={"#FFFFFF"} />
          </SingleLevel>
        </Box>
      </Box>
    </Modal>
  );
}
