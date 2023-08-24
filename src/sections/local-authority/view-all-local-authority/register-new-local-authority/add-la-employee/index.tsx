import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
  employeeName: "",
  localAuthority: "",
  designation: "",
  reportingManager: "",
  phone: "",
  email: "",
  lAChildren: "",
  address: "",
};

export const addLaEmployeeSchema = Yup.object().shape({
  employeeName: Yup.string().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
  designation: Yup.string().required("Field is required"),
  reportingManager: Yup.string().required("Field is required"),
  phone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  lAChildren: Yup.string().required("Field is required"),
  address: Yup.string().required("Field is required"),
});

export const addLaEmployeeFormData = [
  {
    gridLength: 12,
    otherOptions: {
      label: "Employee Name",
      name: "employeeName",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Local Authority",
      name: "localAuthority",
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
      label: "Reporting Manager",
      name: "reportingManager",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Phone",
      name: "phone",
      fullWidth: true,
      type: "number",
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Email",
      name: "email",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "LA Children",
      name: "lAChildren",
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
