import { useState, FC, Fragment, useEffect, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import {
  FormProvider,
  RHFRadioGroup,
  RHFTextField,
} from "@root/components/hook-form";

import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFSwitch } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import { DotedHeadingWithDisc, HeadingWithDisc } from "./Headings/Headings";
import {
  DotedHeadingsWithDesInfo,
  HeadingsWithDesInfo,
} from "./static-info/heading-data";
import { useLayoutInfo } from "../../layout/use-layout-info";
import {
  useLazyGetDeclarationInfoQuery,
  useUpdateDeclarationInfoMutation,
} from "@root/services/update-profile/declaration/declarationApi";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";
import FormSkeleton from "../../render-form/FormSkeleton";

const AddDeclaration: FC<any> = ({ MoveTo }) => {
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const [getDeclarationInfo] = useLazyGetDeclarationInfoQuery();
  const [updateDeclarationInfo] = useUpdateDeclarationInfoMutation();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, isError, error } = await getDeclarationInfo(null, false);
      setIsLoading(false);
      if (isError || !data) {
        displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      return {
        ...data?.data,
        workRight: "No",
        dba: "No",
      };
    },
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  useEffect(() => {
    let counter = 0;
    const subscription = watch(async (values: any) => {
      try {
        counter += 1;
        // checking if the user is opening the form first time
        // may be in production that condtion will not work
        if (counter <= 2) return;
        delete values?.workRight;
        delete values?.dba;
        // Api Needs to be fixed
        const jsonData = { ...values };
        const res = await updateDeclarationInfo(jsonData);
        displaySuccessMessage(res, enqueueSnackbar);
      } catch (error) {
        displayErrorMessage(error, enqueueSnackbar);
      }
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);
  const onSubmit = async (data: any) => {
    // activateNextForm();
  };
  const moveToDbsAndWriteToWork = (e: any) => {
    MoveTo("BACKGROUND CHECKS", "Right to work");
  };
  if (isLoading) return <FormSkeleton />;
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" sx={{ padding: "0.5em" }}>
        <Grid container item xs={12}>
          <Grid item>
            <Typography
              variant="formTopHeading"
              sx={{ color: theme.palette.primary.main }}
            >
              Declaration
            </Typography>
          </Grid>
          <Grid item sm={12} container>
            <Grid item sm={12}>
              <Typography sx={{ margin: "0.5em 0", fontWeight: "500" }}>
                The following declaration statements are asked to candidates.
              </Typography>
              <Typography>
                The information in this application form is true and complete. I
                agree that any deliberate omission, falsification or
                misrepresentation in the application form will be grounds for
                rejecting this application or subsequent dismissal if employed
                by the Organisation. Where applicable, I consent that the
                organisation can seek clarification regarding professional
                registration details.
              </Typography>
            </Grid>

            <Grid item sm={12} container direction="column">
              <Grid item>
                <RHFSwitch
                  name="agree"
                  label="I agree to the above Declaration."
                />
              </Grid>
            </Grid>
            {/* Does the candidate have the right to work  */}
            <Grid item sm={12} sx={{ margin: "0.5em 0" }}>
              <Typography sx={{ fontWeight: "500" }}>
                Does the candidate have the right to work in UK?
              </Typography>
            </Grid>
            <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0 0.5em" }}>
                <RHFRadioGroup
                  name="workRight"
                  options={["Yes", "No"]}
                  onChange={moveToDbsAndWriteToWork}
                ></RHFRadioGroup>
              </Grid>
            </Grid>
            <Grid item sm={12} container>
              <RHFTextField
                multiline
                rows={4}
                name="detail"
                label="If Yes, please provide more details"
                fullWidth
                disabled
              />
            </Grid>
            {/* are you willing to  */}
            <Grid item sm={12} sx={{ margin: "0.5em 0" }}>
              <Typography sx={{ fontWeight: "500" }}>
                Are you willing to undergo a full enhanced DBA check at a price
                of £55 ?
              </Typography>
            </Grid>
            <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0 0.5em" }}>
                <RHFRadioGroup
                  name="dba"
                  options={["Yes", "No"]}
                  onChange={moveToDbsAndWriteToWork}
                ></RHFRadioGroup>
              </Grid>
            </Grid>

            <Grid item sm={12}>
              {HeadingsWithDesInfo.map(({ heading, des, com }, index): any => {
                return (
                  <HeadingWithDisc
                    key={index}
                    heading={heading}
                    des={des}
                    com={com}
                  />
                );
              })}
            </Grid>
            <Grid item sm={12}>
              {DotedHeadingsWithDesInfo.map(({ heading, des }, index): any => {
                return (
                  <DotedHeadingWithDisc
                    key={index}
                    heading={heading}
                    des={des}
                  />
                );
              })}
            </Grid>
            <Grid item sm={12}>
              <RHFSwitch
                name="dataPrivacy"
                label="I agree to the above Declaration."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default AddDeclaration;
