import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import * as Yup from "yup";

export const CForm = [
  {
    id: 1,
    heading: "Social Worker Observations ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    heading:
      "Assessing Social Worker's Observation of the animal(s) during visits to the home, including any comments on behaviour, hygiene or safety",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 3,
    componentProps: {
      name: "socialWorkerObservations",
      label: "Details Here",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 4,
    heading: "Social Worker Summary  And Analysis",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 5,
    heading:
      "Suitable/Significance of the Animal(s) in the Relation To Fostering Or Adopting",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 6,
    componentProps: {
      name: "significanceOfAnimal",
      label: "Details Here",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 7,
    heading:
      "What Action, If Any, Needs to be Taken To Reduce  Any Foreseeable Risks?",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 8,
    componentProps: {
      name: "foreseeableRisks",
      label: "Details Here",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 9,
    componentProps: {
      name: "nameOfSocialWorker",
      label: "Name of Assessing Social Worker",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 10,
    componentProps: {
      name: "date",
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
      name: "signatureOfAssessingSocialWorker",
      label: "Signature Of Assessing Social Worker",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
];

export const defaultValues = {
  socialWorkerObservations: "",
  significanceOfAnimal: "",
  foreseeableRisks: "",
  nameOfSocialWorker: "",
  date: null,
  signatureOfAssessingSocialWorker: null,
};

export const CFormValidationSchema = Yup.object().shape({
  socialWorkerObservations: Yup.string().trim(),
  significanceOfAnimal: Yup.string().trim(),
  foreseeableRisks: Yup.string().trim(),
  nameOfSocialWorker: Yup.string()
    .trim()
    .required("Assessing Social Worker is Required"),
  date: Yup.date().required("Date is Required"),
  signatureOfAssessingSocialWorker: Yup.mixed()
    .nullable()
    .required("Signature Of Interviewee is required"),
});

export { default as PetQuestionnaireCFrom } from "./PetQuestionnaireCFrom";
