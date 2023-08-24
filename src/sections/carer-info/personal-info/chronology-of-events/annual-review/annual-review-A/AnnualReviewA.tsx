import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { personalDetails, annualReviewAData } from ".";
import FamilyMembersTable from "./FamilyMembersTable";
import { useAnnualReviewAForm } from "./useAnnualReviewAForm";
import { LoadingButton } from "@mui/lab";

export default function AnnualReviewA(props: any) {
  const { action, id } = props;
  //Annual Review A Custom Hook
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
  } = useAnnualReviewAForm(action, id);

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
                {item.label}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600], fontWeight: 700 }}
              >
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={3} columnSpacing={5} alignItems="center">
          {annualReviewAData.map((form: any) => {
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
      <Box sx={{ mt: 2 }}>
        {/* Existing Family Table */}
        <FamilyMembersTable />
      </Box>
    </>
  );
}
