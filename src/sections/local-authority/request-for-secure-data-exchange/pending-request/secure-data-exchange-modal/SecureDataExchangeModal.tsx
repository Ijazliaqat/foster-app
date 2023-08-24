import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema, initialValues, SecureDataExchange } from ".";

const SecureDataExchangeModal = (props: any) => {
  const {
    open,
    handleClose,
    disabled,
    onSubmit,
    isHideSubmitButton = "true",
  } = props;

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
      <Dialog open={open} onClose={handleClose} maxWidth={"md"}>
        <DialogContent>
          <Typography
            component={"p"}
            sx={{ fontWeight: 600, fontSize: "16px", mb: "20px" }}
          >
            Request For Secure Data Exchange
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {SecureDataExchange.map((form: any, i: number) => (
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
            <Grid item xs={12} sx={{ mt: "40px" }}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                {isHideSubmitButton && (
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    disabled={disabled}
                  >
                    Submit
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

export default SecureDataExchangeModal;

const styles = {
  title: { fontWeight: 600, fontSize: "16px" },
};
