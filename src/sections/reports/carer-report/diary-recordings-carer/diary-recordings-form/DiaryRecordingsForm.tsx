import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { useDiaryRecordingsForm } from "./useDiaryRecordingsForm";
import { DiaryRecordingFormData } from ".";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { LoadingButton } from "@mui/lab";

const DiaryRecordingsForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods, handleBack, onSubmit, handleSubmit } =
    useDiaryRecordingsForm();
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
          {DiaryRecordingFormData?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              {form.component && (
                <form.component
                fullWidth
                  disabled={disabled}
                  size="small"
                  {...form.componentProps}
                >
                  {form?.heading}
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
                    {...form.componentProps}
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

export default DiaryRecordingsForm;
