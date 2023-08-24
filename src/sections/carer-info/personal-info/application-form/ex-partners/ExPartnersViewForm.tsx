import { useState, useRef } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider } from "@root/components/hook-form";
import { FormSchema, defaultValues, formData } from ".";
import { useExPartnersViewForm } from "./useExPartnersViewForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

export default function ExPartnersViewForm(props: any) {
  const { changeView } = props;

  let {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    postLoading,
    editLoading,
  } = useExPartnersViewForm(props);

  if (postLoading || editLoading) {
    return <SkeletonFormdata />;
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ color: "#343A40", fontWeight: "600", fontSize: "16px" }}
          >
            If you have previously had a significant relationshipe ( Which has
            involved being married, having children and or co-habiting with a
            partner)- please give details as reference will be requested.
          </Typography>
        </Grid>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                size="small"
                disabled={props.disabled}
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
      </Grid>
      <Box sx={{ display: "flex", mb: "1rem", mt: "2rem" }}>
        {props.viewData == "view" ? (
          <LoadingButton
            onClick={() => {
              changeView(null);
            }}
            type="button"
            sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
            variant="contained"
          >
            back
          </LoadingButton>
        ) : (
          <>
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isDirty}
            >
              Submit
            </LoadingButton>
            <LoadingButton
              onClick={() => {
                changeView(null);
              }}
              type="button"
              sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
              variant="contained"
            >
              back
            </LoadingButton>
          </>
        )}
      </Box>
    </FormProvider>
  );
}
