import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
import ChildDetailImg from '../../../assets/svg/childDetail.svg'


// Styles
const styles = {
    marginBottom: {
        marginBottom: "40px !important",
    },
    marginTop: {
        marginTop: "25px !important",
    },
};


export const ReferralSchemeForm = (route: any) => {

    const array1 = [
        {
            id: 1,
            componentProps: {
                name: "checklistDate",
                label: "Checklist Date",
                fullWidth: true,
                sx: styles.marginBottom,
            },
            component: RHFDatePicker,
            md: 6,
        },


        {
            id: 3,
            componentProps: {
                name: "ethnicity",
                label: "Ethnicity / Culture",
                select: true,
                sx: styles.marginBottom
            },
            options: [{ label: "Permanent", value: "Permanent" }],
            component: RHFSelect,
            md: 6,
        },
        {
            id: 4,
            componentProps: {
                name: "language",
                label: "Language",
                select: true,
                sx: styles.marginBottom
            },
            options: [{ label: "Scot Fostering", value: "Scot_Fostering" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
            component: RHFSelect,
            md: 6,
        },
        {
            id: 5,
            componentProps: {
                name: "religion",
                label: "Religion",
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
                name: "locality",
                label: "Locality",
                select: true,
                sx: styles.marginBottom,
            },
            options: [{ label: "Scot Fostering", value: "Scot_Fostering" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
            component: RHFSelect,
            md: 6,
        },
        {
            id: 7,
            componentProps: {
                name: "education",
                label: "Education",
                select: true,
                sx: styles.marginBottom,
            },
            options: [{ label: "Scot Fostering", value: "Scot_Fostering" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
            component: RHFSelect,
            md: 6,
        },
        {
            id: 8,
            componentProps: {
                name: "health",
                label: "Health",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 9,
            componentProps: {
                name: "disability",
                label: "Disability",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 10,
            componentProps: {
                name: "contact",
                label: "Contact",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 11,
            componentProps: {
                name: "siblings",
                label: "Siblings",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 12,
            componentProps: {
                name: "abusingPeople",
                label: "Safeguarding:Abused or Abusing People",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 13,
            componentProps: {
                name: "needsOfChild",
                label: "Specific needs of Child / Young person (i.e Challenging Behaviour)",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 14,
            componentProps: {
                name: "childrenHousehold",
                label: "Other Children in the Household",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 15,
            componentProps: {
                name: "viewOfChildPerson",
                label: "Views of Child /Young Person",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 16,
            componentProps: {
                name: "transport",
                label: "Transport",
                fullWidth: true,
                multiline: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 17,
            componentProps: {
                name: "gapsInMatch",
                label: "How will any gaps in the match between the Young Person and FOster Carer(s) be Addressed ? ",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 18,
            componentProps: {
                name: "nameDutyWorker",
                label: "Name of Duty Worker",
                sx: styles.marginBottom,
                fullWidth: true,
            },
            component: RHFTextField,
            md: 6,
        },
        {
            id: 19,
            componentProps: {
                name: "lineManager",
                label: "Name of Supervising Social Worker / Line Manager",
                sx: styles.marginBottom,
                fullWidth: true,
            },
            component: RHFTextField,
            md: 6,
        },
        {
            id: 20,
            componentProps: {
                name: "LARiskAssessment",
                label: "LA Risk Assessment, have risks identified been shared wih the Foster Carers",
                multiline: true,
                fullWidth: true,
                minRows: 3,
                sx: styles.marginBottom,
            },
            component: RHFTextField,
            md: 12,
        },
        {
            id: 21,
            heading: "Notification",
            componentProps: {
                variant: "h6",
                color: (theme: any) => theme.palette.primary.main,
                sx: { mb: "20px" },
            },
            component: Typography,
        },
        {
            id: 22,
            componentProps: {
                name: "selectUser",
                label: "Select User to be Notified",
                fullWidth: true,
                select: true,
                sx: styles.marginBottom,
            },
            options: [{ label: "Scot Fostering", value: "Scot_Fostering" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
            component: RHFSelect,
            md: 6,
        },
        {
            id: 23,
            componentProps: {
                name: "email",
                label: "Enter Additional Email Addresses to be notified: (Email Addresses should be seprated by commas.For example john@domain.com, Pete@domain.com)",
                sx: styles.marginBottom,
                fullWidth: true,
            },
            component: RHFTextField,
            md: 12,
        },

    ];
    {
        route === 'carer-details' && array1.splice(1, 0, {
            id: 2.1,
            componentProps: {
                name: "recommendedChild",
                label: "Recommended Child",
                select: true,
                sx: styles.marginBottom
            },
            options: [{ label: "Permanent", value: "Permanent" }],
            component: RHFSelect,
            md: 6,
        })
    }
    {
        route === 'child-details' && array1.splice(1, 0, {
            id: 2,
            componentProps: {
                name: "recommendedCarer",
                label: "Recommended Carer",
                select: true,
                sx: styles.marginBottom
            },
            options: [{ label: "Permanent", value: "Permanent" }],
            component: RHFSelect,
            md: 6,
        })
    }

    return array1
}


export const defaultValues = {
    checklistDate: new Date(),
    referralType:'',
    recommendedCarer: "",
    recommendedChild: "",
    ethnicity: "",
    language: "",
    religion: "",
    locality: "",
    education: "",
    health: "",
    disability: "",
    contact: "",
    siblings: "",
    abusingPeople: "",
    needsOfChild: "",
    childrenHousehold: "",
    viewOfChildPerson: "",
    transport: "",
    gapsInMatch: "",
    nameDutyWorker: "",
    lineManager: "",
    LARiskAssessment: "",
    selectUser: "",
    email: "",
};

export const ReferralSchemeValidationSchema = Yup.object().shape({
    referralType: Yup.string().trim().required("Field is Required"),
    recommendedCarer: Yup.string().trim().required("Field is Required"),
    ethnicity: Yup.string().trim().required("Field is Required"),
    language: Yup.string().trim().required("Field is Required"),
    religion: Yup.string().trim().required("Field is Required"),
    locality: Yup.string().trim().required("Field is Required"),
    education: Yup.string().trim().required("Field is Required"),
});

export { default as ChildDetailsForm } from "./ChildDetailsForm";



