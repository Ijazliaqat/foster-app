import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, IconButton, Typography } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import CloseIcon from "@mui/icons-material/Close";
import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import MultipleFileUploader from "@root/sections/edit-profile/file-uploaders/multifile-uploader/MultipleFileUploader";
import IsFetching from "@root/components/loaders/IsFetching";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import { enqueueSnackbar } from "notistack";
import { useAddAdditionalTrainingDetailsMutation } from "@root/services/update-profile/training-and-work-his/trainingAndWorkHistoryApi";

const AddTrainingDocForm: FC<any> = ({ addRefModelClose }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [availableFiles, setAvailableFiles] = useState<any>(null);
  const [addAdditionalTrainingDetails] =
    useAddAdditionalTrainingDetailsMutation();

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    documents.forEach((doc) => formData.append("certificates", doc));
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await addAdditionalTrainingDetails(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      addRefModelClose();
      // activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  return (
    <>
      {(isSubmitting || isUpdating) && <IsFetching isFetching />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid container item xs={12}>
            {/* Header Area  */}
            <Grid item sx={{ padding: "0.5em" }} container>
              <Grid item sm={11}>
                <Typography sx={{ fontWeight: 600 }}>
                  Additional Training Details
                </Typography>
              </Grid>
              <Grid item sm={1} container justifyContent="flex-end">
                <IconButton onClick={addRefModelClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
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
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <MultipleFileUploader
                    availableFiles={availableFiles}
                    setAvailableFiles={setAvailableFiles}
                    setDocuments={setDocuments}
                    deleteDocument={() => null}
                  />
                </Grid>
              </Grid>
              {/* Custom Fields On Half Width  */}
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFDatePicker
                    name="issuedDate"
                    label="certificate issued?"
                  />
                </Grid>
              </Grid>
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFDatePicker name="expiryDate" label="Expiry Date" />
                </Grid>
              </Grid>
            </Grid>
            {!disabled && (
              <Grid item sm={12} container direction="column">
                <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                  <Grid item>
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={addRefModelClose}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" type="submit">
                      Save
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

export default AddTrainingDocForm;
