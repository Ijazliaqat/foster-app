import { Typography } from "@mui/material";
import { RHFRadioGroup, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const BForm = [
  {
    id: 1,
    heading: "Health And Hygiene",
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
      "Describe Any issue in relation to health and hygiene, and how they will be managed?",
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
      name: "issueWithHealth",
      label: "Details Here",
      multiline: true,
      rows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 4,
    heading:
      "Does the Animal(s) have routine vaccinations and preventative treatment?",
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
      name: "routineVaccination",
      label: "Details Here",
      multiline: true,
      rows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 6,
    heading: "Is the animal(s) registered with a vet?",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 7,
    componentProps: {
      name: "registeredAVet",
      options: ["Yes", "No"],
      sx: { mb: 1 },
    },
    component: RHFRadioGroup,
    md: 12,
  },
  {
    id: 8,
    componentProps: {
      name: "animalVetDetails",
      label: "Details Here",
      multiline: true,
      rows: 3,
      sx: { mb: 4 },
    },
    toShow: "Yes",
    component: RHFTextField,
    md: 12,
  },
  {
    id: 9,
    heading: "Safety",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 10,
    heading: "Describe any safety issues and how they will managed",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 11,
    componentProps: {
      name: "safety",
      label: "Details Here",
      multiline: true,
      rows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 12,
    heading: "Breeding/Employment",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 13,
    heading:
      "If the owners use their home for breeding, Grooming or Boarding, Then set out the implications of this for fostering or adoption below",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 14,
    componentProps: {
      name: "breedingOrEmployment",
      label: "Details Here",
      multiline: true,
      rows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const defaultValues = {
  issueWithHealth: "",
  routineVaccination: "",
  registeredAVet: "Yes",
  animalVetDetails: "",
  safety: "",
  breedingOrEmployment: "",
};

export const BFormValidationSchema = Yup.object().shape({
  issueWithHealth: Yup.string().trim(),
  routineVaccination: Yup.string().trim(),
  registeredAVet: Yup.string(),
  animalVetDetails: Yup.string().trim(),
  safety: Yup.string().trim(),
  breedingOrEmployment: Yup.string().trim(),
});

export { default as PetQuestionnaireBFrom } from "./PetQuestionnaireBFrom";
