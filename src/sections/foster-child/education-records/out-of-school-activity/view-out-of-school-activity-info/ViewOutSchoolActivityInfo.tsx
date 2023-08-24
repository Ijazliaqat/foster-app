import { Grid } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { ViewOutSchoolActivityInfoData } from ".";
import useViewChildExclusionInfo from "./useViewOutSchoolActivityInfo";

const ViewOutSchoolActivityInfo = (props: any) => {
  const {
    disabled,
    formState,
    defaultValues,
    initialValueProps = defaultValues,
  } = props;

  const { methods, handleSubmit, onSubmit } =
    useViewChildExclusionInfo(initialValueProps);

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {ViewOutSchoolActivityInfoData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
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

export default ViewOutSchoolActivityInfo;
