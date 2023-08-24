// @mui
import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
//
import { formData } from ".";
import { useLeisureActivitiesForm } from "./useLeisureActivitiesForm";
import IsFetching from "@root/components/loaders/IsFetching";

export default function LeisureActivitiesForm(props: any) {
  const { action, LeisureAcitivityData, id, setLeisureActivityId } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
    isFetching,
  } = useLeisureActivitiesForm(
    action,
    LeisureAcitivityData,
    id,
    setLeisureActivityId
  );
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <IsFetching isFetching={isFetching} />
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={action == "view" ? true : false}
                size="small"
                {...form.otherOptions}
              >
                {form?.otherOptions?.select
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
            {action == "view" ? (
              ""
            ) : (
              <LoadingButton
                sx={{ marginRight: "1rem" }}
                type="submit"
                variant="contained"
                loading={isSubmitting}
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
                router.push(
                  `/foster-child/education-records/leisure-activities-hobby?fosterChildId=${router?.query?.fosterChildId}`
                );
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
