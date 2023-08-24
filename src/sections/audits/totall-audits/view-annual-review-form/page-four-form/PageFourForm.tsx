import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import { usePageFourForm } from "./usePageFourForm";

const PageFourForm = () => {
  const { methods, handleSubmit, onSubmit } = usePageFourForm();
  const theme = useTheme()
  return (
    <Box sx={{ padding: "5px 30px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formFields.map((field, i) => (
            <Grid item md={field.gridLength} xs={12} key={i}>
              {field.component ? (
                <field.component size={"small"} fullWidth {...field.otherOptions}>
                  {field.otherOptions?.select
                    ? field.otherOptions?.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </field.component>
              ) : (
                field.tag || <Typography sx={{...styles.heading,color: theme.palette.primary.main } }>{field.heading}</Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default PageFourForm;

const styles = {
  heading: {
    fontSize: "16px",
    fontWeight: "600",
  },
};
