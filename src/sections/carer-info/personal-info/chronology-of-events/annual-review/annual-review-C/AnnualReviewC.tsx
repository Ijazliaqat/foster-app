import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { annualReviewCData } from ".";
import { useAnnualReviewCForm } from "./useAnnualReviewCForm";
import { LoadingButton } from "@mui/lab";

export default function AnnualReviewC(props: any) {
  const { action, id } = props;
  //Annual Review C Custom Hook
  const {
    router,
    onSubmit,
    isLoading,
    theme,
    setValue,
    trigger,
    handleSubmit,
    getValues,
    methods,
    isFetching,
    isSubmitting,
    fosterCarerId,
  } = useAnnualReviewCForm(action, id);
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={3} columnSpacing={5} alignItems="center">
          {annualReviewCData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <Typography
                  sx={{ mb: 2, color: theme.palette.primary.main }}
                  variant="subtitle1"
                >
                  {form?.title}
                </Typography>
                {form.id !== 7.5 && (
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
                    query: { fosterCarerId: fosterCarerId },
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
                  query: { fosterCarerId: fosterCarerId },
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
