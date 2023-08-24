import { Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { formData, formDataPersonalDetails, formDataContactDetails } from ".";
import FormSubmitButtons from "@root/components/FormSubmitButtons";
import { useOtherInfoForm } from "./useOtherInfoForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

export default function OtherInfoForm(props: any) {
  const { disabled, data, applicationFormid } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    isLoading,
  } = useOtherInfoForm(data, applicationFormid);

  if (isLoading) {
    return <SkeletonFormdata />;
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={disabled}
                size="small"
                {...form.otherOptions}
              >
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
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: theme.palette.primary.main }}
          >
            Family Doctor Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: theme.palette.primary.main }}
          >
            Personal Details
          </Typography>
        </Grid>
        {formDataPersonalDetails.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={disabled}
                size="small"
                {...form.otherOptions}
              >
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
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: theme.palette.primary.main }}
          >
            Contact Details
          </Typography>
        </Grid>
        {formDataContactDetails.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={disabled}
                size="small"
                {...form.otherOptions}
              >
                {form?.otherOptions?.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          {disabled ? (
            ""
          ) : (
            <FormSubmitButtons isSubmitting={isSubmitting} isDirty={isDirty} />
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
}
