import React from "react";
import { FormProvider } from "../../../../components/hook-form";
import { Button, Grid, useTheme } from "@mui/material";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import { StudySupportInfoInfoFormData } from "./index";
import { useStudySupportInfoForm } from "./useStudySupportInfoForm";

export default function StudySupportInfoForm(props: any) {
  const router = useRouter();
  const theme: any = useTheme();

  const { disabled } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isError,
    isSuccess,
    isLoading,
  } = useStudySupportInfoForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {StudySupportInfoInfoFormData?.map((item) => (
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
        <Grid item xs={12}>
          {!disabled && (
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              loading={isLoading}
              color={isError ? "error" : isSuccess ? "success" : "primary"}
            >
              {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
            </LoadingButton>
          )}
          <Link
            href={`/foster-child/education-records/study-support-info?fosterChildId=${router?.query?.fosterChildId}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              type="button"
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
