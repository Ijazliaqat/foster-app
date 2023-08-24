import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { usePersonalInfoForm } from "./usePersonalInfoForm";
import { PersonalInfoFormData } from ".";

const PersonalInfoForm = ({ disabled, handleNextBtn }: any) => {
  const { onSubmit, methods, handleSubmit } = usePersonalInfoForm({
    handleNextBtn: handleNextBtn,
  });
  let label: any;
  if (disabled) {
    label = "Uploaded Image";
  } else {
    label = "Upload Image";
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {PersonalInfoFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <Typography
              sx={{
                marginBottom: "5px",
                fontSize: "16px !important",
                fontWeight: "600",
              }}
              variant="h6"
              gutterBottom
            >
              {item.title}
            </Typography>
            {item.component && (
              <item.component
                fullWidth
                {...item.componentProps}
                disabled={disabled}
                size={"small"}
              >
                {item.componentProps.select
                  ? item.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
                {item?.heading}
              </item.component>
            )}
            {!item.component && (
              <RHFUploadFile
                name={"updatePhoto"}
                label={label}
                {...methods}
                required
                disabled={disabled}
              />
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Link
            href="/referral/foster-child-request-form"
            style={{ textDecoration: "none" }}
          >
            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": { backgroundColor: "#F6830F" },
              }}
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default PersonalInfoForm;
