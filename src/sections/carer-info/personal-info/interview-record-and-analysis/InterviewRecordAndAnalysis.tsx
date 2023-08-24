import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormSchema, defaultValues, formData1, formData2 } from ".";
import { fTimestamp } from "@root/utils/formatTime";
import { FormProvider } from "@root/components/hook-form";
import { useRouter } from "next/router";
import download from "@root/assets/img/download.png";
import { useInterviewRecordAndAnalysis } from "./useInterviewRecordAndAnalysis";
import IsFetching from "@root/components/loaders/IsFetching";

export default function InterviewRecordAndAnalysis({
  disabled,
  data,
  role,
}: any) {
  let router: any = useRouter();

  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    isLoading,
  } = useInterviewRecordAndAnalysis(disabled, data, role);
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <IsFetching isFetching={isLoading} />
      <Grid container spacing={4}>
        {formData1.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={disabled}
                size="small"
                {...form.otherOptions}
              >
                {form.otherOptions?.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ color: "#898989" }}>
            Agreement Regarding Accuracy of Record Please tick one of the
            following boxes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: "#898989" }}>
            I was Interviewed on the date above and:
          </Typography>
        </Grid>
        {formData2.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={disabled}
                size="small"
                // getSign={data && data[`${form.otherOptions.name}`]}
                {...form.otherOptions}
              >
                {form.otherOptions?.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        {disabled ? (
          ""
        ) : (
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <LoadingButton
                sx={{ marginRight: "1rem" }}
                type="submit"
                variant="contained"
                loading={isSubmitting}
                disabled={!isDirty}
              >
                Submit
              </LoadingButton>
              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                onClick={() => {
                  router.back();
                }}
                type="button"
                variant="contained"
              >
                Back
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
}
