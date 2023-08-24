import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import SuspectedTable from "./detail-of-suspected-table/contextual-safeguarding-table/tainee-list-table/SuspectedTable";
import ChildrenTable from "./detail-of-children-table/ChildrenTable";

export const ContextualFormData = [
  {
    id: 1,
    heading: "What is your request for?",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    componentProps: {
      defaultValue: "Consideration of a multi-agency flag",
      name: "yourrequest",
      options: [
        "Consideration of a multi-agency flag",
        "Suspected perpetrator to b e discussed",
        "Location to be discussed",
        "Group to be discussed",
      ],
      sx: {
        ml: "0px !important",
        width: "100%",
        justifyContent: "space-between",
      },
    },
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
  },
  {
    id: 2.1,
    heading: "Details of Suspected Perpetrator(s):",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2, mt: 4 },
    },
    component: Typography,
  },
  {
    id: 2.2,
    componentProps: {
      name: "Perpetrator",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: SuspectedTable,
  },
  {
    id: 2.3,
    heading: "Details of Children relevant to this referral:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2, mt: 8 },
    },
    component: Typography,
  },
  {
    id: 2.4,
    componentProps: {
      name: "referral",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: ChildrenTable,
  },

  {
    id: 3,
    heading:
      "Details of location wherer child exploitation is believed to be occuring:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2, mt: 8 },
    },
    component: Typography,
  },
  {
    id: 3.5,
    heading: "Location:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 4,
    componentProps: {
      name: "location",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 5,
    heading: "Brief summary of the concerns:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 6,
    componentProps: {
      name: "briefsummary",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 7,
    heading: "Details of Referrer:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },

  {
    id: 8,
    componentProps: {
      name: "referrersname",
      label: "Referrers Name:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 9,
    componentProps: {
      name: "telephone",
      label: "Telephone:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 10,
    componentProps: {
      name: "email",
      label: "Email:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "agency",
      label: "Agency:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 12,
    componentProps: {
      name: "dateofreferral",
      label: "Date Of Referral:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

export const ContextualFormDataValues = {
  yourrequest: "",
  location: "",
  briefsummary: "",
  referrersname: "",
  telephone: "",
  email: "",
  agency: "",
  dateofreferral: "",
  Perpetrator: [],
  referral: [],
};

export const ContextualFormValidationSchema = Yup.object().shape({
  yourrequest: Yup.string().trim().required("Field is Required"),
  location: Yup.string().trim().required("Field is Required"),
  briefsummary: Yup.string().trim().required("Field is Required"),
  referrersname: Yup.string().trim().required("Field is Required"),
  telephone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 6 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string()
    .trim()
    .required("Field is Required")
    .email("Invalid Email"),
  agency: Yup.string().trim().required("Field is Required"),
  dateofreferral: Yup.string().trim().required("Field is Required"),
});

// export { default as ContextualSafeguardingForm } from "./contextual-safeguarding-form/ContextualSafeguardingForm";
