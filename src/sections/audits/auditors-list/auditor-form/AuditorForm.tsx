import React from "react";
import { LoadingButton } from "@mui/lab";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Dialog, DialogContent, Tooltip, useTheme } from "@mui/material";

import { setupFormData } from ".";
import { useAuditorForm } from "./useAuditorForm";
import { FormProvider } from "@root/components/hook-form";

const AuditorForm = ({ open, onClose, disabled }: any) => {
  const { methods, onSubmit, handleSubmit } = useAuditorForm();
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} style={{ width: "860px", margin: "auto" }}>
      <DialogContent>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            {setupFormData.map((form: any, i: number) => (
              <Grid item xs={12} md={form.gridLength} key={i}>
                {form.otherOptions && (
                  <form.component size="small" disabled={disabled} {...form.otherOptions}>
                    {form.otherOptions.select &&
                      form.otherOptions.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                  </form.component>
                )}
                {form.divider && <Divider />}
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              {!disabled && (
                <LoadingButton type="submit" variant="contained">
                  Submit
                </LoadingButton>
              )}
              <Button
                sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }}
                type="button"
                variant="contained"
                onClick={onClose}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AuditorForm;
