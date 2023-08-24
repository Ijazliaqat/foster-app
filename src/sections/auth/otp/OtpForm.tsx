import { useState } from "react";
import OtpInput from "react-otp-input";
import { enqueueSnackbar } from "notistack";

// @mui
import { Stack, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

//mui icons
import {
  usePassCodeMutation,
  useResendCodeMutation,
} from "@root/services/authApi";

// ----------------------------------------------------------------------

export default function OtpForm() {
  const [otp, setOtp] = useState("");
  const [verifyPasscode, { isLoading }] = usePassCodeMutation();
  const [resendPasscode, { isLoading: sendingCode }] = useResendCodeMutation();
  const theme: any = useTheme();

  const onSubmit = async () => {
    try {
      const res: any = await verifyPasscode(otp).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const handleResend = async () => {
    try {
      const res: any = await resendPasscode(otp).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack spacing={3}>
          <OtpInput
            value={otp}
            onChange={(otp: any) => {
              setOtp(otp);
            }}
            numInputs={4}
            inputStyle={styles.input(theme)}
            inputType="number"
            containerStyle={{ justifyContent: "space-evenly" }}
            renderInput={(props) => <input {...props} />}
          />
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <Button variant="text" disableRipple onClick={handleResend}>
              Resend Passcode?
            </Button>
          </Stack>
          <LoadingButton
            fullWidth
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={onSubmit}
            disabled={otp.length < 4}
          >
            Submit
          </LoadingButton>
        </Stack>
      </Grid>
    </Grid>
  );
}

// ----------------------------Styles--------------------------------------------

const styles: any = {
  input: (theme: any) => ({
    width: "4rem",
    height: "3rem",
    fontSize: "1.5rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    background: theme.palette.background.default,
    outline: "none",
    color: theme.palette.mode === "light" ? "#000000" : "#FFFFF",
  }),
};
