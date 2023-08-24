import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Grid, Typography, Button, Box, useTheme } from "@mui/material";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import {
  useLazyGetSingleRegularAssessmentDetailQuery,
  usePatchRegularAssessmentDetailMutation,
  usePostRegularAssessmentDetailMutation,
} from "@root/services/recruitment/assessment-stage-one/assessmentStageOneApi";
import dayjs from "dayjs";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export const formFields = [
  {
    id: 1,
    title: "Meeting Date",
    gridLength: 6,
    otherOptions: {
      name: "meetingDate",
      label: "Meeting Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    title: "Time",
    gridLength: 6,
    otherOptions: {
      name: "meetingTime",
      label: "Time",
      fullWidth: true,
    },
    component: RHFTimePicker,
  },

  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "meetingAgenda",
      label: "Meeting Agenda:",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "meetingAttendees",
      label: "Meeting Attendees:",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "meetingOutcomes",
      label: "Meeting Outcomes",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "meetingAction",
      label: "Meeting Action",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    title: "Next Assessment Date",
    gridLength: 6,
    otherOptions: {
      name: "nextAssessmentDate",
      label: "Next Assessment Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 8,
    title: "Next Assessment Time",
    gridLength: 6,
    otherOptions: {
      name: "nextAssessmentTime",
      label: "Next Assessment Time",
      fullWidth: true,
    },

    component: RHFTimePicker,
  },
];

const RegularAssessmentMeetingForm = (props: any) => {
  const { open, setOpen, id, fieldsDisable, setFieldsDisable, actionType, setId } = props;
  const theme: any = useTheme();
  const [loading, setLoading] = useState(true);
  // const { data } = useGetSingleRegularAssessmentDetailQuery({ id: id });
  const [singleRegulaAssessmentrDetail] = useLazyGetSingleRegularAssessmentDetailQuery();
  const [postRegularMutation] = usePostRegularAssessmentDetailMutation({});
  const [patchRegularAssessmentDetail] = usePatchRegularAssessmentDetailMutation({});

  const handleClose = () => {
    setOpen(false);
    setFieldsDisable(false);
    setId("");
  };

  // console.log("singledata", data?.data);
  console.log("actionType", actionType);

  const defaultValues = {
    meetingDate: new Date(),
    meetingTime: null,

    meetingAgenda: "Nil",
    meetingAttendees: "Nil",
    meetingOutcomes: "Nil",
    meetingAction: "Nil",
    nextAssessmentDate: new Date(),
    nextAssessmentTime: null,
    uploadMeetingRecording: null,
  };

  const FormSchema = Yup.object().shape({
    meetingDate: Yup.date().required("Required Field"),
    meetingTime: Yup.string().required("Required Field"),
    meetingAgenda: Yup.string().required("Required Field"),
    meetingAttendees: Yup.string().required("Required Field"),
    meetingOutcomes: Yup.string().required("Required Field"),
    meetingAction: Yup.string().required("Required Field"),
    nextAssessmentDate: Yup.date().required("Required Field"),
    nextAssessmentTime: Yup.string().required("Required Field"),
    uploadMeetingRecording: Yup.mixed().required("Please upload a valid document"),
  });

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, isError } = await singleRegulaAssessmentrDetail({ id }, true);
      setLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      if (actionType === "add") {
        return defaultValues;
      }
      const responseData = {
        ...data.data,
        meetingDate: new Date(data?.data?.meetingDate),
        nextAssessmentDate: new Date(data?.data?.nextAssessmentDate),
        meetingTime: new Date(data?.data?.meetingTime),
        nextAssessmentTime: new Date(data?.data?.nextAssessmentTime),
        uploadMeetingRecording: data ? { name: data?.data?.uploadMeetingRecording } : null,
      };
      console.log(responseData);
      // for (const key in responseData) {
      //   const value = responseData[key];
      //   if (formatters[key]) responseData[key] = formatters[key](value);
      // }

      return responseData;
    },
  });

  const { reset, handleSubmit } = methods;

  const onSubmitHandler = (data: any) => {
    const regularAssessmentForm = new FormData();

    regularAssessmentForm.append("meetingDate", dayjs(data?.meetingDate).format("MM/DD/YYYY"));
    regularAssessmentForm.append("meetingTime", new Date(data?.meetingTime).toISOString());
    regularAssessmentForm.append("meetingAgenda", data?.meetingAgenda);
    regularAssessmentForm.append("meetingAttendees", data?.meetingAttendees);
    regularAssessmentForm.append("meetingOutcomes", data?.meetingOutcomes);
    regularAssessmentForm.append("meetingAction", data?.meetingAction);
    regularAssessmentForm.append(
      "nextAssessmentDate",
      dayjs(data?.nextAssessmentDate).format("MM/DD/YYYY")
    );

    regularAssessmentForm.append(
      "nextAssessmentTime",
      new Date(data?.nextAssessmentTime).toISOString()
    );
    regularAssessmentForm.append("uploadMeetingRecording", data?.uploadMeetingRecording);

    // for (var pair of regularAssessmentForm.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    // POST request
    if (actionType === "add") {
      postRegularMutation(regularAssessmentForm);
    }
    // PATCH request
    else {
      regularAssessmentForm.append("id", id);
      patchRegularAssessmentDetail({ regularAssessmentForm, id });
    }
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={Styles.root}>
        {loading && <h4>Loading...</h4>}
        {!loading && (
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
            <h4 style={{ marginBottom: "20px" }}>Person Uploaded: XYZ</h4>
            <Grid container rowSpacing={2} columnSpacing={3} alignItems="center">
              {formFields?.map((form: any) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                    <>
                      {" "}
                      {form.component ? (
                        <Grid>
                          <Typography color={theme.palette.primary.main} variant="body2">
                            {form.heading}
                          </Typography>
                          <form.component
                            disabled={fieldsDisable}
                            size="small"
                            {...form.otherOptions}
                          >
                            {form.otherOptions
                              ? form.options?.map((option: any) => (
                                  <option key={option.value} value={option.value}>
                                    {" "}
                                    {option.label}{" "}
                                  </option>
                                ))
                              : null}
                          </form.component>
                        </Grid>
                      ) : (
                        <Typography variant={form.variant} color={theme.palette.primary.main}>
                          {" "}
                          {form.heading}{" "}
                        </Typography>
                      )}{" "}
                    </>
                  </Grid>
                );
              })}
              <Grid item xs={12}>
                <RHFUploadFile
                  name="uploadMeetingRecording"
                  {...methods}
                  disabled={fieldsDisable}
                />
              </Grid>
            </Grid>
            {!(actionType === "view") && (
              <Box sx={Styles.buttonWrapper}>
                <Button type={"submit"} sx={Styles.buttonSuccess(theme)}>
                  Upload
                </Button>
                <Button
                  onClick={() => {
                    // handleClose();
                    reset();
                  }}
                  sx={Styles.buttonError(theme)}
                >
                  Clear
                </Button>
              </Box>
            )}
            {actionType === "view" && (
              <Box sx={Styles.buttonWrapper}>
                <Button onClick={handleClose} sx={Styles.buttonError(theme)}>
                  Back
                </Button>
              </Box>
            )}
          </FormProvider>
        )}
      </Box>
    </Modal>
  );
};

export default RegularAssessmentMeetingForm;

const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 600 },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    p: 2,
  }),
  innerBox: (theme: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  crossIcons: (theme: any) => ({
    fontSize: "100px",
    color: theme.palette.error.main,
  }),
  buttonWrapper: (theme: any) => ({
    display: "flex",

    gap: "10px",
    mt: 2,
  }),
  buttonError: (theme: any) => ({
    bgcolor: theme.palette.orange.main,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.orange.main },
    px: 2,
    py: 1,
  }),
  buttonSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
  }),
};
