import { Box, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useStatutoryMedicalTypeInfo } from "./useStatutoryMedicalTypeInfo";

const StatutoryMedicalTypeInfo = () => {
  const {
    ehcpInfoFormData,
    methods,
    handleSubmit,
    submitStatutoryMedicalTypeDataForm,
    postStatutoryMedicalTypeDataStatus,
    patchStatutoryMedicalTypeDataStatus,
    router,
    isLoading
  } = useStatutoryMedicalTypeInfo();
  if (isLoading)
    return <SkeletonFormdata />;
  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(submitStatutoryMedicalTypeDataForm)}
    >
      <Grid container spacing={5}>
        {ehcpInfoFormData.map((form: any, index: number) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
              <form.component {...form.componentProps} size="small">
                {form.componentProps.select
                  ? form.componentProps.options.map((option: any) => (
                      <option key={option.label} value={option.value}>
                        {option.label}
                      </option>
                    ))
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
              patchStatutoryMedicalTypeDataStatus?.isLoading ||
              postStatutoryMedicalTypeDataStatus?.isLoading
            }
          >
            Submit
          </LoadingButton>
          <LoadingButton
            type="button"
            sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
            onClick={() =>
              router.push({
                pathname: `/foster-child/health-medical-history/statutory-medical-list`,
                query: {
                  ...(!!router?.query?.fosterChildId && {
                    fosterChildId: router?.query?.fosterChildId,
                  }),
                },
              })
            }
            variant="contained"
            disabled={
              patchStatutoryMedicalTypeDataStatus?.isLoading ||
              postStatutoryMedicalTypeDataStatus?.isLoading
            }
          >
            back
          </LoadingButton>
        </Box>
      )}
    </FormProvider>
  );
};

export default StatutoryMedicalTypeInfo;
