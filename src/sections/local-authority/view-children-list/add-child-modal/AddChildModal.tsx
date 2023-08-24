import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { AddChildForm } from ".";
import { useAddChildModal } from "./useAddChildModal";

const AddChildModal = (props: any) => {
  const { open, handleClose } = props;
  const { methods, handleSubmit, onSubmit } = useAddChildModal(props);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">Add Child</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container columnSpacing={4}>
              {AddChildForm?.map((item: any) => (
                <Grid item xs={12} md={item?.md} key={item?.id}>
                  <item.component fullWidth
                    {...item.componentProps}
                    // disabled={disabled}
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
                </Grid>
              ))}

              <Grid item xs={12}>
                {/* {!disabled && ( */}
                <Button
                  type="button"
                  sx={{ backgroundColor: "#F6830F" }}
                  variant="contained"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  sx={{ ml: 2 }}
                  // loading={isSubmitting}
                >
                  Submit
                </LoadingButton>

                {/* )} */}
              </Grid>
            </Grid>
          </FormProvider>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default AddChildModal;
