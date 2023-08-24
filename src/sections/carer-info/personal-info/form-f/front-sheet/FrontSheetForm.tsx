import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { FRONTSHEETFORMDATA, FormSchema, defaultValues } from "./";
import { LoadingButton } from "@mui/lab";
import RHFUploadFile from "../components/RHFUploadFile";
import { useFrontSheetMutation } from "@root/services/carer-info/personal-info/form-f/frontSheetApi";

export default function FrontSheetForm(props: any) {
  const { disabled, formData: sendData, isLoading, isError, isSuccess } = props;

  //------------Starting Form Data----------------
  const FORMDATA: any = new FormData();

  //--------------React Form Methods----------------------//
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;
  //--------------------Submit Method---------------------------//
  const onSubmit = (data: any) => {
    FORMDATA.append(
      "updatePhoto",
      // new Blob([data.updatePhoto], { type: "application/octet-stream" })
      data.updatePhoto
      // "users/4f7512fb-2916-451b-8240-97f529ded73d/formf/847470dd-1a57-4454-bcb6-6d3f04620b2a.png"
    );
    FORMDATA.append("nameOfApplicants", data.nameOfApplicants);
    FORMDATA.append(
      "socialWorkerRecommendation",
      data.socialWorkerRecommendation
    );
    FORMDATA.append(
      "fosteringServiceRefrenceNumber",
      data.fosteringServiceRefrenceNumber
    );
    FORMDATA.append("nameOfTeamManager", data.nameOfTeamManager);
    FORMDATA.append("nameOfFosteringService", data.nameOfFosteringService);
    FORMDATA.append("telephone", data.telephone);
    FORMDATA.append("address", data.address);
    FORMDATA.append(
      "dateofApplicationAccepted",
      data.dateofApplicationAccepted
    );
    FORMDATA.append("nameOfSocailWorker", data.nameOfSocailWorker);
    FORMDATA.append(
      "dateOfAssessmentCompleted",
      data.dateOfAssessmentCompleted
    );
    FORMDATA.append("emailAddress", data.emailAddress);
    FORMDATA.append("dateOfAssessmentUpdated", data.dateOfAssessmentUpdated);

    for (let [key, value] of FORMDATA.entries()) {
      console.log(`${key}: ${value}`);
    }
    sendData(FORMDATA);
    // reset();
  };

  //------------------------Render-View----------------------------//
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography variant="h6">Front Sheet</Typography>
          </Grid>
          <Grid item xs={12} md={6} p={2}>
            <RHFUploadFile
              disabled={disabled || isLoading}
              name="updatePhoto"
              {...methods}
            />
          </Grid>

          {FRONTSHEETFORMDATA.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <form.component
                  {...form.componentProps}
                  disabled={disabled || isLoading}
                  size="small"
                  fullWidth={true}
                />
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
