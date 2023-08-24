import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";


export const BirthMotherPrtner = [
  {
    componentProps: {
      name: "firstName",
      label: "First Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "sureName",
      label: "Sure Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "familiarNames",
      label: "Other names (including familiar names)",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "gender",
      label: "Gender",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "male", label: "male" },
      { value: "female", label: "female" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    componentProps: {
      name: "profession",
      label: "Occupation or profession",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },

  {
    componentProps: {
      name: "relationship",
      label: "Status and length of relationship with birth mother (married, civil partenership, cohabiting), including relevant dates",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  
];

export const BirthMotherPrtnerDataValues = {
  // yourrequest: "",
  // location: "",
  // briefsummary: "",
  // referrersname: "",
  // telephone: "",
  // email: "",
  // agency: "",
  // dateofreferral: "",
  // Perpetrator: [],
  // referral: [],
};

export const BirthMotherPrtnerValidationSchema = Yup.object().shape({
  // yourrequest: Yup.string().trim().required("Field is Required"),
  // location: Yup.string().trim().required("Field is Required"),
  // briefsummary: Yup.string().trim().required("Field is Required"),
  // referrersname: Yup.string().trim().required("Field is Required"),
  // telephone: Yup.string()
  //   .required("Field is required")
  //   .min(4, "Mininum 6 characters")
  //   .max(15, "Maximum 15 characters"),
  // email: Yup.string()
  //   .trim()
  //   .required("Field is Required")
  //   .email("Invalid Email"),
  // agency: Yup.string().trim().required("Field is Required"),
  // dateofreferral: Yup.string().trim().required("Field is Required"),
});