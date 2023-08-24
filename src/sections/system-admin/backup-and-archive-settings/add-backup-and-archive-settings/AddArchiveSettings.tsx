import React from "react";
import Link from "next/link";
import { Box, Button, Card, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { BackupAndArchiveSettingForm } from ".";
import { useAddArchiveSettings } from "./useAddArchiveSettings";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

export default function AddArchiveSettings({ disabled }: any) {
  const { methods, handleSubmit, onSubmit } = useAddArchiveSettings();
  return (
    <Card sx={{ p: 2, boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.20)" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {BackupAndArchiveSettingForm?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              {item.component && (
                <item.component
                  fullWidth
                  {...item.componentProps}
                  disabled={disabled}
                  size={"small"}
                >
                  {item.componentProps.select
                    ? item.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                  {item?.heading}
                </item.component>
              )}
              {!item.component && (
                <Box mt={1.9}>
                  <RHFUploadFile
                    name={"updatePhoto"}
                    label={disabled ? "Uploaded File" : "Upload File"}
                    {...methods}
                    required
                    disabled={disabled}
                  />
                </Box>
              )}
            </Grid>
          ))}

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Link
              href={"/system-admin/backup-and-archive-settings"}
              style={{ textDecoration: "none" }}
            >
              <Button type="button" variant="contained" sx={{ mr: 2 }}>
                Back
              </Button>
            </Link>
            {!disabled && (
              <LoadingButton
                type="submit"
                variant="contained"

                // loading={isSubmitting}
              >
                Submit
              </LoadingButton>
            )}
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
}
