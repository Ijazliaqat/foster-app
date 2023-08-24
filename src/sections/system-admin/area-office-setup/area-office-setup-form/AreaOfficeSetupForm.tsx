import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { useareaOfficeSetupForm } from "./useareaOfficeSetupForm";
import { FRF1FormData } from ".";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema, initialValues } from "."; 

const AreaOfficeSetupForm = ({ action, id }: any) => {
  const disabled = action === "view" ? true : false;
  const { onSubmit } = useareaOfficeSetupForm();
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  const router = useRouter();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {FRF1FormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              {form.head && <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#0E918C" }}>{form.head}</Typography>}
              {form.otherOptions && (
                <form.component disabled={disabled} size="small" {...form.otherOptions}>
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
                onClick={() => router.push("/system-admin/area-office-setup")}
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default AreaOfficeSetupForm;
