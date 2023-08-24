import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

// Styles
const styles = {
    marginBottom: {
        marginBottom: "20px !important",
    },
    marginTop: {
        marginTop: "20px !important",
    },
};

export const BackupAndArchiveSettingForm = [
    {
        md: 6,
        updatePhoto: true,
    },
    {
        id: 2,
        componentProps: {
            name: "backupType",
            label: "Backup type",
            select: true,
            sx: styles
        },
        options: [{ label: "weekly", value: "weekly" }, { label: "monthly", value: "monthly" }, { label: "yearly", value: "yearly" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 3,
        componentProps: {
            name: "createdDate",
            label: "Created Date & Time",
            sx: styles,
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 4,
        componentProps: {
            name: "fullPath",
            label: "Full Path",
            sx: styles,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 5,
        componentProps: {
            name: "status",
            label: "Status",
            select: true,
            sx: styles
        },
        options: [{ label: "Complete", value: "Complete" }, { label: "Backup Interrupted", value: "Backup_Interrupted" }, { label: "Backup Corrupted", value: "Backup_Corrupted" }, { label: "In Progress", value: "In_Progress" }],
        component: RHFSelect,
        md: 6,
    },

    {
        id: 6,
        componentProps: {
            name: "Support_Ticket",
            label: "Support Ticket",
            select: true,
            sx: styles
        },
        options: [{ label: "BACKUP-54785", value: "BACKUP-54785" }, { label: "BACKUP-54744", value: "BACKUP-54744" }, { label: "BACKUP-545454", value: "BACKUP-545454" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 7,
        componentProps: {
            name: "notifications",
            label: "Notifications",
            sx: styles,
        },
        component: RHFCheckbox,
        md: 6,
    },

];

export const defaultValues = {
    updatePhoto: "",
    backupType: "",
    createdDate: new Date(),
    fullPath: "",
    status: "",
    Support_Ticket: "",
    notifications: "",
};

export const ArchiveSettingValidationSchema = Yup.object().shape({
    updatePhoto: Yup.string().trim().required("Field is Required"),
    backupType: Yup.string().trim().required("Field is Required"),
    createdDate: Yup.date().required("Field is Required"),
    fullPath: Yup.string().trim().required("Field is Required"),
    status: Yup.string().trim().required("Field is Required"),
    Support_Ticket: Yup.string().trim().required("Field is Required"),
});

export { default as AddArchiveSettings } from "./AddArchiveSettings";



