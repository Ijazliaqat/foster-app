import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider } from "@root/components/hook-form";
import { useAddAllegationForm } from "./useAddAllegationForm";
import { addAllegationFormData } from ".";

const AddAllegationForm = ({ disabled, action }: any) => {
  const { router, theme, handleSubmit, onSubmit, methods, isSubmitting } = useAddAllegationForm()

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} pt="30px" px="15px">
        {addAllegationFormData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography sx={styles.label(theme)}>{form.title}</Typography>
              {form.component ? (
                <form.component disabled={disabled} size="small" {...form.otherOptions} >
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                    : null}
                </form.component>
              ) : (
                <Typography sx={styles.title(theme)}>{form.head}</Typography>
              )}
            </Grid>
          );
        })}

        <Grid item xs={12}>
          <Box sx={{ display: "flex" }}>
            {action !== 'view' &&
              <LoadingButton sx={{ marginRight: "1rem" }} type="submit" variant="contained" loading={isSubmitting}>
                Submit
              </LoadingButton>
            }
            <Button sx={styles.submitButton}
              onClick={() => {
                router.push("/safeguarding/child-protection/allegation-management");
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
export default AddAllegationForm;

const styles = {
  label: (theme: any) => ({ fontWeight: 600, mb: 0.2,  color: theme.palette.primary.main, }),
  title: (theme: any) => ({ fontSize: "16px", fontWeight: 700, margin: 0, color: theme.palette.primary.main }),
  submitButton: { backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" }, }
}
