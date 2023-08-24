import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const annualReviewD = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "particularIssues",
      label: "Particular issues arising from placements:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "trainingIssues",
      label: "Training Issues:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    title: "Safety Issues",
    gridLength: 6,
    otherOptions: {
      name: "lastHealthAndSafetyDate",
      label: "Last Health and Safety Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "equipment",
      label: "Equipment:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "generalCommentsOnPlacements",
      label: "General Comments on Placements:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "supervisingSocialWorkerRecom",
      label: "Supervising Social Worker Recommendation",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "implications",
      label: "Implications and decisions for the future:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "reviewOfficerComments",
      label: "Review Officer Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "panelRecommendation",
      label: "Panel panelRecommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "needForChangeInCurrentTerms",
      label: "Need for change in Current Terms of Approval:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "targetDateForConsideration",
      label: "Target Date for consideration by Agency Panel:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "birthChildrenComments",
      label: "Birth Children Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      name: "CLAComments",
      label: "CLA Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerComments",
      label: "Foster Carer Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 12,
    otherOptions: {
      name: "IROComments",
      label: "IRO Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 12,
    otherOptions: {
      name: "finalOutcome",
      label: "Final Outcome:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as AnnualReviewD } from "./AnnualReviewD";

export const formatters: any = {};

for (const formControl of annualReviewD) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  particularIssues: "",
  trainingIssues: "",
  lastHealthAndSafetyDate: new Date(),
  equipment: "",
  generalCommentsOnPlacements: "",
  supervisingSocialWorkerRecom: "",
  implications: "",
  reviewOfficerComments: "",
  panelRecommendation: "",
  needForChangeInCurrentTerms: "",
  targetDateForConsideration: new Date(),
  birthChildrenComments: "",
  CLAComments: "",
  fosterCarerComments: "",
  IROComments: "",
  finalOutcome: "",
};

export const formSchema = Yup.object().shape({
  particularIssues: Yup.string().required("required"),
  trainingIssues: Yup.string().required("required"),
  lastHealthAndSafetyDate: Yup.date().required("required"),
  equipment: Yup.string().required("required"),
  generalCommentsOnPlacements: Yup.string().required("required"),
  supervisingSocialWorkerRecom: Yup.string().required("required"),
  implications: Yup.string().required("required"),
  reviewOfficerComments: Yup.string().required("required"),
  panelRecommendation: Yup.string().required("required"),
  needForChangeInCurrentTerms: Yup.string().required("required"),
  targetDateForConsideration: Yup.date().required("required"),
  birthChildrenComments: Yup.string().required("required"),
  CLAComments: Yup.string().required("required"),
  fosterCarerComments: Yup.string().required("required"),
  IROComments: Yup.string().required("required"),
  finalOutcome: Yup.string().required("required"),
});
