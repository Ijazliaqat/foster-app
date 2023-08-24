import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
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
import MultipleFileUploader from "@root/sections/edit-profile/file-uploaders/multifile-uploader/MultipleFileUploader";
import {
  useAddOtherInfoAdditionalDocsMutation,
  useDeleteOtherInfoAdditionalDocsDocsMutation,
  useUpdateOtherInfoAdditionalDocsMutation,
} from "@root/services/update-profile/other-information/otherInformationApi";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import { enqueueSnackbar } from "notistack";
import FormSkeleton from "@root/sections/edit-profile/render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";

const UpdateAdditionalDocsForm: FC<any> = ({ close, defValues, disabled }) => {
  const theme: any = useTheme();
  // const [disabled, setDisabled] = useState(false);
  const { id, certificate, documentName } = defValues;
  console.log(defValues);
  const [availableFiles, setAvailableFiles] = useState<any>(certificate);
  const [isUpdating, setIsUpdating] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [addOtherInfoAdditionalDocs] = useAddOtherInfoAdditionalDocsMutation();
  const [updateOtherInfoAdditionalDocs] =
    useUpdateOtherInfoAdditionalDocsMutation();
  const [deleteOtherInfoAdditionalDocsDocs] =
    useDeleteOtherInfoAdditionalDocsDocsMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: {
      documentName,
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
    const formData = new FormData();
    documents.forEach((doc) => formData.append("certificate", doc));
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await updateOtherInfoAdditionalDocs({
        body: formData,
        docId: id,
      });
      displaySuccessMessage(data, enqueueSnackbar);
      close();
      // activateNextForm();
    } catch (error: any) {
      console.log("reesr");
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  const deleteDocument = async (docId: string) => {
    try {
      setIsUpdating(true);
      const data = await deleteOtherInfoAdditionalDocsDocs({
        body: { imgId: docId },
        docsId: id,
      });
      displaySuccessMessage(data, enqueueSnackbar);
      setIsUpdating(false);
      return true;
    } catch (error) {
      setIsUpdating(false);
      displayErrorMessage(error, enqueueSnackbar);
      return false;
    }
  };
  return (
    <>
      {(isSubmitting || isUpdating) && <IsFetching isFetching />}
      <Grid item sm={12}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container justifyContent="center">
            <Grid container item xs={12}>
              {/* Header Area  */}
              <Grid item sx={{ padding: "0.5em" }} container>
                <Grid item sm={11}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Additional Documents
                  </Typography>
                </Grid>
                <Grid item sm={1} container justifyContent="flex-end">
                  <IconButton onClick={close}>
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
              </Grid>
            </Grid>
            {/* Upload Certificate Form  */}
            <Grid item sm={12} sx={{ padding: "0.5em" }}>
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
            {/* multifile uploader  */}
            <Grid item sm={12} sx={{ padding: "0.5em" }}>
              <MultipleFileUploader
                availableFiles={availableFiles}
                setAvailableFiles={setAvailableFiles}
                setDocuments={setDocuments}
                deleteDocument={deleteDocument}
              />
            </Grid>
            {!disabled && (
              <Grid item sm={12} container direction="column">
                <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                  <Grid item>
                    <Button variant="contained" type="submit">
                      Save
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" onClick={close}>
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </FormProvider>
      </Grid>
    </>
  );
};

export default UpdateAdditionalDocsForm;
