import { useState, FC, Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";

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

const PersonalDetailForm: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [getProfileInfoQuery] = useLazyGetPersonalInfoQuery();
  const [updatePersonalInfo] = useUpdatePersonalInfoMutation();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, isError, error } = await getProfileInfoQuery(null, false);
      // console.log(data);
      setIsLoading(false);
      if (isError || !data) {
        displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      return {
        ...data,
        dob: new Date(),
      };
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    // reset({ keepIsSubmitted: true });
    const jsonData = {
      ...data,
    };
    try {
      const data = await updatePersonalInfo(jsonData);
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
            <Grid item sx={{ padding: "0.5em" }}>
              <Typography
                variant="formTopHeading"
                sx={{ color: theme.palette.primary.main }}
              >
                PERSONAL INFO
              </Typography>
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
            </Grid>
            {!disabled && (
              <Grid item sm={12} container direction="column">
                <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                  {/* <Grid item>
                    <Button variant="contained" type="submit">
                      Save
                    </Button>
                  </Grid> */}
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

export default PersonalDetailForm;
