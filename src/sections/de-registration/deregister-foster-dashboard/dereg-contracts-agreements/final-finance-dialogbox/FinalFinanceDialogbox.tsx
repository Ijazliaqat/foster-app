import React from "react";
import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const FinalFinanceDialogbox = (props: any) => {
    const { isFinalFinanceModalOpen, setIsFinalFinanceModalOpen, handleSubmit, methods, onSubmit } = props;

    return (
        <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Dialog open={isFinalFinanceModalOpen} onClose={() => setIsFinalFinanceModalOpen(false)} aria-labelledby="responsive-dialog-title" PaperProps={{ sx: { width: "100%", maxWidth: "700px", m: "0 auto" } }}>
                    <DialogTitle sx={styles.heading}>Final Finance settlements</DialogTitle>
                    <DialogContent sx={{ mt: 3 }}>
                        <RHFUploadFile name="updatePhoto" label="Upload File" required {...methods}  />
                        <Box sx={{ pt: 3 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mr: 2 }}
                            >
                                Submit
                            </Button>
                            <Button
                                type="button"
                                variant="contained"
                                onClick={() => setIsFinalFinanceModalOpen(false)}
                                sx={{
                                    backgroundColor: "#F6830F",
                                    "&:hover": { backgroundColor: "#F6830F" },
                                }}
                            >
                                Back
                            </Button>
                        </Box>
                    </DialogContent>

                </Dialog>
            </FormProvider>
        </>
    );
};
export default FinalFinanceDialogbox;

const styles = {
    heading: { background: "linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)", width: "100%", py: 1.5, color: "#fff", textAlign: "center" },
}
