import React from "react";
import { Button, Dialog, DialogTitle, Grid, } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LaPoliciesAgreementFormData } from ".";
import { useAddPoliciesAgreementForm } from "./useAddPoliciesAgreementForm";

const AddPoliciesAgreementForm = (props: any) => {
  const { isAddModalOpen, setIsAddModalOpen, actionType } = props;
  const { methods, handleSubmit, onSubmit } = useAddPoliciesAgreementForm();

  return (
    <Dialog
      open={isAddModalOpen}
      onClose={() => setIsAddModalOpen(false)}
      maxWidth="lg"
      PaperProps={{ sx: { maxHeight: 600 } }}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle sx={{ color: "#0E918C" }}>{actionType === 'add' ? 'Add New Policy' : 'View Policy'}</DialogTitle>
        <Grid container columnSpacing={4} sx={{ p: 3 }}>
          {LaPoliciesAgreementFormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component fullWidth
                {...item.componentProps}
                disabled={actionType === 'edit' && true}
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
            {actionType === 'add' &&
              <Button
                type="submit"
                variant="contained"
                sx={{ mr: 2 }}
              >
                Submit
              </Button>
            }


            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": { backgroundColor: "#F6830F" },
              }}
              onClick={() => setIsAddModalOpen(false)}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Dialog>
  );
};

export default AddPoliciesAgreementForm;

const styles = {
  title: {
    marginBottom: "5px",
    fontSize: "16px !important",
    fontWeight: "600",
  },
};
