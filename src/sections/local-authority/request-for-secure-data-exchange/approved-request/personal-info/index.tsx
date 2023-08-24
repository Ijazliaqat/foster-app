import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { LANGUAGESDROPDOWNDATA } from "@root/dropdown-data/languages";
import { NATIONALITYDROPDOWN } from "@root/dropdown-data/nationality";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const personalInfo = [
  {
    gridLength: 6,
    uploadPhoto: true,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "childOrParent&Child",
      label: "Child Or Parent & Child",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Parent child", label: "Parent child" },
      { value: "Single child", label: "Single child" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "areaOffice",
      label: "Area Office",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "fosterCarer", label: "Foster Carer" }],
    component: RHFSelect,
    md: 6,
  },
  {
    componentProps: {
      name: "firstName",
      label: "first Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "lastName",
      label: "Last Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "dob",
      label: "Date of Birth",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    componentProps: {
      name: "age",
      label: "Age",
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
    options: GENDERDROPDOWNDATA,
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: ETHNICITYDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "ofsteadEthnicity",
      label: "Ofstead Ethnicity",
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
    gridLength: 6,
    componentProps: {
      name: "specialNeeds",
      label: "Special Needs",
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
    gridLength: 6,
    componentProps: {
      name: "nationality",
      label: "Nationality",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: NATIONALITYDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "language",
      label: "Language",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: LANGUAGESDROPDOWNDATA,
    component: RHFSelect,
    md: 6,
  },
  {
    componentProps: {
      name: "religion",
      label: "Religion",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "legalStatus",
      label: "Legal Status",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "ImmigrationStatus",
      label: "Immigration Status",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "behaviour",
      label: "Behaviour",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "education",
      label: "Is the Child Currently in Education",
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
      name: "Sibling",
      label: "Are there any other Sibling ?",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const personalInfoDataValues = {
  childOrParent: "",
  areaOffice: "",
  firstName: "",
  lastName: "",
  dob: null,
  age: "",
  gender: "",
  ethnicity: "",
  ofsteadEthnicity: "",
  specialNeeds: "",
  nationality: "",
  language: "",
  religion: "",
  legalStatus: "",
  ImmigrationStatus: "",
  behaviour: "",
  education: "",
  Sibling: "",
  address: "",
};

export const personalInfoValidationSchema = Yup.object().shape({
  // firstName: Yup.string().trim().required("Field is Required"),
});
