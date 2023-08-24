import React, { Dispatch, FC, SetStateAction } from "react";
import { Grid, Modal } from "@mui/material";
import UploadDocsForm from "./upload-docs-form/UploadDocsForm";
import UploadDocsUpdateViewForm from "./upload-docs-update-view-form/UploadDocsUpdateViewForm";

const UploadDocsUpdateViewModel: FC<{
  modelStatus: boolean;
  disabled: boolean;
  defaultValue: any;
  closeModel: () => void;
}> = ({ modelStatus, closeModel, disabled, defaultValue }) => {
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
        <UploadDocsUpdateViewForm
          modelStatus={modelStatus}
          closeModel={closeModel}
          disabled={disabled}
          defaultValue={defaultValue}
        />
      </Grid>
    </Modal>
  );
};

export default UploadDocsUpdateViewModel;
