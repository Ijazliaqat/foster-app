import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { usePersonalInfoForm } from "./usePersonalInfoForm";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const PesonalInfoForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { PersonalInfoFormData, onSubmit, handleSubmit, methods, router } =
    usePersonalInfoForm();
    let label: any;
    if (action === "view") {
      label = "Uploaded Image";
    } else {
      label = "Upload Image";
    }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {PersonalInfoFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
         {item.component && (
              <item.component fullWidth
                disabled={disabled}
                size="small"
                {...item.componentProps}
              >
                {item?.heading}
                {item.componentProps.select
                  ? item.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </item.component>
            )}
              {item?.uploadPhoto && (
              <>
              <RHFUploadFile name={"updatePhoto"} label={label} {...methods} required />
              </>
            )}
          </Grid>
        ))}

        <Grid item xs={12}>
          <Button
            disabled={disabled}
            type="submit"
            variant="contained"
            sx={{ mr: 2 }}
          >
            Submit
          </Button>

          <Link href={""} style={{ textDecoration: "none" }}>
            <Button
              onClick={() => router.push("/referral/foster-carer-request-form/")}
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
export default PesonalInfoForm;
