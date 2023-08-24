import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import { formSchema, initialValues, addUrl } from ".";
import { LoadingButton } from "@mui/lab";
import Logo from "../../../../assets/svg/logo-icon.svg";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const AddWebsiteUrlModal = ({ open, handleClose, onSubmit, back }: any) => {
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit } = methods;

  return (
    <Dialog
      open={open}
      PaperProps={{ style: { width: "725px" } }}
      maxWidth={"sm"}
      onClose={() => {
        handleClose();
        back();
      }}
    >
      <DialogTitle
        sx={{ display: "flex", justifyContent: "space-between" }}
        id="alert-dialog-title"
      >
        <Typography sx={{ fontWeight: 600, fontSize: "14px", color: "#198754" }}>
          Add Website URL
        </Typography>
        <Image src={Logo} alt="logo-icon" />
      </DialogTitle>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            {addUrl.map((form: any, i: number) => (
              <Grid item xs={12} md={form.gridLength} key={i}>
                <Typography sx={{ ...styles.title, mt: "15px", mb: 0.3 }}>{form.title}</Typography>
                <form.component {...form.otherOptions} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "flex-start" }}>
          <LoadingButton type="submit" variant="contained">
            Submit
          </LoadingButton>
          <Button
            sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }}
            type="button"
            variant="contained"
            onClick={() => {
              handleClose();
              back();
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default AddWebsiteUrlModal;

const styles = {
  title: { fontWeight: 600, fontSize: "16px" },
};
