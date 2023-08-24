import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, personalDetails } from ".";
import FormNotificationExtension from "../../extensions/FormNotificationExtension";
import Error from "@root/components/Error";

export default function Contact(props: any) {
  const { disabled, onSubmit, data, isError } = props;
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: disabled ? data : defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };

  const formEl = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Typography variant="h6">Contact Details</Typography>
        </Grid>
        {personalDetails.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <form.component
                {...form.componentProps}
                size="small"
                disabled={disabled}
              >
                {form.componentProps.select
                  ? form.componentProps.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        {!disabled && <FormNotificationExtension />}
        <br />
        {!disabled && (
          <Grid item xs={12}>
            <Button size="large" type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
  if (isError) return <Error />;
  return formEl;
}
