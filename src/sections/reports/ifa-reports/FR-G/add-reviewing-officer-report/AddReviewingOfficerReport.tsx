import React from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useAddReviewingOfficerReport } from "./useAddReviewingOfficerReport";
import { FRD1FormData } from ".";

const AddReviewingOfficerReport = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } =
    useAddReviewingOfficerReport();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {FRD1FormData.map((form, i) => (
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

export default AddReviewingOfficerReport;
const style = {
  title: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
};
