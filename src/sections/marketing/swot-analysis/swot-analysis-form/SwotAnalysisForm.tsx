import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

import { LoadingButton } from "@mui/lab";
import { SwotAnalysisFormData } from ".";
import { useSwotAnalysisForm } from "./useSwotAnalysisForm";

const SwotAnalysisForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods, handleBack, onSubmit, handleSubmit } = useSwotAnalysisForm();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {SwotAnalysisFormData?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography sx={(theme) => styles.title(theme, disabled)}>
                {form.title}
              </Typography>
              {form.component && (
                <form.component fullWidth
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

              {form?.uploadPhoto && (
                <>
                  <RHFUploadFile name={"competitor"} label={"Upload Swot (Competitor)"} {...methods} required />
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

export default SwotAnalysisForm;
const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: disabled ? "#898989" : "#212529",
  }),
};
