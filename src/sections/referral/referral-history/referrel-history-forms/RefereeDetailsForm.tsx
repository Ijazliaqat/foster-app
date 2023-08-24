import { useRouter } from "next/router";
// @mui
import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "@root/components/hook-form";
//
import { refereeDetailsFormData } from "../index";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useReferralHistory } from "../useReferralHistory";

const RefereeDetailsForm = ({ handleNextTab, disabled }: any) => {
  const { methods, router, theme } = useReferralHistory();

  let label: any;
  if (disabled) {
    label = "Uploaded Image";
  } else {
    label = "Upload Image";
  }

  return (
    <FormProvider methods={methods}>
      <Grid container columnSpacing={4} pb={3}>
        <Grid item xs={12} md={12}>
          <Typography
            pt="10px"
            pb="30px"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            Personal Details
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <RHFTextField
            fullWidth
            label="Child Code"
            size="small"
            name="childCode"
            {...methods}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RHFUploadFile
            name="updatePhoto"
            {...methods}
            required
            label={label}
            disabled={disabled}
          />
        </Grid>
      </Grid>
      <Grid container columnSpacing={4} rowSpacing={3}>
        {refereeDetailsFormData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 0.3,
                  color:
                    theme.palette.mode === "light"
                      ? "#343A40"
                      : theme.palette.mode,
                }}
              >
                {form.title}
              </Typography>
              {form.component ? (
                <form.component
                  disabled={disabled}
                  size="small"
                  {...form.otherOptions}
                >
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              ) : (
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                  }}
                >
                  {form.head}
                </Typography>
              )}
            </Grid>
          );
        })}

        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
              }}
              onClick={() => {
                router.push("/referral/referral-history");
              }}
              type="button"
              variant="contained"
            >
              Back
            </Button>
            <LoadingButton
              sx={{ marginLeft: "1rem" }}
              type="submit"
              variant="contained"
              onClick={handleNextTab}
            >
              Next
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default RefereeDetailsForm;
