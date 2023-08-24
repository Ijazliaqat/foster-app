import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { householdConditionA_Data, FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";
import { useHouseholdConditionA } from "./useHouseholdConditionA";

export const HouseholdConditionA = (props: any) => {
  const {
    disabled,
    formData,
    isError,
    isSuccess,
    isLoading,
    breadCrumbData,
    initialValueProps = defaultValues,
    submitFunction,
  } = props;

  const { theme, handleSubmit, onSubmit, methods, router }: any =
    useHouseholdConditionA({ breadCrumbData, formData, submitFunction ,initialValueProps});
  return (
    <Page title="Household Condition - A">
      <Card sx={{ p: 2 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {householdConditionA_Data?.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                  <>
                    {" "}
                    {form.component ? (
                      <form.component
                        {...form.componentProps}
                        disabled={disabled || isLoading}
                        size="small"
                      >
                        {form?.componentProps.select
                          ? form?.componentProps.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {" "}
                                {option.label}{" "}
                              </option>
                            ))
                          : null}
                      </form.component>
                    ) : (
                      <Typography
                        variant={form.variant}
                        color={theme.palette.primary.main}
                      >
                        {" "}
                        {form.heading}{" "}
                      </Typography>
                    )}{" "}
                  </>
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <Button
                type="submit"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    Loading &nbsp; <CircularProgress size={20} />
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>

              <Button
                sx={{
                  bgcolor: theme?.palette?.orange?.main,
                  "&:hover": { bgcolor: theme?.palette?.orange?.main },
                  ml: 1,
                }}
                variant="contained"
                onClick={() => router.back()}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
    </Page>
  );
};
