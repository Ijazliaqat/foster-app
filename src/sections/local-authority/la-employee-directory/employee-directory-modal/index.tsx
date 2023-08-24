import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// Styles
const styles = {
    marginBottom: {
        marginBottom: "26px !important",
    },
    marginTop: {
        marginTop: "25px !important",
    },
};

export const EmployeeDirectoryForm = [
    {
        id: 1,
        componentProps: {
            name: "EmployeeName",
            label: "Employee Name",
            sx: styles,
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 2,
        componentProps: {
            name: "LocalAuthority",
            label: "Local Authority",
            sx: styles,
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 3,
        componentProps: {
            name: "ChildID",
            label: "Child ID",
            sx: styles,
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 4,
        componentProps: {
            name: "ChildName",
            label: "Child Name",
            sx: styles,
        },
        component: RHFTextField,
        md: 12,
    },

];

export const defaultValues = {
    EmployeeName: "",
    LocalAuthority: "",
    ChildID: "",
    ChildName: "",
};

export const EmployeeDirectoryValidationSchema = Yup.object().shape({
    EmployeeName: Yup.string().trim().required("Field is Required"),
    LocalAuthority: Yup.string().trim().required("Field is Required"),
    ChildID: Yup.string().trim().required("Field is Required"),
    ChildName: Yup.string().trim().required("Field is Required"),
});

export { default as EmployeeDirectoryModal } from "./EmployeeDirectoryModal";



