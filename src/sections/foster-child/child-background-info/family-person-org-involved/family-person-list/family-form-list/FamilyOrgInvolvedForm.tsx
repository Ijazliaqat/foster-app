import React from "react";
import { Grid } from "@mui/material";
import { FamilyOrgInvolvedFormData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useFamilyOrgInvolvedForm } from "./useFamilyOrgInvolvedForm";
import LoadingButton from "@mui/lab/LoadingButton";

export default function FamilyOrgInvolvedForm(props: any) {
  const { router, methods, handleSubmit, disabled, isSubmitting, onSubmit } =
    useFamilyOrgInvolvedForm(props);
  const { fosterChildId } = router.query;

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {FamilyOrgInvolvedFormData?.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    <form.component
                      size="small"
                      {...form.otherOptions}
                      disabled={disabled}
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
            {!disabled && (
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Submit
              </LoadingButton>
            )}
            <LoadingButton
              onClick={() =>
                router.push({
                  pathname:
                    "/foster-child/child-background-info/family-person-org-involved",
                  query: { fosterChildId: fosterChildId },
                })
              }
              type="button"
              sx={{ ml: 1, backgroundColor: "#F6830F" }}
              variant="contained"
            >
              Back
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
}
