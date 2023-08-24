import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider } from "@root/components/hook-form";
import { formData, defaultValues } from ".";
import { useCarerAddressHistoryForms } from "./useCarerAddressHistoryForms";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

export default function CarerAddressHistoryForm(props: any) {
  const { formType, historyData } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
    isLoadingEdit,
    isLoadingPost,
  } = useCarerAddressHistoryForms(formType, historyData);

  if (isLoadingEdit || isLoadingPost) {
    return <SkeletonFormdata />;
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Carer Address History
          </Typography>
        </Grid>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={props.disabled}
                size="small"
                {...form.otherOptions}
              >
                {form.otherOptions.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {" "}
                        {option.label}{" "}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            {formType == "view" ? (
              ""
            ) : (
              <LoadingButton
                sx={{ marginRight: "1rem" }}
                type="submit"
                variant="contained"
                loading={isSubmitting}
                disabled={!isDirty}
              >
                Submit
              </LoadingButton>
            )}

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
      </Grid>
    </FormProvider>
  );
}
