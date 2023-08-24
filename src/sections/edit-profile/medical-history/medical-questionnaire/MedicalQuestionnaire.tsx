import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";

import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import {
  useLazyGetMedicalQuestionnaireQuery,
  useUpdateMedicalQuestionnaireMutation,
} from "@root/services/update-profile/medical-history/medicalHistory";
import FormSkeleton from "../../render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";

const MedicalQuestionnaire: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [getMedicalQuestionnaire] = useLazyGetMedicalQuestionnaireQuery();
  const [updateMedicalQuestionnaire] = useUpdateMedicalQuestionnaireMutation();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, error, isError } = await getMedicalQuestionnaire(
        null,
        true
      );
      setIsLoading(false);
      if (isError || !data?.data) {
        data?.data && displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      return {
        ...data?.data,
      };
    },
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    // reset({ keepIsSubmitted: true });
    const formData = {
      ...data,
      natnationality: "Pakistani",
    };
    try {
      const data = await updateMedicalQuestionnaire(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  if (isLoading) return <FormSkeleton />;
  return (
    <>
      {isSubmitting && <IsFetching isFetching />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid container item xs={12}>
            <Grid item sm={12} container>
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  {/* Heading And Icon Con  */}
                  <Grid item container>
                    <Grid item>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Immunisation
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* certificate issue And expiry date  */}
                  <Grid container>
                    {/* Dynamically Generated Fields  */}
                    {fieldsInfo.map((item: any, index: number) => {
                      return (
                        <Fragment key={index}>
                          {/* if there is only one field that is accoupies whole width   */}
                          {item.length === 1 && (
                            <FullWidthFormField
                              item={item}
                              isSubmitting={isSubmitting}
                              disabled={disabled}
                            />
                          )}
                          {/* if there are two fields with 50% 50% width   */}
                          {item.length === 2 && (
                            <HalfWidthFormField
                              item={item}
                              isSubmitting={isSubmitting}
                              disabled={disabled}
                            />
                          )}
                        </Fragment>
                      );
                    })}
                    {/* A Custom Field On Full Width  */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {!disabled && (
              <Grid item sm={12} container direction="column">
                <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                  <Grid item>
                    <Button variant="contained" type="submit">
                      Continue
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

export default MedicalQuestionnaire;
