import { useState, useRef, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Grid, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";

//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FullWidthFormField from "./FullWidthFormField";
import HalfWidthFormField from "./HalfWidthFormField";

const FormGenerator: FC<any> = ({
  FormSchema,
  defaultValues,
  fieldsInfo,
  submitClickHand,
  disabled,
}) => {
  const fileInputRef: any = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
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

  const photo = useWatch({ control, name: "photo" });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleClickAttachPhoto = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: any) => {
    submitClickHand(data);
  };

  const passwordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowPassword} edge="end">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center">
        <Grid container item xs={11}>
          <Grid item sm={12} container>
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
            <LoadingButton
              color="info"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isDirty}
            >
              Submit
            </LoadingButton>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default FormGenerator;
