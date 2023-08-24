import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { householdConditionA_Data, FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";

export const ImmunisationInfoTab = (props: any) => {
  const { disabled, formData, isLoading, isError, isSuccess, breadCrumbData } =
    props;
  const theme: any = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    formData(data);
  };
  useEffect(() => {
    breadCrumbData("Immunisations Info");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();
  return <Page title="Immunisations Info">
  <Card sx={{ p: 2 }}>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {/* <Grid item md={12}>
          <Typography variant="h6">Summary And Recommendation</Typography>
        </Grid> */}

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
          >
            Submit
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
};
