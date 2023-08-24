import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, useTheme } from '@mui/material';
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { useChecklistAdditionalForm } from './useChecklistAdditionalForm';

const ChecklistAdditionalForm = (props: any) => {
    const { isAddModalOpen, setIsAddModalOpen } = props;
    const theme: any = useTheme(); 

    const {
        methods,
        handleSubmit,
        onSubmit
      } = useChecklistAdditionalForm();

    return (
        <Dialog
            open={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            fullWidth={true}
            maxWidth="sm"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={styles.title(theme.palette.mode)}>Category</DialogTitle>
            <DialogContent sx={styles.dialogContent}>
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
                    <Typography component='label' sx={(theme)=>styles.heading(theme)}>Add other Information</Typography>
                    <RHFTextField
                        name="title"
                        size="small"
                        placeholder="Enter"
                    />
                    <Box sx={styles.buttonWrap}>
                        <Button type="button" sx={styles.cancelBtn} variant="contained" onClick={() => setIsAddModalOpen(false)}> Cancel </Button>
                        <Button sx={styles.submitButton} type="submit" variant="contained" >
                            Save
                        </Button>
                    </Box>
                </FormProvider>
            </DialogContent>
        </Dialog>
    );
}
export default ChecklistAdditionalForm;


////////////////////////////
const styles = {
    title: (mode: any) => ({ color: mode === 'light' ? '#14142B' : '#fff', fontSize: "16px !important", fontWeight: "600", p: "15px 30px", backgroundColor: mode === 'light' ? 'rgba(247, 136, 18, 0.05)' : 'rgba(247, 136, 18, 0.8)', borderRadius: "5px 5px 0px 0px" }),
    heading: (theme: any) => ({ fontSize: "14px !important", fontWeight: "500", color:theme.palette.primary.main  }),
    dialogContent: { marginTop: "30px" },
    buttonWrap: { display: "flex", alignItems: "center", gap: "20px", mt: "40px", justifyContent: "flex-end" },
    submitButton: { backgroundColor: "#F78812", "&:hover": { backgroundColor: "#F6830F", }, padding: "11px 33px !important", boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)" },
    cancelBtn: { backgroundColor: "#F1EFF2", "&:hover": { backgroundColor: "#F1EFF2", }, padding: "11px 33px !important", color: "#4E4B66", boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)" },
}