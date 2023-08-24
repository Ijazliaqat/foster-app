import React from 'react'
import { Box, Button, Card, Typography, useTheme } from '@mui/material'
import { editPanelChecklist } from '.';
import { FormProvider, RHFTextField } from '@root/components/hook-form';
import { useEditPanelChecklist } from './useEditPanelChecklist';
import ChecklistDropdown from './ChecklistDropdown';

const EditPanelChecklist = () => {
    const {
        methods,
        handleSubmit,
        onSubmit,
        route
    } = useEditPanelChecklist();

    const theme = useTheme();
    return (
        <Card sx={{ p: 2 }}>
            <Box sx={styles.checkListWrapper}>
                <Typography component="h2" sx={styles.heading(theme)}>Checklist of additional information which may be provided by the agency</Typography>
                <Typography component="h6" sx={styles.paragraph(theme)}>Please tick if included</Typography>
            </Box>
            <Box sx={{ pt: "25px" }}>
                {editPanelChecklist.map((item) => (
                    <Box sx={styles.lists} key={item.id}>
                        <Typography component="p" sx={styles.title(theme.palette.mode)}>{item.title}</Typography>
                        <ChecklistDropdown status={item.status} handleChange={(val: string) => console.log(val)} />
                    </Box>
                ))}
            </Box>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
                <Typography sx={styles.label(theme)}>Any Other Information:</Typography>
                <RHFTextField
                    name="otherInformation"
                    size="small"
                    fullWidth
                    multiline={true}
                    minRows={3}
                />
            </FormProvider>
            <Button type="button" sx={styles.cancelBtn} variant="contained" onClick={() => route.push('/panel/panel-tools/checklist')}>Back</Button>
        </Card >
    )
}

export default EditPanelChecklist;

const styles = {
    checkListWrapper: {},
    heading: (theme: any) => ({ fontSize: "16px !important", fontWeight: "600", lineHeight: "19px", color: theme.palette.primary.main }),
    paragraph: (theme:any) => ({ fontSize: "16px !important", fontWeight: "600", lineHeight: "19px", color:theme.palette.primary.main}),
    title: (mode: any) => ({ fontSize: "14px !important", fontWeight: "400", lineHeight: "16px", color: mode === 'light' ? '#1D1D1D' : '#e1dede',  }),
    label: (theme: any) => ({ fontSize: "16px !important", fontWeight: "600", lineHeight: "19px", pt: "10px", color:theme.palette.primary.main }),
    cancelBtn: { backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#f19333", }, padding: "9px 28px !important", color: "#fff", boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)", mt: "40px", borderRadius: "4px", fontSize: "16px", fontWeight: "600" },
    lists: { display: 'flex', alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #DBDBDB", padding: "15px 0" }
}