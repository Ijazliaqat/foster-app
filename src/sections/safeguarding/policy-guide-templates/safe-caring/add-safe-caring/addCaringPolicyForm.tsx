import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { AForm } from ".";
import { useCaringPolicyForm } from "./useCaringPolicyForm";
import Link from "next/link";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

export default function AddCaringPolicyForm({ action }: any) {
  const disabled = action === "view" ? true : false;
  const { methods, handleSubmit, onSubmit, query } = useCaringPolicyForm();
  let label: any;
  if (action === "view") {
    label = "Uploaded Image";
  } else {
    label = "Upload Image";
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {AForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            {item.component && (
              <item.component
                fullWidth
                {...item.componentProps}
                disabled={query.action === "view" && disabled}
                size={"small"}
              >
                {item?.heading}
              </item.component>
            )}
            {item?.uploadPhoto && (
              <RHFUploadFile
                name={"updatePhoto"}
                label={label}
                {...methods}
                required
              />
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          {query.action !== "view" && (
            <Button type="submit" variant="contained" sx={{ mr: 2 }}>
              Submit
            </Button>
          )}
          <Link
            href={"/safeguarding/policy-guide-templates/safe-caring"}
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
