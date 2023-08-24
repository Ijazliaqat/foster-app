import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useTransferPlacementForm } from "./useTransferPlacementForm";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const TransferPlacementForm = ({ id }: any) => {
  const { methods, handleSubmit, router, onSubmit } = useTransferPlacementForm();

  return (
    <Card sx={{ py: 3, px: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formFields.map((field: any, i: number) => (
            <Grid item md={field.gridLength} xs={12} key={i}>
              <Typography sx={styles.heading}>{field.title}</Typography>
              {field.component ? (
                <field.component size={"small"} fullWidth {...field.otherOptions}>
                  {field.otherOptions?.select
                    ? field.otherOptions?.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </field.component>
              ) : (
                <Typography sx={field?.sx ? field?.sx : styles.heading}>{field.heading}</Typography>
              )}
              {field.requireFileUpload && (
                <RHFUploadFile name={field.otherOptions.name} {...methods} />
              )}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Button
              sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }}
              type="button"
              variant="contained"
              onClick={() => router.push("/placement/transfer")}
            >
              Back
            </Button>
          </Box>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default TransferPlacementForm;

const styles = {
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
