import {
    Button,
    Dialog,
    DialogContent,
    Grid,
    Typography,
} from "@mui/material";
import { useTasksModal } from "./useTasksModal";
import { addTaskFormData } from "..";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";


const AddTaskModal = ({ isTaskModalOpen, handleClose }: any) => {
    const { methods, handleSubmit, onSubmit } = useTasksModal(handleClose);

    return (
        <>
            <Dialog open={isTaskModalOpen} onClose={handleClose} maxWidth={"sm"}>
                <DialogContent>
                    <Typography fontWeight={600} fontSize="18px" marginBottom="20px">
                        Add New Task
                    </Typography>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container columnSpacing={4} rowSpacing={3}>
                            {addTaskFormData.map((form: any, i: number) => {
                                return (
                                    <Grid item xs={12} md={form?.gridLength} key={i}>
                                        {form.component ? <form.component
                                            size="small"
                                            {...form.otherOptions}
                                        >
                                            {form.otherOptions.select
                                                ? form.options.map((option: any, i: number) => (
                                                    <option key={i} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))
                                                : null}
                                        </form.component> : <RHFUploadFile {...form.otherOptions} {...methods} required />}
                                    </Grid>
                                );
                            })}
                            <Grid item xs={12} >
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
                                    onClick={handleClose}
                                    sx={{
                                        backgroundColor: "#F6830F",
                                        "&:hover": { backgroundColor: "#F6830F" },
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </FormProvider>

                </DialogContent>
            </Dialog>
        </>
    );
};

export default AddTaskModal;

