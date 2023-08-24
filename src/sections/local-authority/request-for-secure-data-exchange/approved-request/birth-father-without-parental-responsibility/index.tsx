import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";


export const BirthWithoutFatherParental = [
  {
    heading:
      "Is the identity of the birth father without PR known to the agency?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    heading: "Has the paternity of the child been confirmed?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },

  {
    componentProps: {
      name: "indicate",
      label: "If yes, indicate how this was confirmed",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "paternity",
      label:
        "Is anyone else claiming paternity of the child? If yes, give brief details",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "Does the birth father know of the birth of the child and what contact has there been with the agency?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 0 },
    },
    component: Typography,
    md: 12,
  },
  {
    heading:
      "If the birth father knows, set out what steps have been taken to offer counselling and advice . Are these continuing? If not and the agency knows the birth father’s identity, has the agency decided that it is appropriate to offer counselling and advice? Is there any ongoing contact with the birth father directly or through another agency?",
    componentProps: {
      variant: "",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "counselling",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "Does the birth father intend to apply for parental responsibility for the child, or for a residence or contact order?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "responsibility",
      label: "If yes, give details",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const BirthWithoutFatherParentalDataValues = {
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

export const BirthWithoutFatherParentalValidationSchema = Yup.object().shape({
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
