import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
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

export const ChildrenListFormData = [


    {
        id: 1,
        componentProps: {
            name: "carerCode",
            label: "Carer Code",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        md: 6,
        uploadPhoto: true,
    },
    {
        id: 3,
        componentProps: {
            name: "nationalInsuranceNumber",
            label: "National Insurance number",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 4,
        componentProps: {
            name: "areaOffice",
            label: "Area Office",
            select: true,
            sx: styles.marginBottom
        },
        options: [
            { value: "Hayes", label: "Hayes" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 5,
        componentProps: {
            name: "typeOfCarer",
            label: "Type of Carer",
            select: true,
            sx: styles.marginBottom,
        },
        options: [{ label: "Scot Fostering", value: "Scot_Fostering" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 6,
        componentProps: {
            name: "firstName",
            label: "First Name",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 7,
        componentProps: {
            name: "middleName",
            label: "Middle Name",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 8,
        componentProps: {
            name: "lastName",
            label: "Last Name",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 9,
        componentProps: { name: "dateOfBirth", label: "Date of Birth", fullWidth: true, sx: { mb: 4 }, },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 10,
        componentProps: {
            name: "age",
            label: "Age",
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 11,
        componentProps: {
            name: "gender",
            label: "Gender",
            select: true,
            sx: styles.marginBottom,
        },
        options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 12,
        componentProps: {
            name: "ethnicity",
            label: "Ethnicity",
            select: true,
            sx: styles.marginBottom,
        },
        options: ETHNICITYDROPDOWN,
        component: RHFSelect,
        md: 6,
    },
    {
        id: 13,
        componentProps: {
            name: "ofstedEthnicity",
            label: "Ofsted Ethnicity",
            select: true,
            sx: styles.marginBottom,
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 14,
        componentProps: {
            name: "language",
            label: "Language",
            select: true,
            sx: styles.marginBottom,
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 15,
        componentProps: {
            name: "legalStatus",
            label: "Legal Status",
            select: true,
            sx: styles.marginBottom,
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 16,
        componentProps: {
            name: "nationality",
            label: "Nationality",
            select: true,
            sx: styles.marginBottom,
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 17,
        componentProps: {
            name: "religion",
            label: "Religion",
            select: true,
            sx: styles.marginBottom,
        },
        options: RELIGIONDROPDOWN,
        component: RHFSelect,
        md: 6,
    },
    {
        id: 18,
        componentProps: {
            name: "immigrationStatus",
            label: "Immigration Status",
            select: true,
            sx: styles.marginBottom,
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 19,
        componentProps: {
            name: "partnershipStatus",
            label: "Partnership Status",
            select: true,
            sx: styles.marginBottom,
        },
        options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 20,
        componentProps: {
            name: "sexualOrientation",
            label: "Sexual Orientation",
            select: true,
            sx: styles.marginBottom,
        },
        options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 21,
        componentProps: {
            name: "otherDetails",
            label: "Other Details",
            multiline: true,
            minRows: 3,
            sx: styles.marginBottom,
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 22,
        componentProps: {
            name: "ageRange",
            label: "Age Range",
            select: true,
            sx: styles.marginBottom,
        },
        options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 23,
        componentProps: {
            name: "residency",
            label: "Permanent Residency in UK?",
            select: true,
            sx: styles.marginBottom,
        },
        options: [{ label: "Male", value: "male" }],
        component: RHFCheckbox,
        md: 6,
    },

];

export const defaultValues = {
    carerCode: "",
    nationalInsuranceNumber: "",
    areaOffice: "",
    typeOfCarer: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: new Date(),
    age: "",
    gender: "",
    ethnicity: "",
    ofstedEthnicity: "",
    language: "",
    legalStatus: "",
    nationality: "",
    religion: "",
    immigrationStatus: "",
    partnershipStatus: "",
    sexualOrientation: "",
    otherDetails: "",
    ageRange: "",
    residency: "",
};

export const ChildrenListFormValidationSchema = Yup.object().shape({
    carerCode: Yup.string().trim().required("Field is Required"),
    nationalInsuranceNumber: Yup.string().trim().required("Field is Required"),
    areaOffice: Yup.string().trim().required("Field is Required"),
    typeOfCarer: Yup.string().trim().required("Field is Required"),
    firstName: Yup.string().trim().required("Field is Required"),
    middleName: Yup.string().trim().required("Field is Required"),
    lastName: Yup.string().trim().required("Field is Required"),
    dateOfBirth: Yup.date().required("Field is Required"),
    age: Yup.string().trim().required("Field is Required"),
    gender: Yup.string().trim().required("Field is Required"),
    ethnicity: Yup.string().trim().required("Field is Required"),
    ofstedEthnicity: Yup.string().trim().required("Field is Required"),
    language: Yup.string().trim().required("Field is Required"),
    legalStatus: Yup.string().trim().required("Field is Required"),
    nationality: Yup.string().trim().required("Field is Required"),
    religion: Yup.string().trim().required("Field is Required"),
    immigrationStatus: Yup.string().trim().required("Field is Required"),
    partnershipStatus: Yup.string().trim().required("Field is Required"),
    sexualOrientation: Yup.string().trim().required("Field is Required"),
    otherDetails: Yup.string().trim().required("Field is Required"),
    ageRange: Yup.string().trim().required("Field is Required"),
    residency: Yup.string().trim().required("Field is Required"),
});

export { default as ChildrenListForm } from "./ChildrenListForm";



