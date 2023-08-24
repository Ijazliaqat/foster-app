import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { QuickReferralFormData, formSchema, initialValues } from ".";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useRouter } from "next/router";

const CurrentReferralForm = ({ disabled }: any) => {
  const theme = useTheme();
  const router = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  let label: any;
  if (disabled) {
    label = "Uploaded Image";
  } else {
    label = "Upload Image";
  }

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} sx={{ mt: 0 }}>
        {QuickReferralFormData.map((form, i) => (
          <Grid item xs={12} md={form.gridLength} key={i}>
            {form.head && (
              <Typography
                sx={{ fontWeight: 600, color: theme.palette.primary.main }}
              >
                {form.head}
              </Typography>
            )}
            {form.requireUploadImage && (
              <RHFUploadFile
                disabled={disabled}
                label={label}
                name="updatePhoto"
                {...methods}
                required
              />
            )}
            {form.otherOptions && (
              <form.component
                disabled={disabled}
                size="small"
                {...form.otherOptions}
              >
                {form.otherOptions.select
                  ? form.otherOptions.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {!disabled && (
              <LoadingButton type="submit" variant="contained">
                Submit
              </LoadingButton>
            )}
            <Button
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": { backgroundColor: "#F6830F" },
              }}
              type="button"
              variant="contained"
              onClick={() => router.push("/referral/current-referral")}
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default CurrentReferralForm;
