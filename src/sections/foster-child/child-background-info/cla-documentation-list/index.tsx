import * as Yup from "yup";
import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { TargetsAndObjectives } from "./cla-documentation-form/PEPForm";

export const EHCPFormData = [
  {
    id: 1,
    heading: "Foster Placement Agreement",
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
      name: "fosterPlacement.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "fosterPlacement.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 4,
    componentProps: {
      name: "fosterPlacement.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 5,
    heading: "Placement Information Record / Placement Plan",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 6,
    componentProps: {
      name: "placementInfoRecord.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "placementInfoRecord.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 8,
    componentProps: {
      name: "placementInfoRecord.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 9,
    heading: "Local Authority Placement Plan",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 10,
    componentProps: {
      name: "localAuthorityPlacementPlan.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "localAuthorityPlacementPlan.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 12,
    componentProps: {
      name: "localAuthorityPlacementPlan.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 13,
    heading: "Local Authority Risk Plan",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 14,
    componentProps: {
      name: "localAuthorityRiskAssesssment.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 15,
    componentProps: {
      name: "localAuthorityRiskAssesssment.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 16,
    componentProps: {
      name: "localAuthorityRiskAssesssment.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 17,
    heading: "Delegated Authority",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 18,
    componentProps: {
      name: "delegatedAuthority.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 19,
    componentProps: {
      name: "delegatedAuthority.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 20,
    componentProps: {
      name: "delegatedAuthority.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 21,
    heading: "CLA Medical Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 22,
    componentProps: {
      name: "claMedicalDate.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 23,
    componentProps: {
      name: "claMedicalDate.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 24,
    componentProps: {
      name: "claMedicalDate.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 25,
    heading: "CLA Review Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 26,
    componentProps: {
      name: "claReviewDate.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 27,
    componentProps: {
      name: "claReviewDate.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 28,
    componentProps: {
      name: "claReviewDate.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 29,
    heading: "CLA Plan Pt1 Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 30,
    componentProps: {
      name: "carePlanPt1.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 31,
    componentProps: {
      name: "carePlanPt1.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 32,
    componentProps: {
      name: "carePlanPt1.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 33,
    heading: "CLA Plan Pt2 Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 34,
    componentProps: {
      name: "carePlanPt2.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 35,
    componentProps: {
      name: "carePlanPt2.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 36,
    componentProps: {
      name: "carePlanPt2.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 37,
    heading: "PEP Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 38,
    componentProps: {
      name: "perDate.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 39,
    componentProps: {
      name: "perDate.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 40,
    componentProps: {
      name: "perDate.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 41,
    heading: "EHCP Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 42,
    componentProps: {
      name: "ehcpDate.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 43,
    componentProps: {
      name: "ehcpDate.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 44,
    componentProps: {
      name: "ehcpDate.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 45,
    heading: "Pathway PLan",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 46,
    componentProps: {
      name: "pathwayPlan.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 47,
    componentProps: {
      name: "pathwayPlan.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 48,
    componentProps: {
      name: "pathwayPlan.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 49,
    heading: "Grab Pack",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 50,
    componentProps: {
      name: "garbPack.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 51,
    componentProps: {
      name: "garbPack.onfile",
      label: "On File",
      sx: { mb: 4 },
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
    id: 52,
    componentProps: {
      name: "garbPack.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
];
export const PEPFormData = [
  {
    id: 1,
    componentProps: {
      name: "name",
      label: "Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "class",
      label: "Class",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "planDoneBy",
      label: "Plan",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "assessmentDate",
      label: "Assessment",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "pepDuration.from",
      label: "Pep Duration From",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "pepDuration.to",
      label: "Pep Duration to",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    component: TargetsAndObjectives,
    md: 12,
  },
  {
    id: 7,
    componentProps: {
      name: "overAllOutcome",
      label: "Overall Outcome",
      sx: { my: 3 },
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
];
export const TargetsAndObjectivesData = [
  {
    id: 1,
    heading: "Targets / Objectives:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    paraTitle: "T1 ",
    para: " -Child will consolidate all sounds and be able to apply these as initial medial and final sounds in vc cv and cvc words.The focus this term will be medial vowel e.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 3,
    paraTitle: "T2 ",
    para: "- Child will Improve auditory memory skills by means of sequencing and predication.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 4,
    paraTitle: "T3 ",
    para: "- Child will know and recognize the first 40 keywords and be able to use them orally in context and in written form relation to T1.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 5,
    paraTitle: "T4 ",
    para: "- Child will consolidate number and continue to develop those skills by adding and subtraction whith 20. Child will be able to recognize numbers up to 20 in both written and numerical form.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
];
export const StrategiesAndEvidence = [
  {
    id: 1,
    heading: "Strategies / Evidence:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2, listStyleType: "none" },
    },
    component: Typography,
  },
  {
    id: 2,
    para: " Use of Phonographix programme and letterland sounds consolidate / help retention.",
    component: Typography,
    md: 12,
  },
  {
    id: 3,
    para: "Tape recorder etc to produce and identify their own sounds.",
    componentProps: {
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    id: 4,
    para: "Sequencing pictures.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 5,
    para: "Memory games.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 5,
    para: "My Grandmother went to th market.",
    componentProps: {
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    id: 6,
    para: "Ladybird keywords.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 7,
    para: "Fishing game.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 8,
    para: "Busy bee.",
    componentProps: {
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    id: 9,
    para: "Deboys and Pitt early number work ideas.",
    component: Typography,
    md: 12,
  },
  {
    id: 10,
    para: "Multiple cubes.",
    component: Typography,
    md: 12,
  },
  {
    id: 11,
    para: "Practical number games within 20.",
    component: Typography,
    md: 12,
  },
  {
    id: 12,
    para: "Genesis Key Stage.",
    component: Typography,
    md: 12,
  },
];

// PEP Form Default Values
export const defaultValuesForPep = { 
  name: "",
  class: "",
  planDoneBy: "",
  assessmentDate: new Date(),
  pepDuration: {
    from: new Date(),
    to: new Date(),
  },
  overAllOutcome: "",
};

// PEP Validations
export const PEPFormValidation = Yup.object().shape({
  name: Yup.string().trim().required("Required"),
  class: Yup.string().trim().required("Required"),
  planDoneBy: Yup.string().trim().required("Required"),
  assessmentDate: Yup.date(),
  pepDuration: Yup.object().shape({
    from: Yup.date().required("Required"),
    to: Yup.date().required("Required"),
  }),
  overAllOutcome: Yup.string().trim().required("Required"),
});

// EHCP Form Default Values
export const defaultValuesForEhcp = {
  fosterPlacement: { date: new Date(), onfile: "", comments: "" },

  placementInfoRecord: { date: new Date(), onfile: "", comments: "" },

  localAuthorityPlacementPlan: { date: new Date(), onfile: "", comments: "" },

  localAuthorityRiskAssesssment: { date: new Date(), onfile: "", comments: "" },

  delegatedAuthority: { date: new Date(), onfile: "", comments: "" },

  claMedicalDate: { date: new Date(), onfile: "", comments: "" },

  claReviewDate: { date: new Date(), onfile: "", comments: "" },

  carePlanPt1: { date: new Date(), onfile: "", comments: "" },

  carePlanPt2: { date: new Date(), onfile: "", comments: "" },

  perDate: { date: new Date(), onfile: "", comments: "" },

  ehcpDate: { date: new Date(), onfile: "", comments: "" },

  pathwayPlan: { date: new Date(), onfile: "", comments: "" },

  garbPack: { date: new Date(), onfile: "", comments: "" },

};

// EHCP Validations
export const EHCPFormValidation = Yup.object().shape({
  fosterPlacement: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  placementInfoRecord: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  localAuthorityPlacementPlan: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  localAuthorityRiskAssesssment: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  delegatedAuthority: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  claMedicalDate: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  claReviewDate: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  carePlanPt1: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  carePlanPt2: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  perDate: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  ehcpDate: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  pathwayPlan: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
  garbPack: Yup.object().shape({
    date: Yup.date().required("Required"),
    onfile: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  }),
});

export { default as ClaDocumentationList } from "./ClaDocumentationTable";
