import React from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, Modal, Typography, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { formData } from ".";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import useAddNewModal from "./useAddNewModal";

export default function AddNewModal({ open, handleClose, addHandler }: any) {
  const { theme, handleSubmit, methods, isSubmitting, isDirty } =
    useAddNewModal();

  const onSubmit = (data: any) => {
    addHandler(data);
    handleClose(false);
  };

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
      <Box sx={{ ...style, background: theme.palette.background.default  }}>
        <Typography
          sx={{ mb: 5 }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Add New Category
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            {formData.map((form: any, i: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={i}>
                  {form.component && (
                    <form.component size="small" fullWidth {...form.componentProps}>
                      {form?.heading}
                      {form.componentProps.select
                        ? form.options.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  )}
                  {form?.uploadPhoto && (
                    <RHFUploadFile name={"updatePhoto"} label="Category Image" {...methods} required />
                  )}
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <LoadingButton
                sx={{ marginRight: "1rem" }}
                type="submit"
                variant="contained"
                loading={isSubmitting}
                disabled={!isDirty}
              >
                Save
              </LoadingButton>
              <LoadingButton
                onClick={() => handleClose()}
                type="button"
                sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
                variant="contained"
              >
                Cancel
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  pl: 2,
  pr: 2,
  pt: 1,
  pb: 4,
};
