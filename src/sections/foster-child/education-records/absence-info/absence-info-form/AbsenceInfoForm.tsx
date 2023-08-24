import { Box, Grid } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { useAbsenceInfoForm } from "./useAbsenceInfoForm";
import { LoadingButton } from "@mui/lab";
import { absenceInfoFormData } from ".";

export default function AbsenceInfoForm(props: any) {
  //AbsenceInfo Custom Hook
  const { router, onSubmit, disabled, handleSubmit, methods, isSubmitting } =
    useAbsenceInfoForm(props);
  const { fosterChildId } = router.query;

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2} columnSpacing={5} alignItems="center">
          {absenceInfoFormData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <Box sx={{ px: 0.9, py: 1 }}>
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
                </Box>
              </Grid>
            );
          })}

          <Grid
            xs={12}
            sx={{
              mt: 2,
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
            item
          >
            {!disabled && (
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                variant="contained"
                // onClick={() =>
                //   router.push({
                //     pathname: "/foster-child/education-records/absence-info",
                //     query: { fosterChildId: fosterChildId },
                //   })
                // }
              >
                Submit
              </LoadingButton>
            )}
            <LoadingButton
              onClick={() =>
                router.push({
                  pathname: "/foster-child/education-records/absence-info",
                  query: { fosterChildId: fosterChildId },
                })
              }
              sx={{ color: "#fff", ml: 1, backgroundColor: "#F6830F" }}
              variant="contained"
              type="button"
            >
              Back
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
}
