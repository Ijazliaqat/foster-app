import { useState, FC } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Button, Grid } from "@mui/material";
// utils
// components
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import MultipleFileUploader from "../../file-uploaders/multifile-uploader/MultipleFileUploader";
import {
  useDeleteDbsDocuMutation,
  useLazyGetDbsInfoQuery,
  useUpdateDbsInfoMutation,
} from "@root/services/update-profile/background-checks/backgroundChecksApi";
import FormSkeleton from "../../render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";

const DBS: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [availableFiles, setAvailableFiles] = useState<any>(null);
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const [getDbsInfo] = useLazyGetDbsInfoQuery();
  const [deleteDbsDocu] = useDeleteDbsDocuMutation();
  const [updateDbsInfo] = useUpdateDbsInfoMutation();

  const methods: any = useForm({
    // resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, isError, error } = await getDbsInfo(null, true);
      setAvailableFiles(data?.data?.certificate);
      setIsLoading(false);
      if (isError || !data?.data) {
        data?.data && displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      const { validDBS, certificateName, issueDate, online, updateService } =
        data?.data;
      return {
        validDBS,
        certificateName,
        issueDate: new Date(),
        online,
        updateService,
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

  const validDBS = useWatch({ control, name: "validDBS" });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    documents.forEach((doc) => formData.append("certificate", doc));
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await updateDbsInfo(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
    console.log({ data });
  };
  const deleteDocument = async (docId: string) => {
    try {
      setIsUpdating(true);
      const data = await deleteDbsDocu({ imgId: docId });
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
            {/* Does The Candidate Have a valid DBS  */}
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFSelect
                  name="validDBS"
                  label="Does the candidate have a valid Enhanced DBS ?"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </RHFSelect>
              </Grid>
            </Grid>
            {/*DBS ceritificate No  */}
            {validDBS === "Yes" && (
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFTextField
                    name="certificateName"
                    label="DBS (PVG) Certificate Number"
                    fullWidth
                  />
                </Grid>
              </Grid>
            )}

            {/* if a candidate have a valid enhanced DBS  */}
            {validDBS === "Yes" && (
              <Grid item sm={12} container>
                {/* Issue Date */}
                <Grid item sm={6} container direction="column">
                  <Grid item sx={{ padding: "0.5em" }}>
                    <RHFDatePicker
                      name="issueDate"
                      label="DBS (PVG) issue Date"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                {/* DBS Online  */}
                <Grid item sm={6} container direction="column">
                  <Grid item sx={{ padding: "0.5em" }}>
                    <RHFSelect name="online" label="Is DBS (PVG) online?">
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </RHFSelect>
                  </Grid>
                </Grid>
                {/* DBS Service No  */}
                <Grid item sm={6} container direction="column">
                  <Grid item sx={{ padding: "0.5em" }}>
                    <RHFTextField
                      name="updateService"
                      label="DBS (PVG) Update Service No."
                      fullWidth
                    />
                  </Grid>
                </Grid>
                {/* Upload Certidicates  */}
                <Grid item sm={12}>
                  <Grid item sx={{ padding: "0.5em" }}>
                    {/* Upload Certificates */}
                    <MultipleFileUploader
                      availableFiles={availableFiles}
                      setAvailableFiles={setAvailableFiles}
                      setDocuments={setDocuments}
                      deleteDocument={deleteDocument}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
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
      </FormProvider>
    </>
  );
};

export default DBS;
