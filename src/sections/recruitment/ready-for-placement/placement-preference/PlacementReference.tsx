import React from "react";
import RHFUploadFile from "@root/sections/carer-info/personal-info/form-f/components/RHFUploadFile";
import { formSchema, defaultValues, placementReferenceData } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { usePostPlacementPreferenceListMutation } from "@root/services/recruitment/ready-for-placement/placement-preference-api/placementPreferenceApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";

const PlacementReference = (fosterCarerId: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  //Placement Preference API
  const [postPlacementDetails] = usePostPlacementPreferenceListMutation();
  const { handleSubmit } = methods;

  //OnSubmit Function to Submit Form Data
  const onSubmitHandler = (data: any) => {
    postPlacementDetails({
      // params: {
      //   fosterCarerId: fosterCarerId,
      // },
      // body: data,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Placement Reference Added Successfully", {
          variant: "success",
        });
        router.push({
          pathname: "/recruitment",
          query: {
            action: "edit",
            id: `${res?.data.id}`,
            fosterCarerId: fosterCarerId,
          },
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        router.push({
          pathname: "/recruitment",
          query: { fosterCarerId: fosterCarerId },
        });
      });
  };
  return (
    <Card sx={{ p: 1.5 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.palette.grey[600], mb: 2 }}
        >
          Foster Carer Placement Preference
        </Typography>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 4 }}
          columnSpacing={5}
          justifyContent="center"
        >
          {placementReferenceData.map((form: any) => (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              {form.id === 1 && (
                <Grid item xs={12} md={6} sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.grey[600] }}
                  >
                    Upload Video / Audio Recording of your Placement Preference
                  </Typography>
                  <RHFUploadFile name="uploadPhoto" {...methods} />
                </Grid>
              )}
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600], mb: 1 }}
              >
                {form?.title}
              </Typography>
              {form.id !== 7.5 && (
                <form.component
                  size="small"
                  {...form.otherOptions}
                  sx={{ color: theme.palette.grey[600] }}
                >
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <LoadingButton
            color="primary"
            size="medium"
            type="submit"
            variant="contained"
          >
            Submit
          </LoadingButton>
        </Box>
      </FormProvider>
    </Card>
  );
};

export default PlacementReference;
