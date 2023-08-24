import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useRouter } from "next/router";
import React from "react";
import { ActiveSocialWorkerFormData } from ".";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { useSocialWorkerForm } from "./useSocialWorkerForm";

export default function SocialWorkerForm(props: any) {
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
  } = useSocialWorkerForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ px: 2, pb: 3 }}>
        <Typography
          variant="h6"
          color={theme.palette.primary.main}
          sx={{ my: 2 }}
        >
          {router?.query?.worker} LA Social Worker Contact Details
        </Typography>
        <Grid container spacing={4}>
          {ActiveSocialWorkerFormData?.map((item) => (
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
              href={`/foster-child/social-worker-details/la-social-worker?fosterChildId=${router?.query?.fosterChildId}`}
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
      </Card>
    </FormProvider>
  );
}
