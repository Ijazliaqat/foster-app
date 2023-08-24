import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { TrainingProfileData } from "./";
import useEditTraingingProfile from "./useEditTrainingProfile";
const EditTrainingProfile = (props: any) => {
  const {
    disabled,
    onSubmitHandler,
    trainingProfileId,
    defaultValues,
    initialValueProps = defaultValues,
  } = props;
  const { methods, handleSubmit, onSubmit } = useEditTraingingProfile({
    initialValueProps,
    onSubmitHandler,
    trainingProfileId,
  });

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {TrainingProfileData?.map((form: any) => {
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
                            <option key={option?.value} value={option?.value}>
                              {option?.label}
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
            <Link href={"/recruitment"}>
              <Button
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
            </Link>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default EditTrainingProfile;
