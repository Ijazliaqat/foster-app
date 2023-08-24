import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import usePath from "@root/hooks/usePath";
import { ClaReviewFormData, ClaReviewFormSchema, defaultValues } from "./";

export default function ClaReviewForm({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
  isAdding,
}: any) {
  const router = useRouter();

  const { makePath } = usePath();

  const methods: any = useForm({
    resolver: yupResolver(ClaReviewFormSchema),
    defaultValues: initialValueProps,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res: any = await onSubmitHandler(data).unwrap();
      enqueueSnackbar(res?.message ?? `Carer Family ${message} Successfully!`, {
        variant: "success",
      });
      {
        isAdding &&
          router.push(
            makePath({
              path: "/foster-child/other-information/cla-review/add-cla-review",
              queryParams: { claReviewId: res.id },
              skipQueries: ["claReviewId"],
            })
          );
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {ClaReviewFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              disabled={disabled}
              {...item.componentProps}
              fullWidth
              size={"small"}
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
              loading={isSubmitting}
              color={isError ? "error" : isSuccess ? "success" : "primary"}
            >
              {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
            </LoadingButton>
            <Button
              type="button"
              variant="contained"
              onClick={() =>
                router.push(
                  makePath({
                    path: "/foster-child/other-information/cla-review",
                    skipQueries: ["claReviewId"],
                  })
                )
              }
            >
              Back
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
}
