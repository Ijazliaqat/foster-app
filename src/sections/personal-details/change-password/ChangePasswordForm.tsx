import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { ChangePasswordSchema, defaultValues } from ".";
import CustomCard from "@root/components/CustomCard";
import { useChangePasswordMutation } from "@root/services/userApi";
import { enqueueSnackbar } from "notistack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setnewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [changePassword, { isSuccess }] = useChangePasswordMutation();
  const methods: any = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (credentials: any) => {
    const formData = {
      oldPassword: credentials.oldPassword,
      newPassword: credentials.newPassword,
    };
    try {
      await changePassword(formData).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  //Checking if API is Successfull
  if (isSuccess) {
    enqueueSnackbar("Password Changed Successfully", { variant: "success" });
  }
  //Toggle Icon For Password To Hide
  const handleOldPassword = () => {
    setOldPassword((show) => !show);
  };
  //Toggle Icon For Password To Hide
  const handlenewPassword = () => {
    setnewPassword((show) => !show);
  };
  //Toggle Icon For Password To Hide
  const handleConfirmPassword = () => {
    setConfirmPassword((show) => !show);
  };
  const oldPasswordAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleOldPassword} edge="end">
          {oldPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };
  const newpasswordAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handlenewPassword} edge="end">
          {newPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };
  const confirmPasswordAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleConfirmPassword} edge="end">
          {confirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <CustomCard
      title="Change Password"
      titleTypographyProps={{ variant: "subtitle1" }}
      divider
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          name="oldPassword"
          label="Current Password"
          disabled={isSubmitting}
          size="small"
          sx={styles.oldPassword}
          type={oldPassword ? "text" : "password"}
          InputProps={oldPasswordAdornment}
          fullWidth
        />
        <RHFTextField
          name="newPassword"
          label="New Password"
          disabled={isSubmitting}
          size="small"
          type={newPassword ? "text" : "password"}
          InputProps={newpasswordAdornment}
          sx={styles.newPassword}
          fullWidth
        />
        <RHFTextField
          name="confirmNewPassword"
          label="Confirm New Password"
          disabled={isSubmitting}
          size="small"
          type={confirmPassword ? "text" : "password"}
          InputProps={confirmPasswordAdornment}
          sx={styles.confirmPassword}
          fullWidth
        />
        <LoadingButton
          color="primary"
          size="medium"
          type="submit"
          variant="contained"
          sx={{ boxShadow: "none" }}
          disabled={!isValid}
        >
          Save
        </LoadingButton>
      </FormProvider>
    </CustomCard>
  );
};

export default ChangePasswordForm;

//styling
const styles: any = {
  oldPassword: () => ({
    mb: { xs: 2, sm: 3 },
    mt: 2,
  }),
  newPassword: () => ({
    mb: { xs: 2, sm: 3 },
  }),
  confirmPassword: () => ({
    mb: { xs: 2, sm: 2.5 },
  }),
};
