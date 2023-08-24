import { Grid } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";
import { PresentFormData } from ".";

export const PresenrForm = (props: any) => {
  return (
    <>
      {/* <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}> */}
      <Grid container spacing={3}>
        {PresentFormData?.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form?.id}>
              <>
                <Grid>
                  <form.component
                    size="small"
                    {...form.componentProps}
                    //   disabled={disabled}
                  >
                    {form.componentProps
                      ? form.options?.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                    {form?.heading}
                  </form.component>
                </Grid>
              </>
            </Grid>
          );
        })}
      </Grid>
      {/* </FormProvider> */}
    </>
  );
};
