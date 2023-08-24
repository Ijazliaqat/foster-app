import dayjs from "dayjs";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
export const ReferralListFormDefaultValues = {
  referralDate: new Date(todayDate),
  status: "",
  referredBy: "",
  referrerRole: "",
  areaOffice: "",
  localAuthority: "",
  reason: "",
  updatePhoto: '',
  firstName: "",
  middleName: "",
  lastName: "",
  DOB: new Date(todayDate),
  age: "",
  gender: "",
  ethnicity: "",
  ofstedEthnicity: "",
  specialNeeds: "",
  childGeography: "",
  religion: "",
  address: "",
  currentlyEducation: "",
  otherSiblings: "",
};

export const ReferralListFormSchema = Yup.object().shape({
  referralDate: Yup.date().required("Field is Required"),
  status: Yup.string().required("Field is Required"),
  referredBy: Yup.string().trim().required("Field is Required"),
  referrerRole: Yup.string().trim().required("Field is Required"),
  areaOffice: Yup.string().trim().required("Field is Required"),
  localAuthority: Yup.string().trim().required("Field is Required"),
  reason: Yup.string().trim().required("Field is Required"),
  updatePhoto: Yup.string().required("Field is Required"),
  firstName: Yup.string().trim().required("Field is Required"),
  middleName: Yup.string().trim().required("Field is Required"),
  lastName: Yup.string().trim().required("Field is Required"),
  gender: Yup.string().trim().required("Field is Required"),
  DOB: Yup.date().required("Field is Required"),
  age: Yup.string().trim().required("Field is Required"),
  ethnicity: Yup.string().trim().required("Field is Required"),
  ofstedEthnicity: Yup.string().trim().required("Field is Required"),
  specialNeeds: Yup.string().trim().required("Field is Required"),
  childGeography: Yup.string().trim().required("Field is Required"),
  religion: Yup.string().trim().required("Field is Required"),
  address: Yup.string().trim().required("Field is Required"),
  currentlyEducation: Yup.string().trim().required("Field is Required"),
  otherSiblings: Yup.string().trim().required("Field is Required"),
});

export { default as ReferralListForm } from "./ReferralListForm";
export const ReferralListFormData = [
  {
    gridLength: 6,
    componentProps: {
      label: "Referral Date",
      name: "referralDate",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Status",
      name: "status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "curentReferral", label: "Curent Referral" },
      { value: "onHold", label: "OnHold" },
      { value: "rejected", label: "Rejected" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Referred By",
      name: "referredBy",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Referrer Role",
      name: "referrerRole",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "fosterCarer", label: "Foster Carer" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Area Office",
      name: "areaOffice",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "curentReferral", label: "Curent Referral" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Local Authority",
      name: "localAuthority",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "curentReferral", label: "Curent Referral" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 12,
    componentProps: {
      label: "Reason",
      name: "reason",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Personal Details",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 4 },
    },
    component: Typography,
  },
  {
    gridLength: 6,
    uploadPhoto: true,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "First Name",
      name: "firstName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Middle Name",
      name: "middleName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Last Name",
      name: "lastName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Date of eSignature of Author",
      name: "DOB",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Age",
      name: "age",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },

  {
    gridLength: 6,
    componentProps: {
      label: "Gender",
      name: "gender",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    component: RHFSelect,
    md: 6,
  },

  {
    gridLength: 6,
    componentProps: {
      label: "Ethnicity",
      name: "ethnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "select", label: "select" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Ofsted Ethnicity",
      name: "ofstedEthnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "select", label: "Select" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Special Needs",
      name: "specialNeeds",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Child Geography",
      name: "childGeography",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "select", label: "Select" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Religion",
      name: "religion",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "select", label: "Select" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 12,
    componentProps: {
      label: "Address",
      name: "address",
      fullWidth: true,
      sx: { mb: 4 },
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    label: "Is the child currently in education?",
    componentProps: {
      name: "currentlyEducation",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Are there any other siblings?",
    componentProps: {
      name: "otherSiblings",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
];
