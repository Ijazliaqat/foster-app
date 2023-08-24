import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";


export const BirthFatherParental = [
  {
    componentProps: {
      name: "birthFatherAcquire",
      label: "How did the birth father acquire PR for the child?",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "Does the birth father know of the plan to place the child for adoption?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    heading:
      "If yes, give details of any formal or advanced consent to the placement of the child for adoption and the making of the adoption order (witnessed by a CAFCASS officer) ",
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
      name: "advancedConsen",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "If no, has the agency decided that it is appropriate to counsel and advise the birth father? Is there any ongoing contact with the birth father directly or through another agency?",
    componentProps: {
      variant: "",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "appropriate",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const BirthFatherParentalDataValues = {
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

export const BirthFatherParentalValidationSchema = Yup.object().shape({
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
