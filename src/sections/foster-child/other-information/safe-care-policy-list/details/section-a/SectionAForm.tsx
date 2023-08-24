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
import {
  useAddSatsExamGradeListDataMutation,
  useLazyGetSatsExamGradeInfoByIdQuery,
  useUpdateSatsExamGradeInfoByidMutation,
} from "@root/services/foster-child/education-records/sats-exam-grade/satsExamGradeListApi";
import {
  useAddSafeCarePolicyListDataMutation,
  useLazyGetSafeCarePolicyByIdQuery,
  useUpdateSafeCarePolicyByIdMutation,
} from "@root/services/foster-child/other-information/safe-care-policy/safeCarePolicyApi";

const SectionAForm: FC<any> = () => {
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { action = "", fosterChildId = "", id = "" } = query;
  // console.log({ action, fosterChildId, therapyInfoId });
  const [getSafeCarePolicy] = useLazyGetSafeCarePolicyByIdQuery();

  const [addSafeCarePolicyListData] = useAddSafeCarePolicyListDataMutation();
  const [updateSafeCarePolicyById] = useUpdateSafeCarePolicyByIdMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      // if action is view or update
      if (action === "view" || (action === "update" && id !== "")) {
        setIsLoading(true);
        const { data, isError, error } = await getSafeCarePolicy({ id }, false);
        //  API response structure is not good there is a need of update from backend side
        const { childRecord, inspectionDate, nextInspectionDate } =
          data?.data?.getsafeCarePolicyRes.sectionA;
        setIsLoading(false);
        if (isError || !data?.data) {
          displayErrorMessage(error, enqueueSnackbar);
          return defaultValues;
        }
        return {
          childRecord,
          inspectionDate: new Date(inspectionDate || new Date()),
          nextInspectionDate: new Date(nextInspectionDate || new Date()),
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

  const onSubmit = async (data: any) => {
    // console.log(data);
    // return;
    const jsonData = {
      sectionA: {
        ...data,
      },
    };
    try {
      // handling create and update based on action query parameter
      const data: any =
        action === "create"
          ? await addSafeCarePolicyListData({
              jsonData,
              id: fosterChildId,
            })
          : await updateSafeCarePolicyById({
              jsonData,
              id,
            });
      // getting id for the therapy if action is create and moving user to update route for data persistence
      action === "create" &&
        data?.data?.data?.id &&
        router.push(
          `/foster-child/other-information/safe-care-policy-list/details?fosterChildId=${fosterChildId}&action=update&id=${data?.data?.data?.id}`
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
              {/* <Grid item sm={12} container direction="column">
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
              </Grid> */}
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

export default SectionAForm;
