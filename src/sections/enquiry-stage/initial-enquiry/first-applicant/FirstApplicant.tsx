import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, useTheme, Typography, Grid } from "@mui/material";
import { FormProvider, RHFCheckbox } from "@root/components/hook-form";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, FIRSTAPPLICANTFORMDATA, formData } from ".";
import dayjs from "dayjs";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import IsFetching from "@root/components/loaders/IsFetching";
import FormNotificationExtension from "../../extensions/FormNotificationExtension";
import Error from "@root/components/Error";

export default function FirstApplicant(props: any) {
  const { disabled: globallyDisabled, data, isLoading, isError } = props;
  const theme = useTheme();

  // Update the default values API
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    //-------------------
    //changing values to accommodate difference in BE and FE
    defaultValues: globallyDisabled
      ? {
          ...data,
          uploadPhoto: { name: data?.uploadPhoto },
          age: dayjs().diff(dayjs(data?.dateOfBirth), "y"),
        }
      : defaultValues,
  });

  const { setValue, handleSubmit, watch } = methods;

  useEffect(() => {
    const subscription = watch((values: any) => {
      const dateOfBirth = values["dateOfBirth"];
      if (dateOfBirth && dayjs(dateOfBirth).isValid()) {
        const newAge = dayjs().diff(dayjs(dateOfBirth), "y");
        values.age !== newAge &&
          setValue("age", dayjs().diff(dayjs(dateOfBirth), "y"));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const onSubmitHandler = (data: any) => {
    if (globallyDisabled) return;
    console.log(data);
    // onSubmit(data);
    // reset();
  };

  const formEl = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={12}>
          <RHFCheckbox
            disabled={globallyDisabled}
            value={getValues("isJointApplicant")}
            onChange={(e: any) => {
              setValue("isJointApplicant", e.target.checked);
              trigger("isJointApplicant");
            }}
            name="isJointApplicant"
            label="If Joint Applicant, tick the Checkbox"
          />
        </Grid> */}
        {formData.map((form: any, index) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
              <form.component
                {...form.componentProps}
                size="small"
                disabled={globallyDisabled}
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
        <Grid item md={12}>
          <Typography variant="h6" color={theme.palette.primary.main}>
            Personal Details
          </Typography>
        </Grid>
        {FIRSTAPPLICANTFORMDATA.map((form: any, index: number) => {
          return (
            <Grid
              item
              xs={12}
              md={form?.gridLength}
              p={2}
              key={form.id + index}
            >
              {form.id === 1 ? (
                <RHFUploadFile
                  name="image"
                  {...methods}
                  disabled={globallyDisabled}
                />
              ) : (
                <form.component
                  {...form.componentProps}
                  size="small"
                  disabled={
                    form.componentProps.name === "age" || globallyDisabled
                  }
                >
                  {form.componentProps.select
                    ? form.componentProps.options.map((option: any) => (
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
        {!globallyDisabled && <FormNotificationExtension />}
        {!globallyDisabled && (
          <Grid item xs={12}>
            <Button size="large" type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );

  // if (false)
  if (isLoading)
    return (
      <Box sx={{ position: "relative" }}>
        <IsFetching isFetching />
        {formEl}
      </Box>
    );
  if (isError) return <Error />;

  return formEl;
}
