// import React from "react";

// export default function VerificationOfDocumentsForm() {
//   return <div>VerificationOfDocumentsForm</div>;
// }
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { DATAVERIFICATIONFORMDATA, defaultValues } from ".";
import { LoadingButton } from "@mui/lab";

export default function VerificationOfDocumentsForm(props: any) {
  const { disabled, formData, isLoading, isError, isSuccess } = props;

  const theme = useTheme();
  const methods: any = useForm({
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
    formData(data);
    // reset();
  };
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={3}>
          <Grid item md={12}>
            <Typography variant="h6" color={theme.palette.primary.main} mb={4}>
              Verification Of Documents
            </Typography>
          </Grid>

          {DATAVERIFICATIONFORMDATA.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <Grid mb={2}>
                  <Typography
                    color={theme.palette.primary.main}
                    variant="body2"
                  >
                    {form.heading}
                  </Typography>
                  <form.component
                    {...form.componentProps}
                    color={form.componentProps.color}
                  />
                </Grid>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <LoadingButton
              loading={isLoading}
              size="large"
              type="submit"
              variant="contained"
              color={isError ? "error" : isSuccess ? "success" : "primary"}
            >
              {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
}
