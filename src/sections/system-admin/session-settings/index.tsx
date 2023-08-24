import { RHFSelect, RHFSwitch, RHFTextField } from "@root/components/hook-form";
import * as Yup from 'yup';

export const initialValues = {
    multipleSession: false,
    numberParallel: '',
    autoSave: false,
    sessionTimeout: '',
    idleSessionTimeout: '',
}
export const sessionSettingFormSchema: any = Yup.object().shape({
    multipleSession: Yup.boolean().optional(),
    numberParallel: Yup.string().optional(),
    autoSave: Yup.boolean().optional(),
    sessionTimeout: Yup.string().optional(),
    idleSessionTimeout: Yup.string().optional(),
})

export const sessionSettingData = [
    {
        title: 'Multiple Session',
        otherOptions: {
            size: 'small',
            name: 'multipleSession',
        },
        component: RHFSwitch
    },
    {
        title: 'Number of parallel session',
        otherOptions: {
            name: 'numberParallel',
            type: 'number',
            size: 'small',
            fullWidth: true,
            sx: { width: "100%", maxWidth: "100px" }
        },
        component: RHFTextField
    },
    {
        title: 'Auto-save',
        otherOptions: {
            size: 'small',
            name: 'autoSave',
        },
        component: RHFSwitch
    },
    {
        title: 'session timeout',
        otherOptions: {
            name: 'sessionTimeout',
            size: 'small',
            fullWidth: true,
            select: true,
            sx: { width: "100%", maxWidth: "100px" }
        },
        options: [
            { value: "30 Days", label: "30 Days" },
        ],
        component: RHFSelect
    },
    {
        title: 'idle session timeout',
        otherOptions: {
            name: 'idleSessionTimeout',
            size: 'small',
            fullWidth: true,
            select: true,
            disabled: true,
            sx: { width: "100%", maxWidth: "100px" }
        },
        options: [
            { value: "Disable", label: "Disable" },
        ],
        component: RHFSelect
    },
]