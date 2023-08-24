import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { CarerDetailsFormData, defaultValues, validationSchema } from "./";
import { LoadingButton } from "@mui/lab";

export default function CarerDetailsForm({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
}: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValueProps,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    // try {
    //   const res: any = await onSubmitHandler(data).unwrap();
    //   enqueueSnackbar(res?.message ?? `Carer Family ${message} Successfully!`, {
    //     variant: "success",
    //   });
    //   router.push("/carer-info/personal-info/carer-family-support-network");
    // } catch (error: any) {
    //   const errMsg = error?.data?.message;
    //   enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    // }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {CarerDetailsFormData?.map((item: any) => (
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
                : item?.heading}
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
            <Button type="button" variant="contained">
              Back
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
}
