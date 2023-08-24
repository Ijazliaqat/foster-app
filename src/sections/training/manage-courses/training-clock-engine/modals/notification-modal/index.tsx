import { Grid } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

import * as Yup from 'yup';

export const NotificationSettingsInitialValues = {
    configurationItem: '',
    value: '',
    notificationType: '',
    description: '',
}
export const NotificationSettingsFormSchema = Yup.object().shape({
    configurationItem: Yup.string().required('Field is required'),
    value: Yup.string().required('Field is required'),
    notificationType: Yup.string().required('Field is required'),
    description: Yup.string().required('Field is required'),
})
export const NotificationSettings = [
    {
        id: 1,
        componentProps: {
            name: "configurationItem",
            label: 'Configuration Item',
            fullWidth: true, 
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "value",
            label: 'Value',
            fullWidth: true,
            select: true,
            // sx: { mb: 1 },
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
            name: "notificationType",
            label: 'Notification Type',
            fullWidth: true,
            select: true,
           
        },
        options: [
            { value: "option 1", label: "option 1" },
            { value: "option 2", label: "option 2" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 1,
        title: '',
        componentProps: {
            name: "",
            fullWidth: true,
            // sx: { mb: 1 },
        },
        component: Grid,
        md: 6,
    },
    {
        id: 4,
        componentProps: {
            name: "description",
            label: 'Description',
            multiline: true,
            minRows: 3,
            sx: { mb: 2 },
            fullWidth:true
        },
        component: RHFTextField,
        md: 12,
    },


]