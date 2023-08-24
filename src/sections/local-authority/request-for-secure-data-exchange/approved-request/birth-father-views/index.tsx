import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";

export const BirthFatherViewsData = [
  {
    componentProps: {
      name: "yourName",
      label: "Your name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "nameOfChild",
      label: "The name of your child",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    heading:
      "I have been shown the details about me as recorded in my child’s permanence report",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    heading: "I agree with what has been written",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "information",
      label: "I would like to add the following information",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "permanence",
      label:
        "I disagree with what has been written in my child’s permanence report for the following reasons",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },

  {
    para:
      "(Any additional comments should be recorded separately and signed and dated)",
    componentProps: {
      variant: "",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 0 },
    },
    component: Typography,
    md: 12,
  },
  {
    para: "I have been given written information about the adoption process",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    heading:
      "I have been offered/had independent counselling to support me in understanding why adoption is the local authority’s preferred plan for my child",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
    md: 12,
  },
  {
    para:
      "You may want to seek advice and support from somebody who is experienced in adoption matters and who can help you with this. It is also important for you to understand that, whilst the adoption agency must take into account your wishes or feelings, the agency and the adoptive parents cannot be required to follow them.",
    componentProps: {
      variant: "",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    heading:
      "What things would you like your child/children and the adopters to know about your childhood and the way that it has influenced you? In time, it will be very important for your child to have a better understanding of your life. This will be easier if your child has a picture of both the good things and the difficult experiences you may have had whilst growing up.",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mt: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "childhood",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "Do You have any wishes or about your child/children in relation to the plan them for adoption ?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 0 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "child/children",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "Do You have any wishes or about your child/children in relation to their future religious or cultural upbringing?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 0 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "religious",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "Are there any other comments you would like to make about the way in which you would like your child/children to be brought up in their adoptive family ?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 0 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "adoptive",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "signature",
      label: "Signature",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
  {
    componentProps: {
      name: "date",
      label: "Date",
      fullWidth: true,
      sx: { mb: 4, mt: 2.5 },
    },
    component: RHFDatePicker,
    md: 6,
  },
];

export const BirthFatherViewssDataValues = {};

export const BirthFatherViewsValidationSchema = Yup.object().shape({});
