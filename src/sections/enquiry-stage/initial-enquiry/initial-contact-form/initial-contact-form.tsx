import { Box, Grid, Typography, useTheme, Button } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InitialContactFormData, defaultValues, formSchema } from ".";
import { FormProvider, RHFRadioGroup } from "@root/components/hook-form";
import {
  useLazyGetInitialContactDataQuery,
  usePatchInitialContactDataMutation,
} from "@root/services/initial-stage/initial-contact-api/initialcontactApi";
import IsFetching from "@root/components/loaders/IsFetching";
import { enqueueSnackbar } from "notistack";

function InitialContactForm() {
  const [error, setError] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState<any>(true);
  const contactUserId: any = localStorage.getItem("session");
  const userID = JSON.parse(contactUserId);
  console.log(userID, "userID");

  const router = useRouter();
  const [getInitialContactData] = useLazyGetInitialContactDataQuery();
  const [patchInitialContactData] = usePatchInitialContactDataMutation();
  const theme: any = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: async () => {
      const { data, isError }: any = await getInitialContactData(
        userID?.user?.userId,
        true
      );
      setIsLoading(false);
      if (isError) {
        setError("Something went wrong.");
        return defaultValues;
      }

      return { ...data?.data?.initalContact };
    },
  });
  const { handleSubmit } = methods;

  const submitContactForm = async (initialFormData: any) => {
    let formData = {
      userId: userID?.user?.userId,
      ...initialFormData,
    };
    try {
      await patchInitialContactData(formData);
      enqueueSnackbar("Record Added Successfully", {
        variant: "success",
      });
      // router.push("");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occurred", { variant: "error" });
    }
  };

  const onSubmit = async (Initialdata: any) => {
    submitContactForm(Initialdata);
    console.log("checking response", Initialdata);
  };

  if (isLoading) return <IsFetching isFetching />;

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        sx={{
          color: theme.palette.grey[500],
          fontWeight: theme.typography.fontWeightMedium,
          mb: theme.spacing(2),
        }}
        variant="subtitle2"
      >
        Initial Contact
      </Typography>

      <Grid container>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Typography sx={{ marginRight: 1 }}>Method</Typography>
            <RHFRadioGroup
              name="areaOffice2"
              label="Area Office"
              size="small"
              options={[
                "WhatsApp",
                "Email",
                "Facebook",
                "Instagram",
                "Phone,",
                "Other",
              ]}
            ></RHFRadioGroup>
          </Box>
          <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
            {InitialContactFormData.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form.id}>
                  {form.component !== "RadioGroup" && (
                    <form.component size="small" {...form.otherOptions}>
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
              );
            })}
            <Grid
              xs={12}
              sx={{
                mt: 2,
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
              spacing={2}
              item
            >
              <Button
                type="submit"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
              >
                Submit
              </Button>
              <Button
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() =>
                  router.push(
                    "/carer-info/personal-info/carer-chronology-of-events"
                  )
                }
              >
                back
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>
    </Box>
  );
}

export default InitialContactForm;
