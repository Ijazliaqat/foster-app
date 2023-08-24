import SignaturePad from "@root/components/SignaturePad";
import {
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  nameOfFosterCarer: "",
  dateOfReview: null,
  dateOfPanel: null,
  relationshipToChild: "",
  nameOfDecisionMaker: "",
  fosterHomeReview: "",
  fosteringPanelMinutes: "",
  otherMaterials: "",
  comments1: "",
  agreeWithProcess: "",
  comments2: "",
  consideredAdditionalMaterial: "",
  comments3: "",
  reasonsOfDecision: "",
  adviceToFosteringService: "",
  signature: "",
  date: null,
};

export const formSchema = Yup.object().shape({
  nameOfFosterCarer: Yup.string().required("Field is required."),
  dateOfReview: Yup.string().required("Field is required."),
  dateOfPanel: Yup.string().required("Field is required."),
  relationshipToChild: Yup.string().required("Field is required."),
  nameOfDecisionMaker: Yup.string().required("Field is required."),
  fosterHomeReview: Yup.string().required("Field is required."),
  fosteringPanelMinutes: Yup.string().required("Field is required."),
  otherMaterials: Yup.string().required("Field is required."),
  comments1: Yup.string().required("Field is required."),
  agreeWithProcess: Yup.string().required("Field is required."),
  comments2: Yup.string().required("Field is required."),
  consideredAdditionalMaterial: Yup.string().required("Field is required."),
  comments3: Yup.string().required("Field is required."),
  reasonsOfDecision: Yup.string().required("Field is required."),
  adviceToFosteringService: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
});

export const FRD1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of foster carer",
      name: "nameOfFosterCarer",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of review",
      name: "dateOfReview",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of panel (if appilcable)",
      name: "dateOfPanel",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Relationship to Child",
      name: "relationshipToChild",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of Decision maker",
      name: "nameOfDecisionMaker",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    title: "Foster home review consisting of form-A-H (where applicable)",
    otherOptions: {
      name: "fosterHomeReview",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Fostering panel minutes",
    otherOptions: {
      name: "fosteringPanelMinutes",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title:
      "Other material that was available at the time of the review (if yes, please list)",
    otherOptions: {
      name: "otherMaterials",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "comments1",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "I agree with the process and approach of the review (including panel where applicable), am satisfied as its fairness, satisfied that the arguments have been properly addressed:",
    otherOptions: {
      name: "agreeWithProcess",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "comments2",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "I have considered additional material that was not available at the time of the review (and panel if applicable)",
    otherOptions: {
      name: "consideredAdditionalMaterial",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "comments3",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Reasons of decision",
      name: "reasonsOfDecision",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Advice to fostering service",
      name: "adviceToFosteringService",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Signature",
      name: "signature",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
