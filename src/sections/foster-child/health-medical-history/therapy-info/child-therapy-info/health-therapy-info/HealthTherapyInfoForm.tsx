import { useState, FC, Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import { Button, Grid, TextField, Typography } from "@mui/material";
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";

import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import {
  useLazyGetPersonalInfoQuery,
  useUpdatePersonalInfoMutation,
} from "@root/services/update-profile/about-the-candidate/aboutTheCandidateApi";
import { enqueueSnackbar } from "notistack";
import IsFetching from "@root/components/loaders/IsFetching";
import FormSkeleton from "@root/sections/edit-profile/render-form/FormSkeleton";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import TextFields from "@root/pages/components/textFields";
import {
  useAddAlltherapyDetailsListDataMutation,
  useLazyGetTherapyInfoByidQuery,
  useUpdateTherapyInfoByidMutation,
} from "@root/services/foster-child/health-medical-history/therapy-info/therapyInfoListApi";
import { useRouter } from "next/router";

const HealthTherapyInfoForm: FC<any> = () => {
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { action = "", fosterChildId = "", therapyInfoId = "" } = query;

  const [getProfileInfoQuery] = useLazyGetTherapyInfoByidQuery();

  const [addAlltherapyDetailsListData] =
    useAddAlltherapyDetailsListDataMutation();
  const [updateTherapyInfoByid] = useUpdateTherapyInfoByidMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      // if action is view or update
      if (action === "view" || (action === "update" && therapyInfoId !== "")) {
        setIsLoading(true);
        const { data, isError, error } = await getProfileInfoQuery(
          { id: therapyInfoId },
          false
        );
        setIsLoading(false);
        if (isError || !data?.data) {
          displayErrorMessage(error, enqueueSnackbar);
          return defaultValues;
        }
        return {
          ...data?.data,
          referralDate: new Date(data?.data?.referralDate),
          appointmentDate: new Date(data?.data?.appointmentDate),
          anyOtherTherapy: true,
        };
      }
      setIsLoading(false);
      return defaultValues;
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const anyOtherTherapy = useWatch({ control, name: "anyOtherTherapy" });

  const onSubmit = async (data: any) => {
    const jsonData = {
      ...data,
    };
    try {
      // handling create and update based on action query parameter
      const data: any =
        action === "create"
          ? await addAlltherapyDetailsListData({
              jsonData,
              fosterChildId: fosterChildId,
            })
          : await updateTherapyInfoByid({
              jsonData,
              id: therapyInfoId,
            });
      // getting id for the therapy if action is create and moving user to update route for data persistence
      action === "create" &&
        data?.data?.data?.id &&
        router.push(
          `/foster-child/health-medical-history/therapy-info-list/child-therapy-info/?fosterChildId=${fosterChildId}&action=update&therapyInfoId=${data?.data?.data?.id}`
        );

      displaySuccessMessage(data, enqueueSnackbar);
    } catch (error: any) {
      console.log(error);
      displayErrorMessage(error, enqueueSnackbar);
    }
  };

  if (isLoading) return <FormSkeleton />;
  return (
    <>
      {isSubmitting && <IsFetching isFetching />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid container item sm={12}>
            <Grid item md={12} container>
              <Grid item xs={12} sm={2} sx={{ padding: "0.5em" }}>
                <RHFCheckbox
                  name="referalCAHMS"
                  label="Referral to CAMHS"
                  disabled={disabled || action === "view"}
                />
              </Grid>
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFCheckbox
                  name="CAHMSAppointment"
                  label="CAMHS Appointment"
                  disabled={disabled || action === "view"}
                />
              </Grid>
            </Grid>
            <Grid item sm={12} container>
              {/* Dynamically Generated Fields  */}
              {fieldsInfo.map((item: any, index: number) => {
                return (
                  <Fragment key={index}>
                    {/* if there is only one field that is accoupies whole width   */}
                    {item.length === 1 && (
                      <FullWidthFormField
                        item={item}
                        isSubmitting={isSubmitting}
                        disabled={disabled || action === "view"}
                      />
                    )}
                    {/* if there are two fields with 50% 50% width   */}
                    {item.length === 2 && (
                      <HalfWidthFormField
                        item={item}
                        isSubmitting={isSubmitting}
                        disabled={disabled || action === "view"}
                      />
                    )}
                  </Fragment>
                );
              })}
              {/* A Custom Field On Full Width  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFTextField
                    fullWidth
                    multiline
                    rows={2}
                    name="therapistName"
                    label="Therapist Name / Address"
                    disabled={!anyOtherTherapy || action === "view"}
                  />
                </Grid>
              </Grid>
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFTextField
                    fullWidth
                    multiline
                    rows={2}
                    name="therapistArrangements"
                    label="Therapy Arrangements"
                    disabled={!anyOtherTherapy || action === "view"}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* three uncheck options container  */}
            <Grid item sm={12} container>
              <Grid item sm={3} sx={{ padding: "0.5em" }}>
                <RHFCheckbox
                  name="uncheckOption1"
                  label="Uncheck Option 1"
                  disabled={disabled || action === "view"}
                />
              </Grid>
              <Grid item sm={3} sx={{ padding: "0.5em" }}>
                <RHFCheckbox
                  name="uncheckOption2"
                  label="Uncheck Option 2"
                  disabled={disabled || action === "view"}
                />
              </Grid>
              <Grid item sm={3} sx={{ padding: "0.5em" }}>
                <RHFCheckbox
                  name="uncheckOption3"
                  label="Uncheck Option 3"
                  disabled={disabled || action === "view"}
                />
              </Grid>
            </Grid>

            {/* is child engaged in therapy as identified  */}
            <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFSelect
                  name="isChildEngagedIndetifyInCarePlana"
                  label="Is this Child Engaged in therapy as identified in the Care Plan ?"
                  disabled={disabled || action === "view"}
                >
                  {["Yes", "No"].map((option: string) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </RHFSelect>
              </Grid>
            </Grid>
            {!disabled && (
              <Grid item sm={12} container direction="column">
                <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                  <Grid item>
                    <Button
                      disabled={disabled || action === "view"}
                      variant="contained"
                      type="submit"
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      disabled={disabled || action === "view"}
                    >
                      Back
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default HealthTherapyInfoForm;
