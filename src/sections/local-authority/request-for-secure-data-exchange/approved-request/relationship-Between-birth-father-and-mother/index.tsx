import * as Yup from "yup";
import { RHFTextField } from "@root/components/hook-form";
import { Typography } from "@mui/material";


export const relationshiMotherFatherData = [
  {
    heading:
      "What was the status of the birth father’s relationship with the child’s birth mother at the time of the birth of the child (married, cohabiting) and what is the current status of the relationship (separated, divorced, living apart) – include dates",
    componentProps: {
      variant: "",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 0 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "relationship",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading: "Give a brief description of the past and current relationship of the birth parents with each other and their views of this",
    componentProps: {
      variant: "",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 0 },
    },
    component: Typography,
    md: 12,
  },
  {
    componentProps: {
      name: "description",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const relationshiMotherFatherDataValues = {};

export const relationshiMotherFatherDataValidationSchema = Yup.object().shape({});
