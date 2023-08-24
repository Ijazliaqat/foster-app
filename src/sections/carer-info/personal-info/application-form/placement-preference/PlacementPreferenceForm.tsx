import { Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { formData } from ".";
import FormSubmitButtons from "@root/components/FormSubmitButtons";
import { usePlacementPreferenceForm } from "./usePlacementPreferenceForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

export default function PlacementPreferenceForm(props: any) {
  const { disabled, data, applicationFormid } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    isLoading,
  } = usePlacementPreferenceForm(data, applicationFormid);

  if (isLoading) {
    return <SkeletonFormdata />;
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={disabled}
                size="small"
                {...form.otherOptions}
              >
                {form.otherOptions.select
                  ? form.options.map((option: any, index: any) => (
                      <option key={index} value={option.value}>
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
          {disabled ? (
            ""
          ) : (
            <FormSubmitButtons isSubmitting={isSubmitting} isDirty={isDirty} />
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
}
