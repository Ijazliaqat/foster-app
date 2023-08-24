import React from "react";
import { Dialog, DialogContent } from "@mui/material";

interface IProps {
  open: boolean;
  handleClose: () => void;
  Component: () => JSX.Element;
}

const ViewFormModal = (props: IProps) => {
  const { open, handleClose, Component } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={"sm"}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0)",
          opacity: 0,
        },
      }}
    >
      <DialogContent>
        <Component />
      </DialogContent>
    </Dialog>
  );
};

export default ViewFormModal;
