import { FC, Fragment } from "react";
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
import { FormSchema, fieldsInfo } from "./formData";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import IsFetching from "@root/components/loaders/IsFetching";
import { useUpdateWorkExperienceMutation } from "@root/services/update-profile/training-and-work-his/trainingAndWorkHistoryApi";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import { enqueueSnackbar } from "notistack";

const UpdateViewWorkForm: FC<any> = ({ close, defValues, disabled }) => {
  // const [disabled, setDisabled] = useState(false);
  const {
    id,
    employerName,
    position,
    experience,
    leavingReason,
    startDate,
    endDate,
    currentlyWorking,
  } = defValues;
  const [updateWorkExperience] = useUpdateWorkExperienceMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: {
      employerName,
      position,
      experience,
      leavingReason,
      startDate: new Date(),
      endDate: new Date(),
      currentlyWorking,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    const jsonData = {
      ...data,
    };
    try {
      const data = await updateWorkExperience({ body: jsonData, workId: id });
      displaySuccessMessage(data, enqueueSnackbar);
      close();
      // activateNextForm();
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };

  return (
    <>
      {isSubmitting && <IsFetching isFetching />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid container item xs={12}>
            {/* Header Area  */}
            <Grid item sx={{ padding: "0.5em" }} container>
              <Grid item sm={11}>
                <Typography sx={{ fontWeight: 600 }}>
                  Add Work Experience
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
            {!disabled && (
              <Grid item sm={12} container direction="column">
                <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                  <Grid item>
                    <Button variant="contained" onClick={close}>
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

export default UpdateViewWorkForm;
