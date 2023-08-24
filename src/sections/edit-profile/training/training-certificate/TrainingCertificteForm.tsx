import { useState, FC } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import InfoIcon from "@mui/icons-material/Info";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import { FormProvider, RHFSwitch } from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import {
  useDeleteTrainingAndWorkHistoryInfoDocuMutation,
  useLazyGetTrainingAndWorkHistoryInfoQuery,
  useUpdateTrainingAndWorkHistoryInfoMutation,
} from "@root/services/update-profile/training-and-work-his/trainingAndWorkHistoryApi";
import FormSkeleton from "../../render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import MultipleFileUploader from "../../file-uploaders/multifile-uploader/MultipleFileUploader";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";

const TrainingCertificteForm: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [availableFiles, setAvailableFiles] = useState<any>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [getTrainingAndWorkHistoryInfo] =
    useLazyGetTrainingAndWorkHistoryInfoQuery();
  const [deleteTrainingAndWorkHistoryInfoDocu] =
    useDeleteTrainingAndWorkHistoryInfoDocuMutation();
  const [updateTrainingAndWorkHistoryInfo] =
    useUpdateTrainingAndWorkHistoryInfoMutation();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, isError, error } = await getTrainingAndWorkHistoryInfo(
        null,
        false
      );
      console.log({ data });
      setAvailableFiles(data?.data?.certificate);
      setIsLoading(false);
      if (isError || !data?.data) {
        data?.data && displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      return {
        ...data?.data,
        issuedDate: new Date(data?.data?.issuedDate),
        expiryDate: new Date(data?.data?.expiryDate),
      };
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    // console.log({ data });
    const formData = new FormData();
    documents.forEach((doc) => formData.append("certificates", doc));
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await updateTrainingAndWorkHistoryInfo(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  const deleteDocument = async (docId: string) => {
    try {
      setIsUpdating(true);
      const data = await deleteTrainingAndWorkHistoryInfoDocu({ imgId: docId });
      displaySuccessMessage(data, enqueueSnackbar);
      setIsUpdating(false);
      return true;
    } catch (error) {
      setIsUpdating(false);
      displayErrorMessage(error, enqueueSnackbar);
      return false;
    }
  };
  if (isLoading) return <FormSkeleton />;
  return (
    <>
      {(isSubmitting || isUpdating) && <IsFetching isFetching />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid container item xs={12}>
            <Grid item sm={12} container>
              {/* A Custom Field On Full Width  */}
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
                        Training Certificates
                      </Typography>
                    </Grid>
                    <Grid item>
                      <InfoIcon sx={{ color: theme.palette.primary.main }} />
                    </Grid>
                  </Grid>

                  {/* Text Fields That Accupies 100% width by default  */}
                  <RHFSwitch
                    name="physicallyAudited"
                    label="Physically Audited and no Document Uploaded"
                  />
                  <Grid item sm={12}>
                    <Typography sx={{ fontWeight: "600" }}>
                      Did you require further training (online or in person) ?
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <RHFSwitch name="furtherTrainingYes" label="Yes" />
                  </Grid>
                  <Grid item sm={12}>
                    <RHFSwitch name="furtherTrainingNo" label="No" />
                  </Grid>

                  {/* further training  */}
                  <Grid item sm={12}>
                    <Typography sx={{ fontWeight: "600" }}>
                      Did you require further training (online or in person) ?
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <RHFSwitch
                      name="singleCertificate"
                      label="Single certificate covering multiple trainings."
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <RHFSwitch
                      name="individual"
                      label="Individual training cartificates, as the case may be."
                    />
                  </Grid>
                  {/* Upload Certificates Heading And Icons  */}
                  <Grid item sm={12}>
                    <Grid item container>
                      <Grid item>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                          }}
                        >
                          Upload Certificates
                        </Typography>
                      </Grid>
                      <Grid item>
                        <InfoIcon sx={{ color: theme.palette.primary.main }} />
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* File Uploader  */}
                  <Grid item sm={12}>
                    <MultipleFileUploader
                      availableFiles={availableFiles}
                      setAvailableFiles={setAvailableFiles}
                      setDocuments={setDocuments}
                      deleteDocument={deleteDocument}
                    />
                  </Grid>

                  {/* certificate issue And expiry date  */}
                  <Grid container>
                    <Grid item sm={6} container direction="column">
                      <Grid item sx={{ padding: "0.5em" }}>
                        <RHFDatePicker
                          name="issuedDate"
                          label="When was the certificate issued *"
                        />
                      </Grid>
                    </Grid>
                    <Grid item sm={6} container direction="column">
                      <Grid item sx={{ padding: "0.5em" }}>
                        <RHFDatePicker
                          name="expiryDate"
                          label="Certificate Expiry Date *"
                        />
                      </Grid>
                    </Grid>
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

export default TrainingCertificteForm;
