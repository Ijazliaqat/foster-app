import React from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useFosteredYoungPersonCommets } from "./useFosteredYoungPersonCommets";
import { FRD2FormData } from ".";

const FosteredYoungPersonCommets = ({ action, id }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } =
    useFosteredYoungPersonCommets();
  return (
    <Card sx={{ p: 2 }}>
      <Box textAlign={"center"}>
        <Typography sx={(theme) => style.headerTitle(theme)}>
          FR-D2: YOUNG PERSON LIVING IN THE HOUSEHOLD’S COMMENTS
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            mb: "30px",
            fontSize: "16px",
            color: "#898989",
          }}
        >
          It is the responsibility of the supervising social worker to agree
          with the young person’s social worker how the young person will be
          approached to complete this form. Wherever possible, it should be
          completed by the young person in their own words, but if they need
          support this should be provided by the person they are most
          comfortable with (but not the foster carer). Each fostered young
          person should complete a separate form. Please note that this form
          will be shared with your foster carer(s). If you have relevant
          information that you think should not be shared with your foster
          carer(s) then please discuss this with your social worker.
        </Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {FRD2FormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              <Typography sx={(theme) => style.title(theme)}>
                {form.title}
              </Typography>
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

export default FosteredYoungPersonCommets;
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
