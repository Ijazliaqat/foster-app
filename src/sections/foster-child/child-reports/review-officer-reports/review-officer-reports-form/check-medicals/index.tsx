import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const CheckMedicalFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Notice: When undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)",
    otherOptions: {
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dbsFosterCarers",
      label: "DBS foster carers",
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
      name: "houshold",
      label: "DBS household members",
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
      name: "nonHoushold",
      label: "DBS non-household members",
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
      name: "updates",
      label: "DBS checks / updates",
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
      name: "Other",
      label: "Other",
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
    gridLength: 12,
    otherOptions: {
      name: "required",
      label: "If any required checks are not available or issues have arisen from the checks, please comment:",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
