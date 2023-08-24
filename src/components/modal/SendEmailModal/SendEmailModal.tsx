import { Dialog, DialogContent, DialogActions, Button, TextField, Box } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { FormSchema, defaultValues, formData } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

const SendEmailModal = (props: any) => {
  const { open, handleClose, onSubmit } = props;

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {formData.map((form: any, i: any) => {
            return <form.component key={i} disabled={props.disabled} size="small" {...form.otherOptions}></form.component>;
          })}
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Button
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
              }}
              onClick={handleClose}
              type="button"
              variant="contained"
            >
              Cancel
            </Button>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              Send
            </LoadingButton>
          </Box>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
export default SendEmailModal;