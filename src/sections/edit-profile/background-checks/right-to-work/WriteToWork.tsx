import { useState, useRef, FC } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import {
  FormProvider,
  RHFCheckbox,
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import MultipleFileUploader from "../../file-uploaders/multifile-uploader/MultipleFileUploader";
import {
  useDeleteWriteToWorkDocuMutation,
  useLazyGetWriteToWorkInfoQuery,
  useUpdateWriteToWorkInfoMutation,
} from "@root/services/update-profile/background-checks/backgroundChecksApi";
import FormSkeleton from "../../render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";

const WriteToWork: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [availableFiles, setAvailableFiles] = useState<any>(null);
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [getWriteToWorkInfo] = useLazyGetWriteToWorkInfoQuery();
  const [deleteWriteToWorkDocu] = useDeleteWriteToWorkDocuMutation();
  const [updateWriteToWorkInfo] = useUpdateWriteToWorkInfoMutation();

  const methods: any = useForm({
    // resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, error, isError } = await getWriteToWorkInfo(null, false);
      setAvailableFiles(data?.data?.certificate);
      setIsLoading(false);
      if (isError || !data?.data) {
        data?.data && displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      const { rightToWork, visaType, BRP, expiryDate, code } = data?.data;

      return {
        rightToWork,
        visaType,
        BRP,
        expiryDate: new Date(),
        code,
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

  const rightToWork = useWatch({ control, name: "rightToWork" });
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    documents.forEach((doc) => formData.append("certificate", doc));
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await updateWriteToWorkInfo(formData);
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
      const data = await deleteWriteToWorkDocu({ imgId: docId });
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
            <Typography sx={{ fontWeight: 500, color: "black" }}>
              Select Candidate’s employment status
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            {/* Does The Candidate Have a valid DBS  */}
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFRadioGroupWithLabel
                  name="rightToWork"
                  options={["Yes", "No"]}
                  fullWidth
                ></RHFRadioGroupWithLabel>
              </Grid>
            </Grid>
            {/*DBS ceritificate No  */}
            {rightToWork === "Yes" && (
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFSelect name="visaType" label="Visa Type">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </RHFSelect>
                </Grid>
              </Grid>
            )}

            {/* if a candidate have a valid enhanced DBS  */}
            {rightToWork === "Yes" && (
              <Grid item sm={12} container>
                {/* Issue Date */}
                <Grid item sm={6} container direction="column">
                  <Grid item sx={{ padding: "0.5em" }}>
                    <RHFTextField
                      fullWidth
                      name="BRP"
                      label="Visa /BRP Number"
                    />
                  </Grid>
                </Grid>
                {/* DBS Online  */}
                <Grid item sm={6} container direction="column">
                  <Grid item sx={{ padding: "0.5em" }}>
                    <RHFDatePicker
                      name="expiryDate"
                      label="Visa /BRP Expiry Date"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                {/* DBS Service No  */}
                <Grid item sm={6} container direction="column">
                  <Grid item sx={{ padding: "0.5em" }}>
                    <RHFTextField fullWidth name="code" label="Share Code" />
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

export default WriteToWork;
