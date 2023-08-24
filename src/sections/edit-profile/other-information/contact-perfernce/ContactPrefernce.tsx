import { useState, FC } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import { FormProvider, RHFCheckbox } from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";
import TimeSelector from "./TimeSelector/TimeSelector";
import dayjs, { Dayjs } from "dayjs";
import {
  useLazyGetContactPreferenceQuery,
  useUpdateContactPreferenceMutation,
} from "@root/services/update-profile/other-information/otherInformationApi";
import FormSkeleton from "../../render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";

const ContactPrefernce: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [getContactPreference] = useLazyGetContactPreferenceQuery();
  const [updateContactPreference] = useUpdateContactPreferenceMutation();
  const [isLoading, setIsLoading] = useState(true);
  const [timeValues, setTimeValues] = useState<{
    from: Dayjs | null;
    to: Dayjs | null;
    fromString: string;
    toString: string;
  }>({
    from: dayjs(new Date()),
    to: dayjs(new Date()),
    fromString: "--",
    toString: "--",
  });
  const [contactPrefernceGenInfos, setContactPrefernceGenInfos] = useState({
    timeRangeModel: false,
  });
  const [disabled, setDisabled] = useState(false);
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, error, isError } = await getContactPreference(null, false);
      console.log(data?.data);
      setIsLoading(false);
      if (isError || !data?.data) {
        data?.data && displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      const { from, to } = data?.data;
      setTimeValues((pre) => ({
        ...pre,
        fromString: dayjs(from).format("LT"),
        toString: dayjs(to).format("LT"),
      }));

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
    const jsonData = {
      ...data,
      from: timeValues.from,
      to: timeValues.to,
    };
    try {
      const data = await updateContactPreference(jsonData);
      displaySuccessMessage(data, enqueueSnackbar);
      activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };

  const openTimeRangeModel = () => {
    setContactPrefernceGenInfos((pre) => ({ ...pre, timeRangeModel: true }));
  };
  const closeTimeRangeModel = () => {
    setContactPrefernceGenInfos((pre) => ({ ...pre, timeRangeModel: false }));
  };
  const saveToTime = () => {
    setTimeValues((pre) => ({
      ...pre,
      fromString: dayjs(timeValues.from).format("LT"),
      toString: dayjs(timeValues.to).format("LT"),
    }));
    closeTimeRangeModel();
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
                Contact Preference
              </Typography>
            </Grid>
            <Grid item sm={12} container>
              {/* Phone  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ paddingLeft: "0.5em" }}>
                  <RHFCheckbox name="phone" label="Phone" />
                </Grid>
              </Grid>
              {/* Whatsapp  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ paddingLeft: "0.5em" }}>
                  <RHFCheckbox name="whatsapp" label="Whatsapp" />
                </Grid>
              </Grid>
              {/* Sms  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ paddingLeft: "0.5em" }}>
                  <RHFCheckbox name="sms" label="Sms" />
                </Grid>
              </Grid>
              {/* Time Selector  */}
              <Grid
                item
                sm={12}
                container
                direction="column"
                sx={{ paddingLeft: "0.5em" }}
              >
                <TimeSelector
                  timeValues={timeValues}
                  setTimeValues={setTimeValues}
                  openTimeRangeModel={openTimeRangeModel}
                  closeTimeRangeModel={closeTimeRangeModel}
                  contactPrefernceGenInfos={contactPrefernceGenInfos}
                  saveToTime={saveToTime}
                />
              </Grid>
              {/* Email  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ paddingLeft: "0.5em" }}>
                  <RHFCheckbox name="email" label="Email" />
                </Grid>
              </Grid>
              {/* notification  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ paddingLeft: "0.5em" }}>
                  <RHFCheckbox
                    name="notification"
                    label="Mobile Notification"
                  />
                </Grid>
              </Grid>
              {/* both  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ paddingLeft: "0.5em" }}>
                  <RHFCheckbox name="both" label="Both" />
                </Grid>
              </Grid>
              {/* both  */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ paddingLeft: "0.5em" }}>
                  <RHFCheckbox name="noneof" label="None Of the Above" />
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

export default ContactPrefernce;
