import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// Styles
const styles = {
    marginBottom: {
        marginBottom: "40px !important",
    },
    marginTop: {
        marginTop: "25px !important",
    },
};

export const AddLocalAuthorityForm = [
    {
        id: 1,
        componentProps: {
            name: "EmployeeName",
            label: "Employee Name",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "LocalAuthority",
            label: "Local Authority",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 3,
        componentProps: {
            name: "Designation",
            label: "Designation",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 4,
        componentProps: {
            name: "ReportingManager",
            label: "Reporting Manager",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 5,
        componentProps: {
            name: "Phone",
            label: "Phone",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 6,
        componentProps: {
            name: "Email",
            label: "Email",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 7,
        componentProps: {
            name: "LAChildren",
            label: "LA Children",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },

    {
        id: 8,
        componentProps: {
            name: "address",
            label: "Address",
            multiline: true,
            minRows: 3,
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 12,
    },

];

export const defaultValues = {
    EmployeeName: "",
    LocalAuthority: "",
    Designation: "",
    ReportingManager: "",
    Phone: "",
    Email: "",
    LAChildren: "",
    address: "",
};

export const AddLocalAuthorityValidationSchema = Yup.object().shape({
    EmployeeName: Yup.string().trim().required("Field is Required"),
    LocalAuthority: Yup.string().trim().required("Field is Required"),
    Designation: Yup.string().trim().required("Field is Required"),
    ReportingManager: Yup.string().trim().required("Field is Required"),
    Phone: Yup.string().trim().required("Field is Required"),
    Email: Yup.string().trim().required("Field is Required"),
    LAChildren: Yup.string().trim().required("Field is Required"),
    // address: Yup.string().trim().required("Field is Required"),
});

export { default as AddLocalAuthorityEmployee } from "./AddLocalAuthorityEmployee";



