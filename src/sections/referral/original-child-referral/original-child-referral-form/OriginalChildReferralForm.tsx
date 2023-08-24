// @mui
import { Grid, Box, Button, Typography, Card } from "@mui/material";
// components
import { originalChildFormData } from "./index";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { useOriginalChildReferralForm } from "./useOriginalChildReferralForm";

// ====================================================================================================================

const OriginalChildReferralForm = (props: any) => {
  const { theme, router, handleSubmit, onSubmit, methods } =
    useOriginalChildReferralForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ px: 1, py: 2 }}>
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
              label="CHC-2"
              size="small"
              fullWidth
              name="childCode"
              {...methods}
              disabled={props.disabled}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFUploadFile
              name="Uploaded Image"
              {...methods}
              required
              disabled={props.disabled}
            />
          </Grid>
        </Grid>
        <Grid container columnSpacing={4} rowSpacing={3}>
          {originalChildFormData.map((form: any, i: any) => {
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
                    disabled={props.disabled}
                    fullWidth
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
                  router.push("/referral/original-child-referral");
                }}
                type="button"
                variant="contained"
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </FormProvider>
  );
};
export default OriginalChildReferralForm;
