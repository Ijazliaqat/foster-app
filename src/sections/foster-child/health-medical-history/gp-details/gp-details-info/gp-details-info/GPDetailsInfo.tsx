import { Box, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useGPDetailsInfo } from "./useGPDetailsInfo";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const GPDetailsInfo = () => {
  const {
    gpDetailsInfoFormData,
    methods,
    handleSubmit,
    submitGpDetailsInfoForm,
    isLoading,
    router,
    postGpDetailsInfoDataStatus,
    patchGpDetailsInfoDataStatus,
    theme,
  } = useGPDetailsInfo();

  if (isLoading) return <SkeletonFormdata />;
  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(submitGpDetailsInfoForm)}
    >
      <Grid container spacing={5}>
        {gpDetailsInfoFormData.map((form: any, index: number) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
              <form.component {...form.componentProps} size="small">
                {form.componentProps.select
                  ? form.componentProps.options.map((option: any) => (
                      <option key={option.id} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : form?.heading
                  ? form?.heading
                  : null}
              </form.component>
            </Grid>
          );
        })}
      </Grid>
      {router.query?.action !== "view" && (
        <Box sx={{ display: "flex", mb: "1rem", mt: "1rem" }}>
          <LoadingButton
            sx={{ marginRight: "1rem" }}
            type="submit"
            variant="contained"
            disabled={
              patchGpDetailsInfoDataStatus?.isLoading ||
              postGpDetailsInfoDataStatus?.isLoading
            }
          >
            Submit
          </LoadingButton>
          <LoadingButton
            type="button"
            sx={{
              marginRight: "1rem",
              bgcolor: theme.palette.orange.main,
              "&:hover": { bgcolor: theme.palette.orange.dark },
            }}
            onClick={() =>
              router.push({
                pathname: `/foster-child/health-medical-history/gp-details`,
                query: {
                  ...(!!router?.query?.fosterChildId && {
                    fosterChildId: router?.query?.fosterChildId,
                  }),
                },
              })
            }
            variant="contained"
            disabled={
              patchGpDetailsInfoDataStatus?.isLoading ||
              postGpDetailsInfoDataStatus?.isLoading
            }
          >
            back
          </LoadingButton>
        </Box>
      )}
    </FormProvider>
  );
};

export default GPDetailsInfo;
