import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useCarerReferenceChecksForm } from "./useCarerReferenceChecksForm";
import { CarerReferenceCheckFormValues } from ".";
import { LoadingButton } from "@mui/lab";

const CarerReferenceChecksForm = ({ action }: any) => {
  console.log("action", action);
  const disabled = action === "view" ? true : false;
  const { methods, handleBack, onSubmit, handleSubmit } =
    useCarerReferenceChecksForm();
  let label: any;
  if (action === "view") {
    label = "Uploaded  Meeting Record";
  } else {
    label = "Upload  Meeting Record";
  }
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {CarerReferenceCheckFormValues?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography>{form.title}</Typography>
              {form.component && (
                <form.component
                  fullWidth
                  disabled={disabled}
                  size="small"
                  {...form.componentProps}
                >
                  <Typography sx={(theme) => styles.heading(theme, disabled)}>
                    {form?.heading}{" "}
                  </Typography>
                  {form.componentProps?.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
              {form?.hr && (
                <Box sx={{ my: 2 }}>
                  <hr></hr>
                </Box>
              )}
              {form?.uploadPhoto && (
                <>
                  <RHFUploadFile
                  // label={label}
                    name={"updateMeetingRecord"}
                    label='Upload Meeting record'
                    {...methods}
                    required
                  />
                </>
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: "1rem", mt: 4 }}>
              {!disabled && (
                <LoadingButton type="submit" variant="contained">
                  Submit
                </LoadingButton>
              )}
              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": { backgroundColor: "#F6830F" },
                }}
                type="button"
                variant="contained"
                onClick={handleBack}
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default CarerReferenceChecksForm;

const styles = {
  heading: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
};
