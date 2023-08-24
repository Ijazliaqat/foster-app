import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, otherDetailsFormData } from ".";
import FormNotificationExtension from "../../extensions/FormNotificationExtension";
import Error from "@root/components/Error";

export default function OtherDetails(props: any) {
  const { disabled, onSubmit, data, isError } = props;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: disabled ? data : defaultValues,
  });

  const {
    reset,
    trigger,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };

  const formEl = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Typography variant="h6">Other Details</Typography>
        </Grid>
        {otherDetailsFormData.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              {
                // form.id !== 7.5 &&
                <form.component
                  size="small"
                  {...form.otherOptions}
                  disabled={disabled}
                >
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              }
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
