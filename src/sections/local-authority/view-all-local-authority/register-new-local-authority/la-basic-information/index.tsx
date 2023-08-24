import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
  localAuthorityNumber: "",
  localAuthorityName: "",
  name: "",
  telephoneNo: "",
  email: "",
  designation: "",
  localAuthorityPhone: "",
  localAuthorityEmail: "",
  address: "",
};

export const laBasicInformationSchema = Yup.object().shape({
  localAuthorityNumber: Yup.string().required("Field is required"),
  localAuthorityName: Yup.string().required("Field is required"),
  name: Yup.string().required("Field is required"),
  telephoneNo: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  designation: Yup.string().required("Field is required"),
  localAuthorityPhone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  localAuthorityEmail: Yup.string()
    .required("Field is required")
    .email("Invalid Email"),
  address: Yup.string().required("Field is required"),
});

export const laBasicInformationFormData = [
  {
    gridLength: 12,
    otherOptions: {
      label: "Local Authority Number",
      name: "localAuthorityNumber",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Local Authority Name",
      name: "localAuthorityName",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Primary Contact",
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Name",
      name: "name",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Telephone",
      name: "telephoneNo",
      fullWidth: true,
      type: "number",
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Email ID",
      name: "email",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Designation",
      name: "designation",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Local Authority Phone",
      name: "localAuthorityPhone",
      type: "number",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Local Authority Email ID",
      name: "localAuthorityEmail",
      type: "email",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Address",
      name: "address",
      multiline: true,
      minRows: 2,
      fullWidth: true,
      size: "small",
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
];
