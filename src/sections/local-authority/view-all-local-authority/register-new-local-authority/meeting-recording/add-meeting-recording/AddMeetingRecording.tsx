import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { LoadingButton } from "@mui/lab";
import { useAddMeetingRecording } from "./useAddMeetingRecording";
import { addMeetingRecordingData } from ".";

const AddMeetingRecording = (props: any) => {
  const { isAddModalOpen, setIsAddModalOpen, actionType, viewTableRow } = props;
  const { methods, handleSubmit, onSubmit } = useAddMeetingRecording();

  return (
    <>
      <Dialog
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        maxWidth={"sm"}
        PaperProps={{ sx: { maxHeight: "600px" } }}
      >
        <DialogContent>
          <Typography
            component={"p"}
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              mb: "20px",
              textTransform: "capitalize",
            }}
          >
            {`${actionType} Meeting & Recordings`}
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {addMeetingRecordingData.map((form: any, i: number) => (
                <Grid item xs={12} md={form.gridLength} key={i}>
                  <Typography sx={{ ...styles.title, mt: "15px", mb: 0.3 }}>
                    {form.title}
                  </Typography>
                  <form.component
                    disabled={actionType === "view" ? true : false}
                    {...form.otherOptions}
                  >
                    {form.otherOptions.select
                      ? form.otherOptions.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12} md={12} sx={{ mt: "39px" }}>
              <RHFUploadFile
                name="report"
                label={
                  actionType === "view" ? "Uploaded Report " : " Upload Report"
                }
                disabled={actionType === "view" ? true : false}
                required={true}
                {...methods}
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{ mt: "39px" }}>
              <RHFUploadFile
                label={
                  actionType === "view"
                    ? "Uploaded Attach Video/Audio File "
                    : " Upload Attach Video/Audio File"
                }
                name="attachFile"
                disabled={actionType === "view" ? true : false}
                required={true}
                {...methods}
              />
              <Typography fontSize={14} fontWeight={400}>
                Maximum File Size is 1GB
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: "40px" }}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                {actionType !== "view" && (
                  <LoadingButton type="submit" variant="contained">
                    Upload
                  </LoadingButton>
                )}
                <Button
                  sx={{
                    backgroundColor: "#F6830F",
                    "&:hover": { backgroundColor: "#F6830F" },
                  }}
                  type="button"
                  variant="contained"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddMeetingRecording;

const styles = {
  title: { fontWeight: 600, fontSize: "16px" },
};
