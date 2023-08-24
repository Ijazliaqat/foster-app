import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import {
  useLazyGetOpportunityDeclaQuery,
  useUpdateOpportunityDeclaMutation,
} from "@root/services/update-profile/other-information/otherInformationApi";
import FormSkeleton from "../../render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";

const OpportunityDeclaration: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [getOpportunityDecla] = useLazyGetOpportunityDeclaQuery();
  const [updateOpportunityDecla] = useUpdateOpportunityDeclaMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, error, isError } = await getOpportunityDecla(null, true);
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
    const formData = {
      ...data,
    };
    try {
      const data = await updateOpportunityDecla(formData);
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
              {/* Heading and descriptions  */}
              <Grid item sm={12} container>
                <Grid item container>
                  <Typography
                    variant="formTopHeading"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Equal Opportunity Declaration
                    <sub
                      style={{
                        fontSize: "14px",
                        color: "#343A40",
                        fontWeight: 400,
                      }}
                    >
                      Equal Opportunity Policy Displayed for the candidate while
                      registering
                    </sub>
                  </Typography>
                  <p style={{ margin: "0.5em" }}>
                    All information given will be treated in the strictest
                    confidenceand not used for any other purpose. We are an
                    equal opportunity employer. The aim of our policy is to
                    ensure no job applicant or employee receives less favourable
                    treatment on the grounds of gender, age, disability/
                    handicap, marital status, sexual orientation, careed,
                    colour, race, or ethnic origin, or is disadvantaged by
                    conditions or requirements which cannot be shown as
                    justifiable.
                  </p>
                  <p style={{ margin: "0.5em" }}>
                    Selection criteria and procedures are frequently reviewed to
                    ensure that individuals are selected, promoted and treated
                    on the basis of their relevant merits and abilities.
                  </p>
                  <p style={{ margin: "0.5em" }}>
                    All employees are given equal opportunity and encouraged to
                    progress within the organisation.
                  </p>
                  <p style={{ margin: "0.5em" }}>
                    We are commited to an ongoing programme of action to make
                    this policy fully effective. To ensure that this policy is
                    fully and fairly implemented and monitored, and for no other
                    reason, would you please the relevant options below?
                  </p>
                </Grid>
              </Grid>
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
              {/* <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="previousExpCustom"
                  label="Previous Exp Custom"
                />
              </Grid>
            </Grid> */}
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

export default OpportunityDeclaration;
