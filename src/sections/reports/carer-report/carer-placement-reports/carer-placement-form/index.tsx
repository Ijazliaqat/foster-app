import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
export const CarerPlacementDefaultValues = {
  primaryCarer: "",
  pFamilyName: "",
  primaryCarerEthnicity: "",
  pAge: "",
  secondaryCarer: "",
  sFamilyName: "",
  secondaryCarerEthnicity: "",
  sAge: "",
  childName: "",
  DOB: new Date(todayDate),
  disability: "",
  placementDate: new Date(todayDate),
  placementType: "",
  placementEndDate: new Date(todayDate),
  localAuthority: "",
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

export const RecordCriiticalIncidentFormValues = [
  {
    gridLength: 6,
    componentProps: {
      label: "Primary Carer *",
      name: "primaryCarer",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Family Name *",
      name: "pFamilyName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Primaty Carer Ethencity*",
      name: "primaryCarerEthnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "johnDoe", label: "john Doe" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Age *",
      name: "pAge",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Secondary Carer *",
      name: "secondaryCarer",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Family Name *",
      name: "sFamilyName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Second Carer Ethencity*",
      name: "secondaryCarerEthnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "johnDoe", label: "john Doe" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Age *",
      name: "sAge",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },

  {
    gridLength: 6,
    componentProps: {
      label: "Child Name",
      name: "childName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "D.O.B *",
      name: "DOB",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Disability*",
      name: "disability",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "diasabeledChoice", label: "Child Protection Enquiry" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Placement Date*",
      name: "placementDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Placement Type *",
      name: "placementType",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "diasabeledChoice", label: "Child Protection Enquiry" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Placement End Date*",
      name: "placementEndDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },

  {
    gridLength: 24,
    componentProps: {
      label: `Local Authority`,
      name: "localAuthority",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
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
