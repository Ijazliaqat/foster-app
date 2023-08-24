import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";

const AddFormFieldModal = ({ open, onClose, data, schema }: any) => {
  const methods: any = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"md"}>
      <DialogTitle sx={{ mb: 2 }}>{data.head}</DialogTitle>
      <DialogContent>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {data.formFields.map((field: any) =>
              field.subFields.map((sub: any, i: number) => (
                <Grid item md={6} xs={12} key={i}>
                  {field.title && (
                    <Typography sx={(theme)=>styles.title(theme)}>{field.title}</Typography>
                  )}
                  {sub.title && (
                    <Typography sx={(theme)=>styles.title(theme)}>{sub.title}</Typography>
                  )}
                  <sub.component size={"small"} {...sub.otherOptions}>
                    {sub.otherOptions.select
                      ? sub.otherOptions.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </sub.component>
                </Grid>
              ))
            )}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2, display: "flex", gap: "10px" }}>
            <LoadingButton type="submit" variant="contained">
              Submit
            </LoadingButton>
            <Button
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": { backgroundColor: "#F6830F" },
              }}
              type="button"
              variant="contained"
              onClick={onClose}
            >
              Cancel
            </Button>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AddFormFieldModal;

const styles = {
  title: (theme:any)=> ({
    fontWeight: 500,
    fontSize: "16px",
    color: theme.palette.primary.main
  })
};
