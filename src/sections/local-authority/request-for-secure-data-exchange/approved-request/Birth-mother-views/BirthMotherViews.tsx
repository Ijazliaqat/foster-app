import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useBirthMotherViews } from "./useBirthMotherViews";


const BirthMotherViews = ({ handleNextTab, handleBackTab }: any) => {
  const { methods, onSubmit, handleSubmit, reset, setValue, BirthMotherViews } =
    useBirthMotherViews();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ padding: "0.8rem" }}>
        <Grid container columnSpacing={4}>
          {BirthMotherViews?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.md} key={i}>
              {form.component && (
                <form.component size="small" fullWidth {...form.componentProps}>
                  <Typography sx={{fontSize:"16px", color:"red"}}>{form?.heading}</Typography>
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
                mr: 2,
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
                mr: 2,
              }}
              type="submit"
              variant="contained"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default BirthMotherViews;
