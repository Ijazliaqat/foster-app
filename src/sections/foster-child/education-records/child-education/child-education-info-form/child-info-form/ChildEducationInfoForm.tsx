// @mui
import { Grid, Typography,} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider } from "@root/components/hook-form";
import { useChildEducationForm } from "./useChildEducationForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const ChildEducationInfoForm = () => {
  const {
    methods,
    isSubmitting,
    theme,
    handleSubmit,
    onSubmitHandler,
    childEducationInfoFormData,
    isLoading,
    router,
    postEducationInfoDataStatus,
    patchEducationInfoDataStatus,
  } = useChildEducationForm();

  if (isLoading) return <SkeletonFormdata />;
  
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container columnSpacing={2}>
        {childEducationInfoFormData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography
                sx={{
                  mt: 2,
                  color:
                    theme.palette.mode === "light"
                      ? "#343A40"
                      : theme.palette.mode,
                }}
              >
                {form.title}
              </Typography>
              <form.component size="small" {...form.otherOptions} fullWidth>
                {form?.otherOptions?.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : form?.heading}
              </form.component>
            </Grid>
          );
        })}

        <Grid item xs={12} mt={3}>
          {router.query?.action !== "view" && (
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ mr: 2 }}
                loading={
                  postEducationInfoDataStatus.isLoading ||
                  patchEducationInfoDataStatus.isLoading
                }
              >
                Submit
              </LoadingButton>
              <LoadingButton
                type="button"
                variant="contained"
                sx={{
                  marginRight: "1rem",
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.dark },
                }}
                onClick={() =>
                  router.push({
                    pathname: `/foster-child/education-records/child-education`,
                    query: {
                      ...(!!router?.query?.fosterChildId && {
                        fosterChildId: router?.query?.fosterChildId,
                      }),
                    },
                  })
                }
              >
                Back
              </LoadingButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default ChildEducationInfoForm;
