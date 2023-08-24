import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";

import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFSwitch } from "@root/components/hook-form";
import {
  useDeleteAddressDetailsDocuMutation,
  useLazyGetAddressDetailsQuery,
  useUpdateAddressDetailsMutation,
} from "@root/services/update-profile/about-the-candidate/aboutTheCandidateApi";
import FormSkeleton from "@root/sections/edit-profile/render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import { enqueueSnackbar } from "notistack";
import {
  displaySuccessMessage,
  displayErrorMessage,
} from "@root/sections/edit-profile/util/Util";
import MultipleFileUploader from "@root/sections/edit-profile/file-uploaders/multifile-uploader/MultipleFileUploader";

const AddressDetailsForm: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [availableFiles, setAvailableFiles] = useState<any>(null);
  const [getAddressDetails] = useLazyGetAddressDetailsQuery();
  const [updateAddressDetails] = useUpdateAddressDetailsMutation();
  const [deleteAddressDetailsDocu] = useDeleteAddressDetailsDocuMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, isError, error } = await getAddressDetails(null, true);
      setAvailableFiles(data?.data?.documents);
      setIsLoading(false);
      if (isError || !data?.data) {
        data?.data && displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      return {
        ...data?.data,
        from: new Date(data?.data?.from),
        to: new Date(data?.data?.to),
      };
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    // activateNextForm();
    if (!isDirty) return;
    const formData = new FormData();
    documents.forEach((doc) => formData.append("documents", doc));
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await updateAddressDetails(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  const deleteDocument = async (docId: string) => {
    try {
      setIsUpdating(true);
      const data = await deleteAddressDetailsDocu({ imgId: docId });
      displaySuccessMessage(data, enqueueSnackbar);
      setIsUpdating(false);
      return true;
    } catch (error) {
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
            <Grid item sx={{ padding: "0.5em" }}>
              <Typography
                variant="formTopHeading"
                sx={{ color: theme.palette.primary.main }}
              >
                ADD ADDRESS DETAILS
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
              <Grid item sm={12} sx={{ padding: "0.5em" }}>
                <Typography>The period of stay at this address?</Typography>
              </Grid>
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFDatePicker fullWidth name="from" label="From" />
                </Grid>
              </Grid>
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFDatePicker fullWidth name="to" label="To" />
                </Grid>
              </Grid>
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFSwitch
                    name="currentAddress"
                    label="This is the current address"
                  />
                </Grid>
              </Grid>
              {/* A Custom Field On Full Width */}
              <Grid item sm={12} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <MultipleFileUploader
                    availableFiles={availableFiles}
                    setAvailableFiles={setAvailableFiles}
                    setDocuments={setDocuments}
                    deleteDocument={deleteDocument}
                  />
                </Grid>
              </Grid>
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

export default AddressDetailsForm;
