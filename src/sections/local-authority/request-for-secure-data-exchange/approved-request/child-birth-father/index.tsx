import * as Yup from "yup";
import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const childBirthFather = [
  {
    componentProps: {
      name: "sureName",
      label: "Sur Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "firstNames",
      label: "First Names",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    heading: "Are these the names used at the time of the child’s birth ? ",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "question",
      label: "if no to above question, what were they?",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "familiarNames",
      label: "Other names used (including familiar names)",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "dopb",
      label: "Date and Place of Birth",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "Nationality",
      label: "Nationality and immigration status",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "racialOrigin",
      label: "Racial origin, cultural and linguistic background",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "currentAdress",
      label: "Current adress (Give date when last confirmed)",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "localAuthority",
      label: "Date of Photograph",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 8,
  },

  {
    componentProps: {
      name: "description",
      label: "Give a brief description of the birth mother",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "personality",
      label:
        "briefly describe the personality and intrests of the birth mother",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "education",
      label: "brief details of the birth mother's education history",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "profession",
      label: "Current occupation or profession",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "employment",
      label: "Brief details of employment history",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "neighbourhood",
      label:
        "Brief description of the home and neighbourhood where the birth mother lives",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "relevant",
      label: "Brief summary of any relevant health factors",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const childBirthFatherDataValues = {
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

export const childBirthFatherValidationSchema = Yup.object().shape({
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
