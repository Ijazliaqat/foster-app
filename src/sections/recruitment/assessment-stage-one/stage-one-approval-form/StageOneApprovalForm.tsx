import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import useStateOneApprovalForm from "./useStateOneApprovalForm";
import { StageOneApprovalFormData } from ".";

const StageOneApprovalForm = (props: any) => {
  const { disabled, handleCloseForm } = props;

  const { methods, handleSubmit, onSubmit } = useStateOneApprovalForm();

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {StageOneApprovalFormData?.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    <form.component
                      disabled={disabled}
                      size="small"
                      {...form.otherOptions}
                    >
                      {form.otherOptions
                        ? form.options?.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  </Grid>
                </>
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Button size="large" type="submit" variant="contained">
              Submit
            </Button>
            <Button
              onClick={handleCloseForm}
              type="button"
              sx={{
                color: "#fff",
                ml: 1,
                backgroundColor: "#F6830F",
              }}
              size="large"
              variant="contained"
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default StageOneApprovalForm;
