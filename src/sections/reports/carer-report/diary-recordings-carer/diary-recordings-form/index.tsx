import dayjs from "dayjs";
import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/SignaturePad";

const todayDate = dayjs().format("MM/DD/YYYY");
export const DiaryRecordingFormDefaultValues = {
  carerName: "",
  childName: "",
  recordingDate: new Date(todayDate),
  recordingEntryType: "",
  status: "",
  recordingDetails: "",
  socialWorkerName: "",
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

export const DiaryRecordingFormData = [
  {
    gridLength: 6,
    componentProps: {
      label: "Carer Name",
      name: "carerName",
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
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Recording Date",
      name: "recordingDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Recording Entry Type",
      name: "recordingEntryType",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Stanis", label: "Stanis" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Status",
      name: "status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Stanis", label: "Stanis" }],
    component: RHFSelect,
    md: 6,
  },

  {
    gridLength: 12,
    componentProps: {
      label: "Recording Details",
      name: "recordingDetails",
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
      label: "Name of Social Worker",
      name: "socialWorkerName",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Stanis", label: "Stanis" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    heading: "",
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
      label: "signed(supervising social worker)*",
      name: "signed",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Date",
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
    componentProps: {
      sx: { mb: 4, mt: 4 },
    },
  },
];
