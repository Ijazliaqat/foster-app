// @mui
import { Grid, Box, Button, Typography } from "@mui/material";
// components
import { FormProvider } from "@root/components/hook-form";
//
import { referralPersonalDetailsFormData } from "../index";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useReferralHistory } from "../useReferralHistory";

const ReferralPersonalDetailsForm = ({ disabled }: any) => {
  const { methods, router, theme } = useReferralHistory();
  let label: any;
  if (disabled === "view") {
    label = "Uploaded Image";
  } else {
    label = "Upload Image";
  }
  return (
    <FormProvider methods={methods}>
      <Grid container columnSpacing={4} rowSpacing={3} pt="20px">
        {referralPersonalDetailsFormData.map((form: any, i: any) => {
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
              ) : form?.otherOptions?.fileUpload ? (
                <RHFUploadFile label={label} {...methods} required />
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
          <Box sx={{ display: "flex" }}>
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
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default ReferralPersonalDetailsForm;
