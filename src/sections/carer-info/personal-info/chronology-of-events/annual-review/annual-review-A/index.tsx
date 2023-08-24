import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const annualReviewAData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "reviewWrittenBy",
      label: "Review Writtern by (if other than the Supervising Social Worker)",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    otherOptions: {
      name: "reviewType",
      label: "Review Type",
      select: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
    ],
  },
  {
    id: 3,
    otherOptions: {
      name: "onFile",
      label: "On Fire:",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "reviewDate",
      label: "Review Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "nextReviewDate",
      label: "Next Review Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "previousReviewDate",
      label: "Previous Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "confirmationReviewDate",
      label: "Confirmation of Review Held Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 8,
    otherOptions: {
      name: "isReviewTakenPlace",
      label: "Has Review Taken Place:",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "purposeOfReview",
      label: "Purpose Of Review:",
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
      name: "independentReviewOffer",
      label: "Independent Review Offer:",
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
      name: "nextPanelDate",
      label: "Next Panel Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "previousPanelDate",
      label: "Previous Panel Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 13,
    gridLength: 6,
    otherOptions: {
      name: "currentApprovalDate",
      label: "Current Approval Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 14,
    otherOptions: {
      name: "termOfApproval",
      label: "Terms Of Approval:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
  {
    id: 15,
    gridLength: 12,
    otherOptions: {
      name: "petsInfo",
      label: "Pets Info:",
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
      name: "previousReviewOfficerRecom",
      label: "Previous Panel Recommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 12,
    otherOptions: {
      name: "previousPanelRecom",
      label: "Previous Panel Recommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 18,
    gridLength: 12,
    otherOptions: {
      name: "issuesForDiscussionAtReviewTime",
      label: "Issues for Discussion at Review Time:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 19,
    gridLength: 12,
    otherOptions: {
      name: "datesOfSupervisingSocialWorkerVisits",
      label: "Dates of supervising Social Worker Visits:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 20,
    gridLength: 12,
    otherOptions: {
      name: "datesOfUnannouncedVisit",
      label: "Dates of Unannounced Visit:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 21,
    otherOptions: {
      name: "isSafeCaringPolicyUpToDate",
      label: "Safe Caring Policy is Up to Date?",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 22,
    gridLength: 12,
    otherOptions: {
      name: "meetings",
      label: "Meetings:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 23,
    gridLength: 6,
    otherOptions: {
      name: "roomsUsedForPurposeOfFostering",
      label: "Number of rooms currently used for the purpose of fostering?",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 24,
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerCurrentPlacement",
      label: "Foster Carer Current Placement:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 25,
    gridLength: 12,
    otherOptions: {
      name: "sleepingArrangments",
      label: "Sleeping Arragements:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 26,
    otherOptions: {
      name: "isCarerRegisteredChildminder",
      label: "Is Carer a Regsitered Childminder?",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
];
export { default as AnnualReviewA } from "./AnnualReviewA";

export const formatters: any = {};

for (const formControl of annualReviewAData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  reviewWrittenBy: "",
  reviewType: "",
  onFile: null,
  reviewDate: new Date(),
  nextReviewDate: new Date(),
  previousReviewDate: new Date(),
  confirmationReviewDate: new Date(),
  isReviewTakenPlace: null,
  purposeOfReview: "",
  independentReviewOffer: "",
  nextPanelDate: new Date(),
  previousPanelDate: new Date(),
  currentApprovalDate: new Date(),
  termOfApproval: "",
  petsInfo: "",
  previousReviewOfficerRecom: "",
  previousPanelRecom: "",
  issuesForDiscussionAtReviewTime: "",
  datesOfSupervisingSocialWorkerVisits: "",
  datesOfUnannouncedVisit: "",
  isSafeCaringPolicyUpToDate: null,
  meetings: "",
  roomsUsedForPurposeOfFostering: "",
  fosterCarerCurrentPlacement: "",
  sleepingArrangments: "",
  isCarerRegisteredChildminder: null,
};

export const formSchema = Yup.object().shape({
  reviewWrittenBy: Yup.string().required("required"),
  reviewType: Yup.string().required("required"),
  onFile: Yup.boolean().required("required"),
  reviewDate: Yup.date().required("required"),
  nextReviewDate: Yup.date().required("required"),
  previousReviewDate: Yup.date().required("required"),
  confirmationReviewDate: Yup.date().required("required"),
  isReviewTakenPlace: Yup.boolean().required("required"),
  purposeOfReview: Yup.string().required("required"),
  independentReviewOffer: Yup.string().required("required"),
  nextPanelDate: Yup.date().required("required"),
  previousPanelDate: Yup.date().required("required"),
  currentApprovalDate: Yup.date().required("required"),
  termOfApproval: Yup.string().required("required"),
  petsInfo: Yup.string().required("required"),
  previousReviewOfficerRecom: Yup.string().required("required"),
  previousPanelRecom: Yup.string().required("required"),
  issuesForDiscussionAtReviewTime: Yup.string().required("required"),
  datesOfSupervisingSocialWorkerVisits: Yup.string().required("required"),
  datesOfUnannouncedVisit: Yup.string().required("required"),
  isSafeCaringPolicyUpToDate: Yup.boolean().required("required"),
  meetings: Yup.string().required("required"),
  roomsUsedForPurposeOfFostering: Yup.string().required("required"),
  fosterCarerCurrentPlacement: Yup.string().required("required"),
  sleepingArrangments: Yup.string().required("required"),
  isCarerRegisteredChildminder: Yup.boolean().required("required"),
});

export const personalDetails = [
  {
    id: 1,
    label: "Enter Name (Code):",
    name: "Sangeetha, Subramanian (FCC-3)",
  },
  {
    id: 2,
    label: "Address:",
    name: "119 Brampton Road Bexleyheath, KENT DA7 4SL",
  },
  {
    id: 3,
    label: "Supervising Social Worker:",
    name: "Not Assigned",
  },
  {
    id: 4,
    label: "Phone:",
    name: "0741565874",
  },
  {
    id: 5,
    label: "Mobile:",
    name: "0741565874",
  },
  {
    id: 6,
    label: "Email:",
    name: "Sangeetha3012@gmail.com",
  },
];
