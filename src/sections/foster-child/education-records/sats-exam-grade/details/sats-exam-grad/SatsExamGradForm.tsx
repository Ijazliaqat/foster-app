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

const SatsExamGradForm: FC<any> = () => {
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { action = "", fosterChildId = "", id = "" } = query;
  // console.log({ action, fosterChildId, therapyInfoId });
  const [getSatsExamGradeInfoById] = useLazyGetSatsExamGradeInfoByIdQuery();

  const [addSatsExamGradeListData] = useAddSatsExamGradeListDataMutation();
  const [updateSatsExamGradeInfoByid] =
    useUpdateSatsExamGradeInfoByidMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      // if action is view or update
      if (action === "view" || (action === "update" && id !== "")) {
        setIsLoading(true);
        const { data, isError, error } = await getSatsExamGradeInfoById(
          { id },
          false
        );
        const {
          schoolYear,
          formName,
          term,
          subject,
          teacher,
          target,
          currentLevel,
        } = data?.data;
        setIsLoading(false);
        if (isError || !data?.data) {
          displayErrorMessage(error, enqueueSnackbar);
          return defaultValues;
        }
        return {
          schoolYear,
          formName,
          term,
          subject,
          teacher,
          target,
          currentLevel,
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
      ...data,
      fosterChildId,
    };
    try {
      // handling create and update based on action query parameter
      const data: any =
        action === "create"
          ? await addSatsExamGradeListData({
              jsonData,
            })
          : await updateSatsExamGradeInfoByid({
              jsonData,
              id,
            });
      // getting id for the therapy if action is create and moving user to update route for data persistence
      action === "create" &&
        data?.data?.data?.id &&
        router.push(
          `/foster-child/education-records/sats-exam-grade-details-list/details?fosterChildId=${fosterChildId}&action=update&id=${data?.data?.data?.id}`
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

export default SatsExamGradForm;
