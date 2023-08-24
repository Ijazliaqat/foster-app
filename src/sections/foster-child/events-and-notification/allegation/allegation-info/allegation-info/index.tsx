import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import dayjs from "dayjs";
import * as Yup from "yup";

const todayDate = dayjs().format("MM/DD/YYYY");

export const allegationInfoFormValues = {
  allegationAgainstPersonCategory: "",
  allegationAgainstPerson: "",
  allegationDate: todayDate,
  agencyReportedDate: todayDate,
  reviewDate: todayDate,
  natureOfAllegation: "",
  personNotifiedAgency: "",
  personCompletedReport: "",
  agencySocialWorkerInvolved: "",
  childLocalAuthority: "",
  carerLocalAuthority: "",
  allegationDetails: "",
  investigationUndertaken: "",
  independentSupportInfo: "",
  agencyActionTaken: "",
  allegationOutcome: "",
  isThisSubstained: "",
  teamManagerRecommendation: "",
  hasRegisteredManagerInformed: false,
  registeredManagerInformedDate: todayDate,
  hasOfstedBeenInformed: false,
  ofstedNotifiedDate: todayDate,
  isSchedule: false,
  reportedTo: "",
  registeredManagerRecommendation: "",
  closureDate: todayDate,
  nextAlertDate: todayDate,
  status: "",
};

export const defaultValueAllegationInfoForm = (
  data: any = allegationInfoFormValues
) => {
  return {
    allegationAgainstPersonCategory: data?.allegationAgainstPersonCategory,
    allegationAgainstPerson: data?.allegationAgainstPerson,
    allegationDate: new Date(data?.allegationDate),
    agencyReportedDate: new Date(data?.agencyReportedDate),
    reviewDate: new Date(data?.reviewDate),
    natureOfAllegation: data?.natureOfAllegation,
    personNotifiedAgency: data?.personNotifiedAgency,
    personCompletedReport: data?.personCompletedReport,
    agencySocialWorkerInvolved: data?.agencySocialWorkerInvolved,
    childLocalAuthority: data?.childLocalAuthority,
    carerLocalAuthority: data?.carerLocalAuthority,
    allegationDetails: data?.allegationDetails,
    investigationUndertaken: data?.investigationUndertaken,
    independentSupportInfo: data?.independentSupportInfo,
    agencyActionTaken: data?.agencyActionTaken,
    allegationOutcome: data?.allegationOutcome,
    isThisSubstained: data?.isThisSubstained,
    teamManagerRecommendation: data?.teamManagerRecommendation,
    hasRegisteredManagerInformed: data?.hasRegisteredManagerInformed,
    registeredManagerInformedDate: new Date(
      data?.registeredManagerInformedDate
    ),
    hasOfstedBeenInformed: data?.hasOfstedBeenInformed,
    ofstedNotifiedDate: new Date(data?.ofstedNotifiedDate),
    isSchedule: data?.isSchedule,
    reportedTo: data?.reportedTo,
    registeredManagerRecommendation: data?.registeredManagerRecommendation,
    closureDate: new Date(data?.closureDate),
    nextAlertDate: new Date(data?.nextAlertDate),
    status: data?.status,
  };
};

export const allegationInfoFormSchema: any = Yup.object().shape({
  allegationAgainstPersonCategory: Yup.string()
    .trim()
    .required("Allegation against person category is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  allegationAgainstPerson: Yup.string()
    .trim()
    .required("Allegation against person is required")
    .min(1, "Mininum 1 characters")
    .max(400, "Maximum 400 characters"),
  allegationDate: Yup.date()
    .typeError("Allegation date  is required")
    .required("Allegation date is required"),
  agencyReportedDate: Yup.date()
    .typeError("Agency report date  is required")
    .required("Agency report date is required"),
  reviewDate: Yup.date()
    .typeError("Review date is required")
    .required("Review date is required"),
  natureOfAllegation: Yup.string()
    .trim()
    .required("Nature of allegation  is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  personNotifiedAgency: Yup.string()
    .trim()
    .required("Person notified is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  personCompletedReport: Yup.string()
    .trim()
    .required("Person completed report is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  agencySocialWorkerInvolved: Yup.string()
    .trim()
    .required("Agency social worker involved  is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  childLocalAuthority: Yup.string().required(
    "Child local authority is required"
  ),
  carerLocalAuthority: Yup.string().required(
    "Carer local authority is required"
  ),
  allegationDetails: Yup.string()
    .trim()
    .required("Allegation detail is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  investigationUndertaken: Yup.string()
    .required("Investigation undertaken is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  independentSupportInfo: Yup.string()
    .required("Independent support info is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  agencyActionTaken: Yup.string()
    .required("Agency action taken info is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  allegationOutcome: Yup.string()
    .required("allegation outcome info is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  isThisSubstained: Yup.string().required("Is this substained is required"),
  teamManagerRecommendation: Yup.string()
    .trim()
    .required("Team manager recommendation is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  hasRegisteredManagerInformed: Yup.boolean().required(
    "Has registered manager informed is required"
  ),
  registeredManagerInformedDate: Yup.date()
    .typeError("Registered manager informed date is required")
    .required("Registered manager informed date is required"),
  hasOfstedBeenInformed: Yup.boolean().required(
    "Has ofsted been informed informed is required"
  ),
  ofstedNotifiedDate: Yup.date()
    .typeError("Ofsted notified date is required")
    .required("Ofsted notified date is required"),
  isSchedule: Yup.boolean().required("Is schedule informed is required"),
  reportedTo: Yup.string()
    .required("Reported to is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  registeredManagerRecommendation: Yup.string()
    .required("Registered manager recommendation info is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  closureDate: Yup.date()
    .typeError("closure date is required")
    .required("closure date is required"),
  nextAlertDate: Yup.date()
    .typeError("Next alert date is required")
    .required("Next alert date is required"),
});

export const allegationInfoFormDataFunction = (isFieldDisable = false) => [
  {
    id: 1,
    componentProps: {
      fullWidth: true,
      name: "allegationAgainstPersonCategory",
      label: "Allegation against person category",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    component: RHFTextField,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "allegationAgainstPerson",
      label: "Allegation against person",
    },
  },
  {
    id: 3,
    componentProps: {
      name: "allegationDate",
      label: "Allegation Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 4,
    componentProps: {
      name: "agencyReportedDate",
      label: "Agency Reported Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 5,
    componentProps: {
      name: "reviewDate",
      label: "Review Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
    componentProps: {
      fullWidth: true,
      name: "natureOfAllegation",
      label: "Nature of Allegation",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      fullWidth: true,
      name: "personNotifiedAgency",
      label: "Person Notified to Agency",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 8,
    component: RHFTextField,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "personCompletedReport",
      label: "Person Completing Report",
    },
  },
  {
    id: 10,
    componentProps: {
      fullWidth: true,
      name: "agencySocialWorkerInvolved",
      label: "Agency Social Worker Involved",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 11,
    componentProps: {
      fullWidth: true,
      name: "childLocalAuthority",
      label: "Child Local Authority",
      select: true,
      options: [
        {
          id: 1,
          label: "Option 1",
          text: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
          text: "Option 2",
        },
      ],
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFSelect,
  },
  {
    id: 12,
    componentProps: {
      fullWidth: true,
      name: "carerLocalAuthority",
      label: "Carer Local Authority",
      select: true,
      options: [
        {
          id: 1,
          label: "Option 1",
          text: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
          text: "Option 2",
        },
      ],
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFSelect,
  },
  {
    id: 13,
    componentProps: {
      fullWidth: true,
      name: "allegationDetails",
      label: "Allegation Details",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 14,
    componentProps: {
      fullWidth: true,
      name: "investigationUndertaken",
      label: "Investigation Undertaken",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 15,
    componentProps: {
      fullWidth: true,
      name: "independentSupportInfo",
      label: "Independent Support Offered Info",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 16,
    componentProps: {
      fullWidth: true,
      name: "agencyActionTaken",
      label: "Agency Action Taken",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 17,
    componentProps: {
      fullWidth: true,
      name: "allegationOutcome",
      label: "Allegation Outcome",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 18,
    componentProps: {
      fullWidth: true,
      name: "isThisSubstained",
      label: "Is This Substantiated",
      select: true,
      options: [
        {
          id: 1,
          label: "Option 1",
          text: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
          text: "Option 2",
        },
      ],
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFSelect,
  },
  {
    id: 19,
    componentProps: {
      fullWidth: true,
      name: "teamManagerRecommendation",
      label: "Team Manager Recommendation",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 20,
    gridLength: 6,
    componentProps: {
      label: "Has Registered Manager Informed",
      name: "hasRegisteredManagerInformed",
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },

    component: RHFRadioGroupWithLabel,
  },
  {
    id: 21,
    componentProps: {
      name: "registeredManagerInformedDate",
      label: "Registered Manager Informed Date:",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 22,
    gridLength: 6,
    componentProps: {
      label: "Has Ofsted Been Informed:",
      name: "hasOfstedBeenInformed",
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },

    component: RHFRadioGroupWithLabel,
  },
  {
    id: 23,
    componentProps: {
      label: "Ofsted Notified Date",
      name: "ofstedNotifiedDate",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 24,
    gridLength: 6,
    componentProps: {
      label: "Is Scheduled:",
      name: "isSchedule",
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },

    component: RHFRadioGroupWithLabel,
  },
  {
    id: 25,
    componentProps: {
      fullWidth: true,
      name: "reportedTo",
      label: "Reported To",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 26,
    componentProps: {
      fullWidth: true,
      name: "registeredManagerRecommendation",
      label: "Registered Manager Recommendation",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 27,
    componentProps: {
      label: "Closure Date",
      name: "closureDate",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 28,
    componentProps: {
      label: "Next Alert Date",
      name: "nextAlertDate",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
];
