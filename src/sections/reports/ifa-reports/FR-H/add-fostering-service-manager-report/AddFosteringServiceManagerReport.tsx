import React from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider } from "@root/components/hook-form";
import { useAddFosteringServiceManagerReport } from "./useAddFosteringServiceManagerReport";
import { FRD1FormData } from ".";

const AddFosteringServiceManagerReport = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } =
    useAddFosteringServiceManagerReport();
  return (
    <Card sx={{ p: 2 }}>
      <Box textAlign={"center"}>
        <Typography sx={(theme) => style.headerTitle(theme)}>
          FR-H: FOSTERING SERVICE MANAGER REPORT
        </Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {FRD1FormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
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

export default AddFosteringServiceManagerReport;
const style = {
  headerTitle: (theme: any) => ({
    fontWeight: 700,
    mb: "20px",
    fontSize: "17px",
    color: theme.palette.primary.main,
  }),
};
