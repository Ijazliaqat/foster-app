import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { BForm, defaultValues } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useApprovedDetails } from "./useApprovedDetails";

export default function ApprovedDetails({
  disabled,
  handleBack,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
}: any) {
  const { methods, onSubmit, handleSubmit, isSubmitting } = useApprovedDetails({
    disabled,
    onSubmitHandler,
    initialValueProps,
    message,
  });

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {BForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}
        {!disabled && (
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              loading={isSubmitting}
            >
              Submit
            </LoadingButton>

            <Button type="button" variant="contained" onClick={handleBack}>
              Back
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
}
