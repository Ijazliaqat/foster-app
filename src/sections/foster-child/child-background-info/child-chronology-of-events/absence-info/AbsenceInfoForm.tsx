import { Button, Grid, useTheme } from "@mui/material";
import { absenceInfoFormFields } from "./AbsenceInfoData";
import FormProvider from "@root/components/hook-form/FormProvider";
import { LoadingButton } from "@mui/lab";
import { useAbsenceInfoForm } from "./useAbsenceInfoForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const AbsenceInfoForm = () => {
  const {
    router,
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    isLoading,
    action,
    fosterChildId,
  } = useAbsenceInfoForm();

  const theme: any = useTheme();
  if (isLoading) return <SkeletonFormdata />;
  return (
    <Grid>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {absenceInfoFormFields.map((form: any) => {
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

export default AbsenceInfoForm;
