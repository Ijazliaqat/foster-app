import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

export const formFields = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Child Code",
      name: "childCode",
      select: true,
      options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
      sx: { mb: 4 },
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    heading:
      "What are the needs of this Child/Young Person? How has the Carer met these needs over the course of the placements",
  },
  {
    gridLength: 12,
    heading: "Identity Religion",
  },
  {
    gridLength: 12,
    otherOptions: {
      label:
        "(If a trans-racial placement, how is the child’s needs being met)",
      name: "childNeeds",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Independence Seld-care Skills",
      name: "seldCareSkills",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Social Presentation Leisure Skills",
      name: "leisureSkills",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Contact",
      name: "contact",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Other issues or Concerns",
      name: "otherIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Statement from Child/Young Person",
      name: "statementFromPerson",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    heading: "Audit Data",
    sx: { color: "#69BBB7", fontSize: "16px", fontWeight: "600" },
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Audit Date",
      name: "auditDate",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Audit Type",
      name: "auditType",
      select: true,
      options: [{ value: "Select", label: "Select" }],
      sx: { mb: 4 },
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Audit Outcome",
      name: "auditOutcome",
      select: true,
      options: [{ value: "Select", label: "Select" }],
      sx: { mb: 4 },
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Participants of Audit",
      name: "participantOfAudit",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Audit Agenda",
      name: "auditAgenda",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Audit Recommendations Level",
      name: "auditRecommendationsLevel",
      select: true,
      options: [{ value: "Select", label: "Select" }],
      sx: { mb: 4 },
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Audit Recommendations Type",
      name: "auditRecommendationsType",
      select: true,
      options: [{ value: "Select", label: "Select" }],
      sx: { mb: 4 },
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Audit Meeting Minutes",
      name: "auditMeetingMinutes",
      select: true,
      options: [{ value: "Select", label: "Select" }],
      sx: { mb: 4 },
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Recommendations Details",
      name: "recommendationsDetails",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Upload Meeting Record",
      name: "uploadMeetingRecord",
    },
    // component: RHFUploadFile,
    requireFileUpload: true,
    sx: { mb: 4 },
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Due Date",
      name: "dueDate",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
  },
];
