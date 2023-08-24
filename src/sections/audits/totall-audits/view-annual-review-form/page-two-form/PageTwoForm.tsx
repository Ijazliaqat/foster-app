import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { pageTwoFormData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { usePageTwoForm } from "./usePageTwoForm";

const PageTwoForm = () => {
  const { methods, handleSubmit, onSubmit } = usePageTwoForm();
  const theme = useTheme()
  return (
    <Box sx={{ padding: "5px 30px" }}>
      <Typography sx={{ ...styles.heading, fontWeight: "500", mb: "35px", color: theme.palette.primary.main }}>
        Primary Carer Last Medical Date
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {pageTwoFormData.formFields.map((field, i) => (
            <Grid item md={field.gridLength} xs={12} key={i}>
              <field.component size={"small"} fullWidth {...field.otherOptions} />
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default PageTwoForm;

const styles = {
  heading: {
    fontSize: "16px",
    fontWeight: "600",
  },
};
