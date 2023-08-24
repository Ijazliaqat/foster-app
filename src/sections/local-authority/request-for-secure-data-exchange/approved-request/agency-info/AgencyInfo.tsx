import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Grid } from "@mui/material";
import { useAgencyInfo } from "./useAgencyInfo";

const AgencyInfo = ({ handleNextTab, handleBackTab }: any) => {
  const { methods, onSubmit, handleSubmit, reset, setValue, agencyInfoData } =
    useAgencyInfo();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ padding: "0.8rem" }}>
        <Grid container columnSpacing={4}>
          {agencyInfoData?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.md} key={i}>
              {form.component && (
                <form.component size="small" fullWidth {...form.componentProps}>
                  {form?.heading}
                  {form.componentProps.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default AgencyInfo;
