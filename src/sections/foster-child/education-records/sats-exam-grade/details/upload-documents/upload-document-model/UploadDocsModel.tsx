import React, { Dispatch, FC, SetStateAction } from "react";
import { Grid, Modal } from "@mui/material";
import UploadDocsForm from "./upload-docs-form/UploadDocsForm";

const UploadDocsModel: FC<{
  modelStatus: boolean;
  closeModel: () => void;
}> = ({ modelStatus, closeModel }) => {
  return (
    <Modal open={modelStatus} onClose={closeModel}>
      <Grid
        container
        sx={{
          background: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        item
        sm={5}
        xs={10}
      >
        <UploadDocsForm closeModel={closeModel} />
      </Grid>
    </Modal>
  );
};

export default UploadDocsModel;
