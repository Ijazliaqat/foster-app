// @mui
import { Grid, Typography } from "@mui/material";
// components
import { referralDetailsData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useReferralDetails } from "./useReferralDetails";

// ================================================================================

const ReferralDetailsForm = (props: any) => {
  const { theme, methods, onSubmit, handleSubmit } = useReferralDetails();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4} rowSpacing={3} sx={{ py: 1.5, px: 2 }}>
        {referralDetailsData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode }}>
                {form.title}
              </Typography>
              {form.component ? (
                <form.component fullWidth disabled={props.disabled} size="small" {...form.otherOptions}>
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
export default ReferralDetailsForm;
