import React, { useState } from "react";
import Link from "next/link";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Card, Grid } from "@mui/material";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useIncidentManagementForm } from "./useIncidentManagementForm";
import { IncidentManagementFormData } from ".";

const IncidentManagementForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { HandlerClear, methods, onSubmit, handleSubmit } =
    useIncidentManagementForm();
  let label: any;
  if (action === "view") {
    label = "Uploaded Image";
  } else {
    label = "Upload Image";
  }

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {IncidentManagementFormData?.map((form: any, i: any) => (
            <>
              <Grid item xs={12} md={form?.gridLength} key={i}>
                {form.component && (
                  <form.component
                    {...form.componentProps}
                    disabled={disabled} fullWidth
                    size={"small"}
                  >
                    {form?.heading}
                  </form.component>
                )}
                {form?.uploadPhoto && (
                  <RHFUploadFile
                    name={"updatePhoto"}
                    label={label}
                    {...methods}
                    required
                  />
                )}
                {(form.componentProps?.name == "signDateAuther" ||
                  form.componentProps?.name == "signDateApprover") && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                      marginTop: "10px",
                    }}
                  >
                    {!disabled && (
                      <Button
                        sx={{ justifyContent: "end" }}
                        variant="contained"
                        size="medium"
                        onClick={() => HandlerClear(form.componentProps.name)}
                      >
                        Clear
                      </Button>
                    )}
                  </Box>
                )}
              </Grid>
            </>
          ))}

          <Grid item xs={12}>
            {!disabled && (
              <Button type="submit" variant="contained" sx={{ mr: 2 }}>
                Submit
              </Button>
            )}
            <Link
              href={"/safeguarding/child-protection/incident-management"}
              style={{ textDecoration: "none" }}
            >
              {!disabled ? (
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    backgroundColor: "#F6830F",
                    "&:hover": {
                      backgroundColor: "#F6830F",
                    },
                  }}
                >
                  Cancel
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    backgroundColor: "#F6830F",
                    "&:hover": {
                      backgroundColor: "#F6830F",
                    },
                  }}
                >
                  Back
                </Button>
              )}
            </Link>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default IncidentManagementForm;
