import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/SignaturePad";

const todayDate = dayjs().format("MM/DD/YYYY");
export const ParentAndChildFormDefaultValues = {
  nameOfApplicants: "",
  applicantsMotivation: "",
  applicantsUndersanding: "",
  accommodation: "",
  availableProvide: "",
  applicantsAccept: "",
  protectionAwarence: "",
  workCloselySensitively: "",
  provideObjective: "",
  parentChildTraining: "",
  summary: "",
  socialWorker: "",
  signed: "",
  date: new Date(todayDate),
  auditDate: new Date(todayDate),
  auditType: "",
  auditOutcome: "",
  participantsAudit: "",
  Agenda: "",
  recommendationsLevel: "",
  recommendationsType: "",
  meetingMinutes: "",
  details: "",
  updateMeetingRecord: null,
};

export const ParentAndChildFormData = [
  {
    gridLength: 6,
    componentProps: {
      label: "Name of applicatant(s)*",
      name: "nameOfApplicants",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 12,
    title: `What is the applicant(s) motivation to do parent and child fostering? What do
    they feel will be the rewards for them? *`,
    componentProps: {
      name: "applicantsMotivation",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `What is the applicant(s) understanding of what this kind of placement involves,
    and how will this impact on all family members? *`,
    componentProps: {
      name: "applicantsUndersanding",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Is the accommodation suitable for parent and child fostering, and how will the
    applicant(s) manage another adult living in their home?*`,
    componentProps: {
      name: "accommodation",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Could the applicant(s) be available to provide an appropriate level of
    supervision to ensure the safety of the child at all times?*`,
    componentProps: {
      name: "availableProvide",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Could the applicant(s) accept “good enough” parenting, and will they be
    comfortable allowing the parent to be the primary carer?*`,
    componentProps: {
      name: "applicantsAccept",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Do the applicant(s) have good child protection awareness, including up to date
    training, and the confidence to intervene where necessary?*`,
    componentProps: {
      name: "protectionAwarence",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Could the applicant(s) work closely and sensitively with birth parents in the context,
    including providing support and sharing any concerns?*`,
    componentProps: {
      name: "workCloselySensitively",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Do the applicant(s) have the ability to provide objective, evidance-based written records,
     and give evidence in court about these if necessary?*`,
    componentProps: {
      name: "provideObjective",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `What specific parent and child training or preparation has been provided for the applicant(s)?*`,
    componentProps: {
      name: "parentChildTraining",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Summary*`,
    componentProps: {
      name: "summary",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Name of Social Worker*",
      name: "socialWorker",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "diasabeledChoice", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    component: Typography,
  },

  {
    gridLength: 6,
    componentProps: {
      label: "signed(supervising social worker)*",
      name: "signed",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Dated*",
      name: "date",
      sx: { mb: 4, mt: 2 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    hr: true,
  },
  {
    gridLength: 12,
    heading: "Audit Data",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 4 },
    },
    component: Typography,
  },

  {
    gridLength: 6,
    componentProps: {
      label: "Audit Date",
      name: "auditDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Audit Type",
      name: "auditType",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "diasabeledChoice", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Audit Outcome",
      name: "auditOutcome",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "diasabeledChoice", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Participants of Audit",
      name: "participantsAudit",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Audit Agenda",
      name: "Agenda",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Audit Recommendations Level",
      name: "recommendationsLevel",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "diasabeledChoice", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Audit Recommendations Type",
      name: "recommendationsType",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "diasabeledChoice", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Audit Meeting Minutes",
      name: "meetingMinutes",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "diasabeledChoice", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 12,
    componentProps: {
      label: "Recommendation Details",
      name: "details",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    uploadPhoto: true,
  },
];
