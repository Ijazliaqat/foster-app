import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { reportData, personalDetails } from "./index";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useReportForm } from "./useReportForm";
import { LoadingButton } from "@mui/lab";
import IsFetching from "@root/components/loaders/IsFetching";
function ReportForm(props: any) {
  const { action, id } = props;
  //OOH Report Custom Hook
  const {
    router,
    onSubmit,
    isLoading,
    theme,
    handleSubmit,
    methods,
    isFetching,
    isSubmitting,
    fosterCarerId,
  } = useReportForm(action, id);

  if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <Grid container sx={{ mb: 3 }}>
        {personalDetails.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600] }}
              >
                {item.label}:
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600] }}
              >
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <IsFetching isFetching={isFetching} />
        <Grid container rowSpacing={2} columnSpacing={5} alignItems="center">
          {reportData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <Box sx={{ px: 0.9, py: 1 }}>
                  {form.component !== "RadioGroup" && (
                    <form.component
                      size="small"
                      {...form.otherOptions}
                      disabled={action === "view" ? true : false}
                      InputLabelProps={{
                        shrink: action === "view" ? true : undefined,
                        disabled: action === "view" ? true : undefined,
                      }}
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
                </Box>
              </Grid>
            );
          })}
          {action === "add" || action === "edit" ? (
            <Grid
              xs={12}
              sx={{
                mt: 2,
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
              item
            >
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
              <Button
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() =>
                  router.push({
                    pathname:
                      "/carer-info/personal-info/carer-chronology-of-events",
                    query: {
                      fosterCarerId: fosterCarerId,
                    },
                  })
                }
              >
                Back
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </FormProvider>

      {action === "view" && (
        <Grid container>
          <Grid xs={12} sx={{ mt: 2 }} item>
            <LoadingButton
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              onClick={() =>
                router.push({
                  pathname:
                    "/carer-info/personal-info/carer-chronology-of-events",
                  query: {
                    fosterCarerId: fosterCarerId,
                  },
                })
              }
            >
              Back
            </LoadingButton>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ReportForm;
