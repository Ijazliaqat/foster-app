import * as React from "react";
import { Grid, Box, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormProvider } from "@root/components/hook-form";
import { formData } from ".";
import { useSocialMediaForm } from "./useSocialMediaForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "35%" },
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  pl: 2,
  pr: 2,
  pt: 4,
  pb: 4,
};

export default function SocialMediaModal({
  open,
  handleClose,
  dataArr,
  accountDetail,
  setData,
}: any) {
  const { methods, handleSubmit, onSubmit, isSubmitting, isDirty, theme } =
    useSocialMediaForm(accountDetail, handleClose);

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
          sx={{ mb: 5 }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Social Media Account
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            {formData.map((form: any, i: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={i}>
                  <form.component size="small" {...form.otherOptions}>
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
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
