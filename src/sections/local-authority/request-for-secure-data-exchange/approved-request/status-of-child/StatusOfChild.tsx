import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useStatusOfChild } from "./useStatusOfChild";

const StatusOfChild = ({ handleNextTab, handleBackTab }: any) => {
  const {
    methods,
    onSubmit,
    handleSubmit,
    reset,
    setValue,
    StatusOfChildData,
  } = useStatusOfChild();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ padding: "0.8rem" }}>
        <Grid container columnSpacing={4}>
          {StatusOfChildData?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.md} key={i}>
              {form.component && (
                <form.component size="small" fullWidth {...form.componentProps}>
                  {form?.para}
                  <Typography sx={style.heading}>{form?.heading}</Typography>

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

export default StatusOfChild;

const style = {
  heading: {
    fontSize: "16px !important",
    fontWeight: 600,
  },
};
