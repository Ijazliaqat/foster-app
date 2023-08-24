import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { complaintsFormData } from "./index";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useComplaintsForm } from "./useComplaintsForm";
import IsFetching from "@root/components/loaders/IsFetching";
import { LoadingButton } from "@mui/lab";
function ComplaintForms(props: any) {
  const { action, id } = props;
  //Complaints Custom Hook
  const {
    router,
    theme,
    isLoading,
    onSubmit,
    isFetching,
    setValue,
    trigger,
    handleSubmit,
    getValues,
    methods,
    isSubmitting,
    fosterCarerId,
  } = useComplaintsForm(action, id);
  if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <Typography
        sx={{
          color: theme.palette.grey[500],
          fontWeight: theme.typography.fontWeightMedium,
          mb: theme.spacing(2),
        }}
        variant="subtitle2"
      >
        URN Number : CH001
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <IsFetching isFetching={isFetching} />
        <Grid container rowSpacing={2} columnSpacing={5} alignItems="center">
          {complaintsFormData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <Box sx={{ px: 0.9, py: 1 }}>
                  {form.component !== "RadioGroup" && (
                    <form.component
                      size="small"
                      {...form.otherOptions}
                      disabled={action === "view" ? true : false}
                      InputLabelProps={{
                        shrink: action === "view" || "edit" ? true : undefined,
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
                  {form.component === "RadioGroup" && (
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Typography
                        sx={{
                          color: theme.palette.grey[500],
                          fontWeight: theme.typography.fontWeightMedium,
                        }}
                        variant="body1"
                        color="initial"
                      >
                        {form.otherOptions.label}
                      </Typography>
                      <RadioGroup
                        name={form.otherOptions.name}
                        defaultValue={getValues(`${form.otherOptions.name}`)}
                        onChange={(e) => {
                          setValue(
                            `${form.otherOptions.name}`,
                            `${e.target.value === "yes" ? true : false}`
                          );
                          trigger(`${form.otherOptions.name}`);
                        }}
                        //  value={getValues(`${form.otherOptions.name}`)}
                        sx={{ display: "flex", flexDirection: "row" }}
                      >
                        {form?.Options?.map((mode: any, index: any) => {
                          return (
                            <Grid key={mode} item>
                              <FormControlLabel
                                label={mode === true ? "yes" : "No"}
                                control={<Radio />}
                                value={mode}
                                disabled={action === "view" ? true : false}
                              />
                            </Grid>
                          );
                        })}
                      </RadioGroup>
                    </Box>
                  )}
                </Box>
              </Grid>
            );
          })}
          {action === "add" || action === "edit" ? (
            <Grid
              xs={12}
              sx={{
                mt: { xs: 0, sm: 2 },
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
        </Grid>
      )}
    </>
  );
}
export default ComplaintForms;
