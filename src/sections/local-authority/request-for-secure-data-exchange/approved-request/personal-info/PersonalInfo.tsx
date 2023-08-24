import React, { useEffect } from "react";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { usePersonalInfo } from "./usePersonalInfo";
import { useChildInfoTabs } from "../child-info-tabs/useChildInfoTabs";

const PersonalInfo = (props: any) => {
  const { methods, onSubmit, handleSubmit, reset, personalInfo, theme } =
    usePersonalInfo();

  // const { handleNextTab } = useChildInfoTabs();

  const { handleNextTab } = props;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ padding: "0.8rem" }}>
        <Box
          sx={{
            paddingBottom: "2rem",
            fontWeight: 600,
            fontSize: "18px",
            color: theme.palette.primary.main,
          }}
        >
          Personal Info
        </Box>
        <Grid container columnSpacing={4}>
          {personalInfo?.map((form: any, i: any) => (
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
              {form?.uploadPhoto && (
                <Box sx={{ mb: 4 }}>
                  <RHFUploadFile name={"updatePhoto"} {...methods} required />
                </Box>
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

            <Button onClick={handleNextTab} type="button" variant="contained">
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default PersonalInfo;
