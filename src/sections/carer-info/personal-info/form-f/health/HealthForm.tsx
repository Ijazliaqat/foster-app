import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { HEALTHFORMDATA, FormSchema, defaultValues } from ".";
import { LoadingButton } from "@mui/lab";

export default function HealthForm(props: any) {
  const { disabled, formData, isLoading, isError, isSuccess } = props;
  const theme = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
    formData(data);
    // reset();
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Typography variant="h6" color={theme.palette.primary.main}>
            Health
          </Typography>
        </Grid>

        {HEALTHFORMDATA.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <>
                <form.component
                  {...form.componentProps}
                  fullWidth
                  size="small"
                  disabled={disabled || isLoading}
                >
                  {form.heading}
                </form.component>
              </>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <LoadingButton
            loading={isLoading}
            size="large"
            type="submit"
            variant="contained"
            color={isError ? "error" : isSuccess ? "success" : "primary"}
          >
            {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
