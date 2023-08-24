import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import { usePageThreeForm } from "./usePageThreeForm";

const PageThreeForm = () => {
  const { methods, handleSubmit, onSubmit } = usePageThreeForm();
  const theme = useTheme()

  return (
    <Box sx={{ padding: "5px 30px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formFields.map((field, i) => (
            <Grid item md={field.gridLength} xs={12} key={i}>
              {field.component ? (
                <field.component
                  size={"small"}
                  fullWidth
                  {...field.otherOptions}
                />
              ) : (
                <Typography sx={{ ...styles.heading, fontSize: "18px", color: theme.palette.primary.main}}>
                  {field.heading}
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default PageThreeForm;

const styles = {
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
