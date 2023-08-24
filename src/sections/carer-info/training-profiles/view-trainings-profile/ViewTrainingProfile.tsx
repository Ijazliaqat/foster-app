import React from "react";
import { Grid } from "@mui/material";
import { ViewTrainingProfileData } from ".";
import { FormProvider } from "@root/components/hook-form";
import useViewTraingsProfile from "./useViewTraingProfile";

const ViewTraingsProfile = (props: any) => {
  const { defaultValues, initialValueProps = defaultValues } = props;

  const { methods, handleSubmit, onSubmit } =
    useViewTraingsProfile(initialValueProps);

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {ViewTrainingProfileData?.map((form: any) => {
            return (
              <Grid item xs={12} md={form.gridLength} key={form.id}>
                <>
                  <Grid>
                    <form.component
                      disabled={true}
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
        </Grid>
      </FormProvider>
    </>
  );
};

export default ViewTraingsProfile;
