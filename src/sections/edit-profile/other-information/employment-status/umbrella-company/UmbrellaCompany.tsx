import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import SingleFileUploader from "@root/sections/edit-profile/file-uploaders/SingleFileUploader";
import {
  useLazyGetOtherUmbrellaCompanyInfoQuery,
  useUpdateOtherUmbrellaCompanyInfoMutation,
} from "@root/services/update-profile/other-information/otherInformationApi";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import { enqueueSnackbar } from "notistack";
import FormSkeleton from "@root/sections/edit-profile/render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";

const UmberllaCompany: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState<File | any>(null);
  const [avialableFile, setAvialableFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updateOtherUmbrellaCompanyInfo] =
    useUpdateOtherUmbrellaCompanyInfoMutation();
  const [getOtherUmbrellaCompanyInfo] =
    useLazyGetOtherUmbrellaCompanyInfoQuery();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, isError, error } = await getOtherUmbrellaCompanyInfo(
        null,
        false
      );
      console.log({ data });
      setFile(data?.data?.umberallaComapny?.document || null);
      setIsLoading(false);
      if (isError) {
        displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }

      return {
        ...data?.data?.umberallaComapny,
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
    const formData = new FormData();
    file && formData.append("document", file);
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await updateOtherUmbrellaCompanyInfo(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  const setFileHandler = (file: File | null) => {
    setFile(file);
  };
  if (isLoading) return <FormSkeleton />;
  return (
    <Grid item sm={12}>
      {isSubmitting && <IsFetching isFetching />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid container item xs={12}>
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
              {/* A Custom Field On Full Width  */}
              {/* <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="previousExpCustom"
                  label="Previous Exp Custom"
                />
              </Grid>
            </Grid> */}
            </Grid>
            <Grid item sm={12} sx={{ padding: "0.5em" }}>
              <SingleFileUploader
                file={file}
                setFileHandler={setFileHandler}
                avialableFile={avialableFile}
              />
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
    </Grid>
  );
};

export default UmberllaCompany;
