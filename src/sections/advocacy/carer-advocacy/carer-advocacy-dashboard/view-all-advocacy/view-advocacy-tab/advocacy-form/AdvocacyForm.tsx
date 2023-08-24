// @mui
import { Grid, Typography } from "@mui/material";
// components
import { advocacyFormData } from ".";
import { useAdvocacyForm } from "./useAdvocacyForm";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

// ================================================================================

const AdvocacyForm = (props: any) => {
  const { theme, methods, onSubmit, handleSubmit } = useAdvocacyForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4} rowSpacing={3} sx={{ py: 1.5, px: 2 }}>
        {advocacyFormData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode }}>
                {form.title}
              </Typography>
              {form.requireFileUpload && <RHFUploadFile disabled name="evidence
              " {...methods} require />}
              {form.component ? (
                <form.component disabled={props.disabled} size="small" {...form.otherOptions}>
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              ) : (
                <Typography sx={{ fontSize: "16px", fontWeight: 700, color: theme.palette.primary.main }}>{form.head}</Typography>
              )}
            </Grid>
          );
        })}
      </Grid>
    </FormProvider>
  );
};
export default AdvocacyForm;
