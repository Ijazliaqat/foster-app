import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
  accountName: "",
  backName: "",
  accountNumber: "",
  sortCode: "",
};

export const laBackDetailsSchema = Yup.object().shape({
  accountName: Yup.string().required("Field is required"),
  backName: Yup.string().required("Field is required"),
  accountNumber: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  sortCode: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
});

export const laBackDetailsFormData = [
  {
    gridLength: 12,
    otherOptions: {
      label: "Bank Account Name",
      name: "accountName",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Bank Name",
      name: "backName",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Account Number",
      name: "accountNumber",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Sort Code",
      name: "sortCode",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
];
