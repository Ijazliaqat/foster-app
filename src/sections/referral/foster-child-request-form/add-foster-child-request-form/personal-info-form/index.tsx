import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import {  Typography } from "@mui/material";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";


export const PersonalInfoFormData = [
  {
    id: 1,
    componentProps: {
      name: "childCode",
      label: "Child Code",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "childIdentifier",
      label: "Child Identifier",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "childParentChild",
      label: "Child Or Parent & Child",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },


  {
    id: 4,
    componentProps: {
      name: "areaOffice",
      label: "Area Office",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Hayes", label: "Hayes" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 4.5,
    heading: "Personal Details",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  // {
  //   id: 5,
  //   componentProps: {
  //     name: "uploadPhoto",
  //     label: "Upload image",
  //     fullWidth: true,
  //     size: "small",
  //     sx: { mb: 4 },
  //   },
  //   component: RHFUploadFile,
  //   md: 6,
  // },
  {
    md: 6,
    updatePhoto: true,
  },
  {
    id: 6,
    componentProps: { name: "firstName", label: "First Name", fullWidth: true, sx: { mb: 4 }, },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    gridLength: 6,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 8,
    gridLength: 6,
    componentProps: { name: "lastName", label: "Last Name", fullWidth: true, sx: { mb: 4 }, },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 9,
    gridLength: 6,
    componentProps: { name: "dateOfBirth", label: "Date of Birth", fullWidth: true, sx: { mb: 4 }, },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 10,
    gridLength: 6,
    componentProps: { name: "age", label: "Age", fullWidth: true, sx: { mb: 4 }, },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    gridLength: 6,
    componentProps: {
      name: "gender",
      label: "Gender",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 12,
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
    id: 13,
    gridLength: 6,
    componentProps: {
      name: "ofstedEthnicity",
      label: "Ofsted Ethnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 14,
    gridLength: 6,
    componentProps: {
      name: "language",
      label: "Language",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 15,
    gridLength: 6,
    componentProps: {
      name: "legalStatus",
      label: "Legal Status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 16,
    gridLength: 6,
    componentProps: {
      name: "nationality",
      label: "Nationality",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 17,
    gridLength: 6,
    componentProps: {
      name: "religion",
      label: "Religion",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: RELIGIONDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 18,
    gridLength: 6,
    componentProps: {
      name: "immigrationStatus",
      label: "Immigration Status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 19,
    gridLength: 6,
    componentProps: {
      name: "disability",
      label: "Disability",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 20,
    gridLength: 6,
    componentProps: {
      name: "behaviour",
      label: "Behaviour",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 21,
    componentProps: {
      name: "synopsis",
      label: "Synopsis",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 22,
    componentProps: {
      name: "isChildCurrentlyEducation",
      label: "Is the Child Currently in Education?",
      fullWidth: true,
      select: true,

    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 23,
    componentProps: {
      name: "areThereAnyOtherSiblings",
      label: "Are there any other Siblings?",
      sx: { mb: 4, mt: -0.5 },
    },
    component: RHFCheckbox,
    md: 6,
  },
];

export const PersonalInfoFormValues = {
  childCode: "",
  childIdentifier: "",
  childParentChild: "",
  areaOffice: "",
  updatePhoto: '',
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: '',
  age: "",
  gender: "",
  ethnicity: "",
  ofstedEthnicity: "",
  language: "",
  legalStatus: "",
  nationality: "",
  religion: "",
  immigrationStatus: "",
  disability: "",
  behaviour: "",
  synopsis: "",
  isChildCurrentlyEducation: "",
  areThereAnyOtherSiblings: "",

};

export const PersonalInfoFormValidationSchema = Yup.object().shape({
  childCode: Yup.string().trim().required("Field is Required"),
  childIdentifier: Yup.string().trim().required("Field is Required"),
  childParentChild: Yup.string().trim().required("Field is Required"),
  areaOffice: Yup.string().trim().required("Field is Required"),
  updatePhoto: Yup.string().required("Field is Required"),
  firstName: Yup.string().trim().required("Field is Required"),
  middleName: Yup.string().trim().required("Field is Required"),
  lastName: Yup.string().trim().required("Field is Required"),
  dateOfBirth: Yup.string().trim().required("Field is Required"),
  age: Yup.string().trim().required("Field is Required"),
  gender: Yup.string().trim().required("Field is Required"),
  ethnicity: Yup.string().trim().required("Field is Required"),
  ofstedEthnicity: Yup.string().trim().required("Field is Required"),
  language: Yup.string().trim().required("Field is Required"),
  legalStatus: Yup.string().trim().required("Field is Required"),
  nationality: Yup.string().trim().required("Field is Required"),
  religion: Yup.string().trim().required("Field is Required"),
  immigrationStatus: Yup.string().trim().required("Field is Required"),
  disability: Yup.string().trim().required("Field is Required"),
  behaviour: Yup.string().trim().required("Field is Required"),
  synopsis: Yup.string().trim().required("Field is Required"),
  isChildCurrentlyEducation: Yup.string().trim().required("Field is Required"),
  areThereAnyOtherSiblings: Yup.string().trim().required("Field is Required"),
});

export { default as PesonalInfoForm } from "./PersonalInfoForm";

