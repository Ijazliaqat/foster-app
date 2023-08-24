import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider } from "@root/components/hook-form";
import { useAddLaEmployee } from "./useAddLaEmployee";
import { addLaEmployeeFormData } from ".";

const AddLaEmployee = () => {
  const { router, theme, handleSubmit, onSubmit, methods, isSubmitting } =
    useAddLaEmployee();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} py="30px">
        {addLaEmployeeFormData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography sx={styles.label(theme)}>{form.title}</Typography>
              <form.component
                disabled={
                  router.query.action === "view-local-authority" && true
                }
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
            </Grid>
          );
        })}

        <Grid item xs={12}>
          <Box sx={{ display: "flex" }}>
            <Button sx={styles.submitButton} type="button" variant="contained">
              Back
            </Button>
            {router.query.action !== "view-local-authority" && (
              <LoadingButton
                sx={{ ml: "1rem" }}
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Next
              </LoadingButton>
            )}
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default AddLaEmployee;

const styles = {
  label: (theme: any) => ({
    fontWeight: 600,
    mb: 0.2,
    color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode,
  }),
  title: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    margin: 0,
    color: theme.palette.primary.main,
  }),
  phoneImg: () => ({
    backgroundColor: "#F6830F",
    borderRadius: "10px",
    boxShadow: "2px 3px 5px rgba(14, 145, 140, 0.3)",
    p: 0.5,
  }),
  submitButton: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
};
