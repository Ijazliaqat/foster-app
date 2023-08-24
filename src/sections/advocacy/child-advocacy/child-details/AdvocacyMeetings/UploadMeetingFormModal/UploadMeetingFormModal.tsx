import { Box, Button, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { LoadingButton } from "@mui/lab";
import { uploadMeetingRecordingData } from "..";

const AddMeetingRecording = (props: any) => {
    const { isUploadModalOpen, setIsUploadModalOpen, methods, handleSubmit, onSubmit, actionType } = props;

    return (
        <>
            <Dialog open={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} maxWidth={"sm"} PaperProps={{ sx: { maxHeight: "700px" } }}>
                <DialogContent>
                    <Typography component={"p"} sx={{ fontWeight: 600, fontSize: "16px", mb: "20px", textTransform: "capitalize" }}>
                        {`${actionType} Meeting Recordings`}
                    </Typography>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            {uploadMeetingRecordingData.map((form: any, i: number) => (
                                <Grid item xs={12} md={form.gridLength} key={i}>
                                    <Typography sx={{ ...styles.title, mt: "15px", mb: 0.3 }}>{form.title}</Typography>
                                    <form.component disabled={actionType === 'view' ? true : false}  {...form.otherOptions}>
                                        {form.otherOptions.select
                                            ? form.otherOptions.options.map((option: any) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))
                                            : null}
                                    </form.component>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ mt: "39px" }}>
                            <Typography sx={styles.title}>Report</Typography>
                            <RHFUploadFile name="report" required={true} disabled={actionType === 'view' ? true : false}  {...methods} />
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ mt: "39px" }}>
                            <Typography sx={styles.title}>Attach Video/Audio File</Typography>
                            <RHFUploadFile name="attachFile" required={true} disabled={actionType === 'view' ? true : false} {...methods} />
                            <Typography fontSize={14} fontWeight={400}>Maximum File Size is 1GB</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: "40px" }}>
                            <Box sx={{ display: "flex", gap: "1rem" }}>
                                {actionType !== 'view' &&
                                    <LoadingButton type="submit" variant="contained" >
                                        Submit
                                    </LoadingButton>
                                }
                                <Button
                                    sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }}
                                    type="button"
                                    variant="contained" onClick={() => setIsUploadModalOpen(false)}>
                                    Cancel
                                </Button>
                            </Box>
                        </Grid>
                    </FormProvider>
                </DialogContent>
            </Dialog >

        </>
    );
};

export default AddMeetingRecording;

const styles = {
    title: { fontWeight: 600, fontSize: "16px" },
};
