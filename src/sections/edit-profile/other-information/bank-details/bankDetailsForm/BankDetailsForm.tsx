import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, IconButton, Typography } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import SingleFileUploader from "@root/sections/edit-profile/file-uploaders/SingleFileUploader";
import { useAddOtherBankDetailsInfoMutation } from "@root/services/update-profile/other-information/otherInformationApi";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import { enqueueSnackbar } from "notistack";
import IsFetching from "@root/components/loaders/IsFetching";

const BankDetailsForm: FC<any> = ({ addRefModelClose }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState<File | any>(null);
  const [avialableFile, setAvialableFile] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [addOtherBankDetailsInfo] = useAddOtherBankDetailsInfoMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const setFileHandler = (file: File | null) => {
    setFile(file);
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    file && formData.append("bankStatement", file);
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await addOtherBankDetailsInfo(formData);
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

                {/* A Custom Field On Full Width  */}
                <Grid item sm={12} container sx={{ padding: "0.5em" }}>
                  <SingleFileUploader
                    file={file}
                    setFileHandler={setFileHandler}
                    avialableFile={avialableFile}
                  />
                </Grid>
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
                      <Button
                        variant="contained"
                        type="submit"
                        onClick={addRefModelClose}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>
    </>
  );
};

export default BankDetailsForm;
