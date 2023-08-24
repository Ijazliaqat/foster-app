
import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { ReferralSchemeForm } from ".";
import { useReferralSchemeForm } from "./useReferralSchemeForm";

export default function ReferralSchemeAddForm({ disabled, }: any) {
  const { methods, handleSubmit, onSubmit } = useReferralSchemeForm()
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {ReferralSchemeForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>

            <item.component fullWidth
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item.componentProps.select ? item.options.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
                :
                null}

              {item?.heading}
            </item.component>

          </Grid>
        ))}

        <Grid item xs={12}>
          {!disabled && (
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
            // loading={isSubmitting}
            >
              Submit
            </LoadingButton>
          )}
          <Link
            href={"/referral/referral-scheme"}
            style={{ textDecoration: "none" }}
          >
            <Button type="button" variant="contained">
              Back
            </Button>
          </Link>
        </Grid>

      </Grid>
    </FormProvider>
  );
}

