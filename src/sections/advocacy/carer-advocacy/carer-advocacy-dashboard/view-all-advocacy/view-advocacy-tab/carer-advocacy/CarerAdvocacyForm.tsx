// @mui
import { Grid, Typography } from "@mui/material";
// components
import { carerAdvocacyData } from ".";
import { useCarerAdvocacy } from "./useCarerAdvocacy";
import { FormProvider } from "@root/components/hook-form";

// ===========================================================================================

const CarerAdvocacyForm = (props: any) => {
  const { theme, handleSubmit, onSubmit, methods } = useCarerAdvocacy();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4} rowSpacing={3} sx={{ px: 1, py: 2 }}>
        {carerAdvocacyData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode }}>
                {form.title}
              </Typography>
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
export default CarerAdvocacyForm;
