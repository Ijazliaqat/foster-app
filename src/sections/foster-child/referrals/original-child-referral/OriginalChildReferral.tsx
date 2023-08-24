import { Button, Grid } from "@mui/material";
import React from "react";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import Link from "next/link";
import { OriginalChildReferralData } from ".";
import useOrignalChildReferral from "./useOrignalChildReferral";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const ViewOriginalChild = (props: any) => {
  const {
    methods,
    onSubmit,
    handleSubmit,
    ...objVals
  } = useOrignalChildReferral();

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {OriginalChildReferralData?.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    {((objVals as any)?.[form.toShowKey] == form.toShow) && 
                      form?.component && (
                        <form.component
                          disabled={props.disabled}
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
                      )}
                  </Grid>
                </>
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Button type="submit" size="medium" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default ViewOriginalChild;
