import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const OtherDocumentsFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Notice: Depending on the policy of the fostering service, the reviewing officer may be required to check other documents, such as:",
    otherOptions: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "safetCheck",
      label: "Foster home safety check",
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "commentsOne",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "unannouncedVisit",
      label: "Unannounced visit",
      fullWidth: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "commentsTwo",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "safetyPlan",
      label: "Fire safety plan",
      fullWidth: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "commentsThree",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "caringPolicy",
      label: "Family safer caring policy",
      fullWidth: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "commentsFour",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "PetAssessments",
      label: "Pet assessments",
      fullWidth: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "commentsFive",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "SmokingAgreement",
      label: "Smoking agreement",
      fullWidth: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "commentsSix",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 6,
    otherOptions: {
      name: "PersonalDevelopment",
      label: "Personal development plan",
      fullWidth: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      name: "commentsSeven",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      name: "CompletedtSDS",
      label: "Completed TSDS",
      fullWidth: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 16,
    gridLength: 6,
    otherOptions: {
      name: "commentsFive",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 12,
    otherOptions: {
      name: "required",
      label:
        "If any of these required documents are not available or issues have arisen from them, please comment:",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 2 },
    },
    component: RHFTextField,
  },
];
