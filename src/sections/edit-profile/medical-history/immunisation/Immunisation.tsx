import { useState, useRef, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import InfoIcon from "@mui/icons-material/Info";
import { useForm, useWatch } from "react-hook-form";
// @mui
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFSwitch } from "@root/components/hook-form";
import {
  useLazyGetImmunisationInfoQuery,
  useUpdateImmunisationInfoMutation,
  useDeleteImmunisationInfoDocuMutation,
} from "@root/services/update-profile/medical-history/medicalHistory";
import MultipleFileUploader from "../../file-uploaders/multifile-uploader/MultipleFileUploader";
import FormSkeleton from "../../render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";

const Immunisation: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const fileInputRef: any = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [availableFiles, setAvailableFiles] = useState<any>(null);

  const [getImmunisationInfo] = useLazyGetImmunisationInfoQuery();
  const [updateImmunisationInfo] = useUpdateImmunisationInfoMutation();
  const [deleteImmunisationInfoDocu] = useDeleteImmunisationInfoDocuMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, error, isError } = await getImmunisationInfo(null, false);
      setAvailableFiles(data?.data?.certificate);
      setIsLoading(false);
      if (isError || !data?.data) {
        data?.data && displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }
      return {
        ...data?.data,
        dob: new Date(),
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

  const photo = useWatch({ control, name: "photo" });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleClickAttachPhoto = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: any) => {
    console.log({ data });
    const formData = new FormData();
    documents.forEach((doc) => formData.append("certificate", doc));
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await updateImmunisationInfo(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
    // activateNextForm();
  };

  const deleteDocument = async (docId: string) => {
    try {
      setIsUpdating(true);
      const data = await deleteImmunisationInfoDocu({ imgId: docId });
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
            <Grid item sm={12} container>
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
                        Immunisation
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* certificate issue And expiry date  */}
                  <Grid container>
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
                    </Grid>
                  </Grid>
                  {/* File Uploader  */}
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

export default Immunisation;
