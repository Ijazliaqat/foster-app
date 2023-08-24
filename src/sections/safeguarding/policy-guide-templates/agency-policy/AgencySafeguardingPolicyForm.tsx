// @mui
import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useAgencySafeguardingPolicy } from "./useAgencySafeguardingPolicy";
import { formData } from ".";

export default function CarerAddressHistoryForm({ action }: any) {
  const disabled = action === "view" ? true : false;
  const { methods, handleSubmit,  onSubmit, theme, isSubmitting, router } = useAgencySafeguardingPolicy();
  let label: any;
  if (action === "view") {
    label = "Uploaded Image";
  } else {
    label = "Upload Image";
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Safeguarding Policy Document
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <RHFUploadFile name="updatePhoto" {...methods} disabled={disabled} label={label} required />
        </Grid>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component disabled={disabled} size="small" {...form.otherOptions}>
                {form.otherOptions.select
                  ? form.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {" "}
                      {option.label}{" "}
                    </option>
                  ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            {!disabled && (
              <LoadingButton sx={{ marginRight: "1rem" }} type="submit" variant="contained" loading={isSubmitting}>
                Submit
              </LoadingButton>
            )}

            <Button
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
              }}
              onClick={() => {
                router.push("/safeguarding/policy-guide-templates/agency-policy");
              }}
              type="button"
              variant="contained"
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
