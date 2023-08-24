
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import { useTheme } from '@emotion/react';


const FormSchema = Yup.object().shape({
    title: Yup.string().required("Field is required"),
});
const TitleInputModal = (props: any) => {
    const { open, handleClose, editRowId, addRowHandler } = props;
  const theme: any = useTheme();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
  });

  const { handleSubmit, setValue, reset } = methods;

  React.useEffect(() => {
    if (open === "Add") {
      setValue('title', ''); // Reset form value when opening the modal to add a group
    } else {
      setValue('title', editRowId?.title); // Set form value when editing a group
    }
  }, [open,setValue, editRowId?.title]);

  const onSubmit = (data: any) => {
    addRowHandler(data, editRowId); // Pass editRowId object instead of editRowId.index
    handleClose();
    reset(); // Reset the form
  };

  
  const cancelTitleModal = () => {
    handleClose();
    reset(); // Reset the form
  }

    return (

        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth="sm"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={styles.title(theme)}>{open==="Add" ? "Accordion Title:": "Edit Accordion Title:"}</DialogTitle>
            <DialogContent sx={styles.dialogContent}>
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
                    <Typography sx={styles.heading}>Title:</Typography>
                    <RHFTextField
                        name="title"
                        size="small"
                    />
                    <Button type="submit" sx={styles.buttonShare(theme)}>Submit</Button>
                    {/* <Button  sx={styles.buttonShare(theme)}>Cancel</Button> */}
                </FormProvider>

            </DialogContent>
        </Dialog>
    )
}

export default TitleInputModal
const styles = {
    title: (theme: any) => ({ color: theme.palette.primary.main, fontSize: "16px !important", fontWeight: "600" }),
    heading: { fontSize: "16px !important", fontWeight: "600" },
    dialogContent: { marginTop: "10px" },
    buttonShare: (theme: any) => ({
        bgcolor: theme.palette.primary.main,
        padding: "8px 17px",
        marginTop: "40px",
        color: theme.palette.primary.contrastText,
        "&:hover": { bgcolor: theme.palette.primary.main },
    }),

}