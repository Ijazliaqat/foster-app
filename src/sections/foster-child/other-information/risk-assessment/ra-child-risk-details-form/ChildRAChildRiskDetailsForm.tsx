import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
// import { RAChildRiskDetailsFormFields } from "./RiskAssessmentData";
import FormProvider from "@root/components/hook-form/FormProvider";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
// import { useRAChildInformationForm } from "./useRAChildInformationForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
// import { useRAChildRiskDetailsForm } from "./useRAChildRiskDetailsForm";
import { useChildRAChildRiskDetailsForm } from "./useChildRAChildRiskDetailsForm";
import { RAChildRiskDetailsFormFields } from ".";

const ChildRAChildRiskDetailsForm = () => {
  const {
    router,
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    isLoading,
    action,
    fosterChildId,
  } = useChildRAChildRiskDetailsForm();

  const theme: any = useTheme();
  if (isLoading) return <SkeletonFormdata />;

  return (
    <Grid>
        <h1>hhhhhhhhhhhhhhhhhhhhhhh</h1>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {RAChildRiskDetailsFormFields.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id} sx={{ mt: 1 }}>
                {form.component !== "RadioGroup" && (
                  <form.component
                    size="small"
                    {...form.otherOptions}
                    disabled={action === "view" ? true : false}
                  >
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                )}
              </Grid>
            );
          })}

          <Grid xs={12} sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }} item>
            {action !== "view" && (
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
              >
                Submit
              </LoadingButton>
            )}
            <Button
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              onClick={() =>
                router.push(
                  `/foster-child/child-background-info/child-chronology-of-events?fosterChildId=${fosterChildId}`
                )
              }
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Grid>
  );
};

export default ChildRAChildRiskDetailsForm;
