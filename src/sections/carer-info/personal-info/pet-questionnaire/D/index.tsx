import { Typography } from "@mui/material";
import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import * as Yup from "yup";

export const DForm = [
  {
    id: 1,
    heading: "Applocation/Foster Carer Declaration",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    componentProps: {
      name: "information1",
      label:
        "The Information provided above is factually correct and i/we have sgared fully and honsetly all relevant information regarding our pet/s",
    },
    component: RHFCheckbox,
    md: 12,
  },
  {
    id: 3,
    componentProps: {
      name: "information2",
      label:
        "I/WE undertake to provide any necessary activity to minimise the risk of harm to the child or childern and pet/s",
      sx: { mb: 2 },
    },
    component: RHFCheckbox,
    md: 12,
  },
  {
    id: 4,
    heading: "Any Comments",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 5,
    componentProps: {
      name: "comments",
      label: "Details Here",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 6,
    componentProps: {
      name: "signature1",
      label: "Signature Of Applicant / Foster Carer 1",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "signature2",
      label: "Signature Of Applicant / Foster Carer 2",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
  {
    id: 10,
    componentProps: {
      name: "date1",
      label: "Date",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "date2",
      label: "Date",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
];

export const defaultValues = {
  information1: false,
  information2: false,
  comments: "",
  signature1: null,
  signature2: null,
  date1: null,
  date2: null,
};

export const DFormValidationSchema = Yup.object().shape({
  information1: Yup.boolean(),
  information2: Yup.boolean(),
  comments: Yup.string().trim(),
  signature1: Yup.mixed()
    .nullable()
    .required("Signature Of Interviewee is required"),
  signature2: Yup.mixed()
    .nullable()
    .required("Signature Of Interviewee is required"),
  date1: Yup.date().required("Date is required"),
  date2: Yup.date().required("Date is required"),
});

export { default as PetQuestionnaireDFrom } from "./PetQuestionnaireDFrom";
