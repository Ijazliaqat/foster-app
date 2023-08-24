import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { useEmployeeDirectoryModal } from './useEmployeeDirectoryModal';
import { EmployeeDirectoryForm } from '.';


const EmployeeDirectoryModal = (props: any) => {
    const { open, handleClose } = props
    const { methods, handleSubmit, onSubmit } = useEmployeeDirectoryModal(props)
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm" fullWidth
        >
            <DialogTitle id="alert-dialog-title" sx={{ marginBottom: "24px" }}>
                Employee Directory: Add Child
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container columnSpacing={4}>
                            {EmployeeDirectoryForm?.map((item: any) => (
                                <Grid item xs={12} md={item?.md} key={item?.id}>

                                    <item.component fullWidth
                                        {...item.componentProps}
                                        // disabled={disabled}
                                        size={"small"}
                                    >
                                        {item.componentProps.select ? item.options.map((option: any) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))
                                            :
                                            null}

                                        {item?.heading}
                                    </item.component>

                                </Grid>
                            ))}

                            <Grid item xs={12} sx={{ marginTop: "12px" }}>
                                {/* {!disabled && ( */}
                                <LoadingButton
                                    type="submit"
                                    variant="contained"
                                    sx={{ mr: 2 }}
                                // loading={isSubmitting}
                                >
                                    Submit
                                </LoadingButton>

                                {/* )} */}


                                <Button type="button" variant="contained" onClick={handleClose}>
                                    Back
                                </Button>
                            </Grid>

                        </Grid>
                    </FormProvider>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default EmployeeDirectoryModal