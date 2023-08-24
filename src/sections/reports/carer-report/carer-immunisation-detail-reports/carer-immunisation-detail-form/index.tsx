import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/SignaturePad";

const todayDate = dayjs().format("MM/DD/YYYY");
export const CarerImmunisationDetailDefaultValues = {
  immunisationDate: new Date(todayDate),
  dueDate: new Date(todayDate),
  immunisationType:"",
  location:"",
  immunisationDetails:"",
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

export const CarerImmunisationDetailFormValues = [
  {
    gridLength: 6,
    componentProps: {
      label:"Date Of Immunisation",
      name: "immunisationDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label:"Due Date",
      name: "dueDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Immunisation Type",
      name: "immunisationType",
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
      label: `Location`,
      name: "location",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    componentProps: {
      label: `Immunisation Details`,
      name: "immunisationDetails",
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
      label: "Name of Social Worker* ",
      name: "socialWorkerName",
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
      label: "Date",
      name: "date",
      sx: { mb: 4,mt:2  },
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
