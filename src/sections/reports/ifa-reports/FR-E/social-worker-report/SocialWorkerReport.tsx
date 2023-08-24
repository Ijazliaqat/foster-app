import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { useSocialWorkerReport } from "./useSocialWorkerReport";
import { FREFormData } from ".";

const SocialWorkerReport = ({ action, id }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } =
    useSocialWorkerReport();
  return (
    <Card sx={{ p: 2 }}>
      <Box textAlign={"center"}>
        <Typography sx={(theme) => style.headerTitle(theme)}>
          FR-E: CHILD’S SOCIAL WORKER REPORT
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            mb: "30px",
            fontSize: "16px",
            color: "#898989",
          }}
        >
          When undertaking a review, Regulation 28(3)(b) of the Fostering
          Services Regulations 2011 requires the fostering service to take into
          account the views of the placing authority for any child placed within
          the preceding year. This is achieved by asking the child’s social
          worker for their views, and this forms an important part of the review
          process. Children’s social workers are expected to complete these
          reports, but the time that goes into this needs to be proportionate.
          Supervising social workers will be writing the main indepth reports
          that provide evidence about the foster carer’s practice, and these
          will be supplemented by a combination of ‘yes/no’ answers and/or any
          additional brief comments from the child’s social worker. If the
          foster carer has performed well then a fairly brief report is
          acceptable. If the child’s social worker has answered ‘no’ to any of
          the questions, and is concerned about the foster carer’s practice,
          then they will need to write more in order to convey these concerns
          clearly. It is not acceptable for the child’s social worker to not
          complete the form at all. Please note that this report will be shared
          with the foster carer
        </Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {FREFormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              <Typography sx={(theme) => style.title(theme)}>
                {form.title}
              </Typography>
              {form.head && (
                <Typography sx={(theme) => style.title(theme)}>
                  {form.head}
                </Typography>
              )}
              {form.otherOptions && (
                <form.component
                  disabled={disabled}
                  size="small"
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
              )}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
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

export default SocialWorkerReport;
const style = {
  title: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
  headerTitle: (theme: any) => ({
    fontWeight: 700,
    mb: "20px",
    fontSize: "17px",
    color: theme.palette.primary.main,
  }),
};
