import { enqueueSnackbar } from "notistack";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Stack, Grid, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";

// components
import { FormProvider, RHFTextField } from "../../../components/hook-form";
//
import { ResetPasswordFormSchema, defaultValues } from ".";

import { useResetPasswordMutation } from "@root/services/authApi";
import { useState } from "react";
import { PATH_AUTH } from "@root/routes/paths";

// ----------------------------------------------------------------------

export default function ResetPassword({ data }: any) {
  const [resetTrigger, { isLoading }] = useResetPasswordMutation();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(ResetPasswordFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (credentials: any) => {
    const payload = {
      email: data?.user,
      password: credentials?.password,
      code: data?.code,
    };

    try {
      const res: any = await resetTrigger(payload).unwrap();
      res && router.push(PATH_AUTH.login);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error Occured", { variant: "error" });
    }
  };

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={passwordEndAdornment}
              disabled={isSubmitting}
            />
            <RHFTextField
              name="confirmPassword"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              InputProps={passwordEndAdornment}
              disabled={isSubmitting}
            />
            <LoadingButton
              fullWidth
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isValid}
            >
              Reset Password
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
