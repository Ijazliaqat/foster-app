import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupBoolean from "@root/components/hook-form/RHFRadioGroupBoolean";
import * as Yup from "yup";

export const RAChildDetailsFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "assessmentDate",
      label: "Date of Assessment ",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "nextAssessmentDate",
      label: "Next Assessment Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "laOOHContactNumber",
      label: "LA OOH Contact Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "height",
      label: "Height",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "hairColor",
      label: "Hair Color",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "eyeColor",
      label: "Eye Color",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "distinguishingMarks",
      label: "Distinguishing marks / feature",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Known / Suspected CSE Risk Y/N",
      name: "knownSuspectedCSERisk",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "knownNetworkOfChild",
      label:
        "Known Network of the Child (if known, provide family/friends/previous foster carers names and addresses)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label:
        "Any circumstances that may increase risk to child (previous missing episodes, child exploitation, drugs alcohol, abduction, family members)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
export const childDetailsdefaultValues = {
  assessmentDate: new Date(),
  nextAssessmentDate: new Date(),
  laOOHContactNumber: "Nilllll",
  height: "Nilllll",
  hairColor: "Nil",
  eyeColor: "Nil",
  distinguishingMarks: "Nil",
  knownSuspectedCSERisk: true,
  knownNetworkOfChild: "Nil",
  circumstancesThatIncreaseRisk: "Nil",
};

export const childDetailsformSchema = Yup.object().shape({
  assessmentDate: Yup.date().required("Required"),
  nextAssessmentDate: Yup.date().required("Required"),
  laOOHContactNumber: Yup.string().required("Required"),
  height: Yup.string().required("Required"),
  hairColor: Yup.string().required("Required"),
  eyeColor: Yup.string().required("Required"),
  distinguishingMarks: Yup.string().required("Required"),
  knownNetworkOfChild: Yup.string().required("Required"),
  circumstancesThatIncreaseRisk: Yup.string().required("Required"),
});



export const formatters: any = {};