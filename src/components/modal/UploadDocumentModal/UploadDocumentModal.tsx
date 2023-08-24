import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema, initialValues, uploadDocument } from ".";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { LoadingButton } from "@mui/lab";

interface IProps {
  open: boolean;
  handleClose: () => void;
  disabled?: any;
  onSubmit?: any;
  isHideSubmitButton?: boolean;
  label?: any;
}

const UploadDocumentModal = (props: IProps) => {
  const { open, handleClose, disabled, onSubmit, isHideSubmitButton, label } =
    props;

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth={"sm"}>
        <DialogContent>
          <Typography
            component={"p"}
            sx={{ fontWeight: 600, fontSize: "16px", mb: "20px" }}
          >
            Person Uploaded: Name Name
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {uploadDocument.map((form: any, i: number) => (
                <Grid item xs={12} md={form.gridLength} key={i}>
                  <Typography sx={{ ...styles.title, mt: "15px", mb: 0.3 }}>
                    {form.title}
                  </Typography>
                  <form.component disabled={disabled} {...form.otherOptions}>
                    {form.otherOptions.select
                      ? form.otherOptions.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: "39px" }}>
              <Typography sx={styles.title}>Choose Files</Typography>
              <RHFUploadFile
                name="updatePhoto"
                disabled={disabled}
                label={label ? label : "Upload Photo"}
                {...methods}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: "40px" }}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                {isHideSubmitButton && (
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    disabled={disabled}
                  >
                    Upload
                  </LoadingButton>
                )}
                <Button
                  sx={{
                    backgroundColor: "#F6830F",
                    "&:hover": { backgroundColor: "#F6830F" },
                  }}
                  type="button"
                  variant="contained"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadDocumentModal;

const styles = {
  title: { fontWeight: 600, fontSize: "16px" },
};
