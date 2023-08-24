import * as Yup from "yup";
import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const StatusOfChildData = [
  {
    componentProps: {
      name: "force",
      label:
        "If there is a court order in force, give name of court, date on which order was made and type of order",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "force",
      label:
        "Have any orders been applied for but not yet granted? If so, which orders and at which court and date of application? ",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "hearing",
      label: "Give date of fonal hearing if known",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    componentProps: {
      name: "force",
      label:
        "If the child is subject to proceedings, who are the parties to the proceedings ?",
      multiline: true,
      minRows: 3,
      sx: { mb: 3 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "Is the child provided with accommodation under section 20 or section 59(1) of the Children Act 1989?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 4 },
    },
    component: Typography,
    md: 12,
  },
  {
    para:
      "Give details and the date where the parent or guardian has made a statement under section 20(4)(a) of the 2002 Act that they do not wish to be informed of any application for an adoption order. If such statements were subsequently withdrawn, give the dates of these withdrawals",
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
      name: "guardian",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading:
      "Has the child any rights/claims under section 30 of the Fatal Accidents Act 1976 or any other rights to or interest in property which they may lose or gain if an adoption order is made?",
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 4 },
    },
    component: Typography,
    md: 12,
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
      label: "If yes, Please give details",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const StatusOfChildDataValues = {};

export const StatusOfChildValidationSchema = Yup.object().shape({
  // yourrequest: Yup.string().trim().required("Field is Required"),
});
