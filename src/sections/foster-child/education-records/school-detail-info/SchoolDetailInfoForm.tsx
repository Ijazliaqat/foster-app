import React from "react";
import { FormProvider } from "../../../../components/hook-form";
import { Button, Grid } from "@mui/material";
import { SchoolDeatilInfoFormData } from ".";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { useSchoolDetailInfoForm } from "./useSchoolDetailInfoForm";
import { useRouter } from "next/router";
export default function SchoolDetailInfoForm(props: any) {
  const router = useRouter();

  const { disabled } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isError,
    isSuccess,
    isLoading,
  } = useSchoolDetailInfoForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {SchoolDeatilInfoFormData?.map((item) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              disabled={disabled}
              {...item.componentProps}
              size={"small"}
              fullWidth
            >
              {item?.componentProps?.select
                ? item?.options?.map((option: any) => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))
                : null}
            </item.component>
          </Grid>
        ))}
        {!disabled && (
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              loading={isLoading}
              color={isError ? "error" : isSuccess ? "success" : "primary"}
            >
              {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
            </LoadingButton>
            <Link
              href={`/foster-child/education-records/school-detail-info?fosterChildId=${router?.query?.fosterChildId}`}
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
