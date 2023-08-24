import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { LoadingButton } from "@mui/lab";

export default function DateWhenInfoReceivedForm(props: any) {
  const { disabled, formData, isLoading, isError, isSuccess } = props;

  const theme = useTheme();
  const defaultValues = {
    dateinformationReceived: new Date(dayjs().format("MM/DD/YYYY")),
  };

  const FormSchema = Yup.object().shape({
    dateinformationReceived: Yup.date().required("Required"), //1
  });

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
    formData(data);
    // reset();
  };

  return (
    <Page title="Initial Enquiry">
      <Card sx={{ p: 2 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container pt={2} spacing={3}>
            <Grid item md={12}>
              <Typography variant="h6" color={theme.palette.primary.main}>
                Date when information was received
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <RHFDatePicker
                size="small"
                fullWidth={true}
                disabled={disabled || isLoading}
                name="dateinformationReceived"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth={true}
                multiline
                minRows={3}
                disabled
                value=" Section A(Part 1) contains all the information required to complete Stage 1 of the fostering assessment. If a decision is made not to proceed to Stage 2, the fostering service may wish to use the BAAF Stage 1 Decision Sheet (Fostering). This decision must be made within 10 days of receiving all the Stage 1 Information."
              />
            </Grid>

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
    </Page>
  );
}
