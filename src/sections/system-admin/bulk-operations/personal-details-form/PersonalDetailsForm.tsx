import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import { usePersonalDetailsForm } from "./usePersonalDetailsForm";

const PersonalDetailsForm = ({ action }: any) => {
  const { methods, handleSubmit, router, onSubmit } = usePersonalDetailsForm();

  const disabled = action === "view" ? true : false;

  return (
    <Card sx={{ py: 3, px: 2 }}>
      <Typography sx={styles.formHeading}>Personal Details</Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formFields.map((field: any, i: number) => (
            <Grid item md={field.gridLength} xs={12} key={i}>
              <Typography sx={styles.heading}>{field.title}</Typography>

              <field.component disabled={disabled} size={"small"} fullWidth {...field.otherOptions}>
                {field.otherOptions?.select
                  ? field.otherOptions?.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </field.component>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {action !== "view" && (
              <Button type="submit" variant="contained">
                Submit
              </Button>
            )}

            <Button
              sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }}
              type="button"
              variant="contained"
              onClick={() => router.push("/system-admin/bulk-operations")}
            >
              Back
            </Button>
          </Box>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default PersonalDetailsForm;

const styles = {
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
  formHeading: {
    color: "#0E918C",
    fontSize: "16px",
    fontWeight: "600",
    pb: 1,
  },
};
