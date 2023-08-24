import { Grid } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

import * as Yup from 'yup';

export const initialValues = {
    parameter: '',
    settings: '',
    description: '',
}
export const formSchema = Yup.object().shape({
    parameter: Yup.string().required('Field is required'),
    settings: Yup.string().required('Field is required'),
    description: Yup.string().required('Field is required'),
})


export const AddTrainingClockEngine = [
    {
        id: 1,
        componentProps: {
            name: "parameter",
            label: 'Parameters',
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "settings",
            label: 'Settings',
            fullWidth: true,
            select: true,
            sx: { mb: 1 },
        },
        options: [
            { value: "option 1", label: "option 1" },
            { value: "option 2", label: "option 2" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 3,
        componentProps: {
            name: "description",
            label: 'Description',
            multiline: true,
            minRows: 3,
            sx: { mb: 2 },
        },
        component: RHFTextField,
        md: 12,
    },


]
