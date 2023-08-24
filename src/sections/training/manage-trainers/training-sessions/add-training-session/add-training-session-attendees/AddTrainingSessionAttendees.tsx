import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { BForm, defaultValues } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useAddTrainingSessionAttendees } from "./useAddTrainingSessionAttendees";

export default function AddTrainingSessionAttendees({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
}: any) {
  const { methods, onSubmit, handleSubmit, isSubmitting } =
    useAddTrainingSessionAttendees({
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
              fullWidth
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}
        {!disabled && (
          <Grid item xs={12} sx={{ mt: 4 }}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              loading={isSubmitting}
            >
              Schedule
            </LoadingButton>
            <Link
              href={"/referral/social-worker-request-form"}
              style={{ textDecoration: "none" }}
            >
              <Button type="button" variant="contained">
                Back
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
}
