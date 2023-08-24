import {
  Grid,
  Button,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { carInsuranceData } from "./index";
import { useDbsCheckForm } from "./useDbsCheckForm";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
const DbsCheckForm = (props: any) => {
  const { action, id } = props;
  //Dbs Check  Custom Hook
  const {
    router,
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    theme,
    setValue,
    trigger,
    getValues,
    isLoading,
    fosterCarerId,
  } = useDbsCheckForm(action, id);
  if (isLoading) return <SkeletonFormdata />;
  return (
    <Grid container alignItems="center">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {carInsuranceData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
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
              </Grid>
            );
          })}
          <Grid
            xs={12}
            sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
            item
          >
            {action === "add" || action === "edit" ? (
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
            ) : null}

            <Button
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              onClick={() =>
                router.push({
                  pathname:
                    "/carer-info/background-checks/statutory-checks-list",
                  query: { fosterCarerId: fosterCarerId },
                })
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

export default DbsCheckForm;
