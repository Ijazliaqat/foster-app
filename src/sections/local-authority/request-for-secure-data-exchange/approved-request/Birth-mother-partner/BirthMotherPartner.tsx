import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Grid } from "@mui/material";
import { useBirthMotherPartner } from "./useBirthMotherPartner";

const BirthMotherPartner = ({ handleNextTab, handleBackTab }: any) => {
  const {
    methods,
    onSubmit,
    handleSubmit,
    reset,
    setValue,
    BirthMotherPrtner,
  } = useBirthMotherPartner();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ padding: "0.8rem" }}>
        <Grid container columnSpacing={4}>
          {BirthMotherPrtner?.map((form: any, i: any) => (
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
          <Button
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
                m: 1,
              }}
              type="submit"
              variant="contained"
              onClick={handleBackTab}
            >
              Back
            </Button>
            <Button
              sx={{
                backgroundColor: "#23183D",
                "&:hover": {
                  backgroundColor: "#23183D",
                },
                m: 1,
              }}
              type="submit"
              variant="contained"
            >
              Save
            </Button>

            <Button sx={{m: 1}} type="button" variant="contained" onClick={handleNextTab}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default BirthMotherPartner;
