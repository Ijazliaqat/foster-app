// @mui
import {
  Stack,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// components
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "@root/components/hook-form";

//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NextLink from "next/link";
import { PATH_AUTH } from "@root/routes/paths";
import { useLoginForm } from "./useLoginForm";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isValid,
  } = useLoginForm();

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
              name="email"
              label="Email address"
              disabled={isSubmitting}
            />

            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={passwordEndAdornment}
              disabled={isSubmitting}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <RHFCheckbox name="remember" label="Remember me" />
              <NextLink
                href={PATH_AUTH.forgotPassword}
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography color="primary.main" variant="subtitle2">
                  Forgot password?
                </Typography>
              </NextLink>
            </Stack>
            <LoadingButton
              fullWidth
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isValid}
            >
              Login
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
