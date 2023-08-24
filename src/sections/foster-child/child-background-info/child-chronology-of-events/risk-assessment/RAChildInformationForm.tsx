import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import { RAChildInformationFormFields } from "./RiskAssessmentData";
import FormProvider from "@root/components/hook-form/FormProvider";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { useRAChildInformationForm } from "./useRAChildInformationForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const RAChildInformationForm = () => {
  const {
    router,
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    isLoading,
    action,
    fosterChildId,
  } = useRAChildInformationForm();

  const theme: any = useTheme();
  if (isLoading) return <SkeletonFormdata />;
  return (
    <Grid>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {RAChildInformationFormFields.map((form: any) => {
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
          <Grid xs={12} item>
            <Paper
              elevation={0}
              sx={{
                boxShadow: `0px 0px 3px 1px ${theme.palette.primary.main}`,
              }}
            >
              <Box sx={{ px: 2, py: 2 }}>
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: theme.typography.fontWeightMedium,
                    mb: theme.spacing(2),
                  }}
                  variant="subtitle2"
                >
                  Significant events during the Child&apos;s Local Authority care episode (include
                  date and risk - keep this updated)
                </Typography>
                <Grid container spacing={4}>
                  <Grid item md={6}>
                    <RHFDatePicker name={`date`} label="Date" size="small" fullWidth={true} />
                  </Grid>

                  <Grid item md={6}>
                    <RHFTextField
                      name={"risk"}
                      disabled={action === "view" ? true : false}
                      label="Risk"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
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

export default RAChildInformationForm;
