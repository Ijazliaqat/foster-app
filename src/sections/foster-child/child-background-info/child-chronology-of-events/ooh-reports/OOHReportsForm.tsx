import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import FormProvider from "@root/components/hook-form/FormProvider";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { useOohReportsForm } from "./useOOHReportsForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { oohReportsFormFields } from "./OOHReportsData";

const OOHReportsForm = () => {
  const { router, methods, onSubmit, handleSubmit, isSubmitting, isLoading, action,fosterChildId } =
  useOohReportsForm();

  const theme: any = useTheme();
  if (isLoading) return <SkeletonFormdata />;
  return (
    <Grid>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ my: 2 }}>
          <Grid item xs={12} md={4}>
            Carer Name: Not Placed
          </Grid>
          <Grid item xs={12} md={4}>
            Supervising Social Worker: Not Assigned
          </Grid>
          <Grid item xs={12} md={4}>
            User Name: Sana
          </Grid>
        </Grid>
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {oohReportsFormFields.map((form: any) => {
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
                  Notification
                </Typography>
                <Grid item xs={6}>
                  <RHFSelect
                    label={"Select User to be Notified"}
                    name={"userToBeNotified"}
                    disabled={action === "view" ? true : false}
                  >
                    <option value="nil">nil</option>
                  </RHFSelect>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography
                    sx={{
                      color: theme.palette.grey[500],
                      fontWeight: theme.typography.fontWeightMedium,
                      mb: theme.spacing(2),
                    }}
                    variant="subtitle2"
                  >
                    Enter Additional Email Addresses to be notified: (Email Addresses should be
                    seprated by commas.For example john@domain.com, Pete@domain.com)
                  </Typography>
                  <RHFTextField
                    name={"additionalEmailAddresses"}
                    disabled={action === "view" ? true : false} fullWidth
                  />
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
                router.push(`/foster-child/child-background-info/child-chronology-of-events?fosterChildId=${fosterChildId}`)
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

export default OOHReportsForm;
