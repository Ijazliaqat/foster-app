// @mui
import { Grid, Typography, Card } from "@mui/material";
// components
import { carerAdvocateData } from ".";
import { useCarerAdvocate } from "./useCarerAdvocate";
import { FormProvider } from "@root/components/hook-form";

// ================================================================================

const CarerAdvocateForm = (props: any) => {
  const { theme, methods, onSubmit, handleSubmit } = useCarerAdvocate();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4} rowSpacing={3} sx={{ py: 1.5, px: 1 }}>
        {carerAdvocateData.map((form: any, i: any) => {
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
export default CarerAdvocateForm;
