// @mui
import { Grid, Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// components
import { FormProvider } from "@root/components/hook-form";
//
import { useSafeguardingTemplate } from "./useSafeguardingTemplate";
import { formData } from ".";

const SafeguardingTemplateForm = (props: any) => {
  const { methods, handleSubmit, onSubmit, isSubmitting, router } = useSafeguardingTemplate();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} paddingY={2}>
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
            {!props?.disabled && (
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
                  "/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details"
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
};
export default SafeguardingTemplateForm;
