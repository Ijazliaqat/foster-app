import { Grid, Typography } from "@mui/material";
import { FormProvider } from "../../../../../components/hook-form";
import { formDataAreaoffice, formDataAreaPersonalInfo } from ".";
import FormSubmitButtons from "@root/components/FormSubmitButtons";
import { useBasicInformationForm } from "./useBasicInformationForm";

export default function BasicInformationForm(props: any) {
  const { disabled, data, id } = props;
  const { methods, handleSubmit, onSubmit, isSubmitting, isDirty, theme } =
    useBasicInformationForm(data, id);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {formDataAreaoffice.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                {...form.componentProps}
                disabled={disabled}
                size="small"
              >
                {form.componentProps?.select
                  ? form.options.map((option: any, index: any) => (
                      <option key={index} value={option.value}>
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
            Personal Details
          </Typography>
        </Grid>
        {formDataAreaPersonalInfo.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                {...form.componentProps}
                disabled={disabled}
                size="small"
              >
                {form.componentProps?.select
                  ? form.options.map((option: any, index: any) => (
                      <option key={index} value={option.value}>
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
