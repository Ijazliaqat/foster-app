import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const ReviewFormData = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "fra",
      label: "FR-A: Supervising social worker *",
      fullWidth: true,
      select: true,
      sx: { mt: 2 },
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 2,
    heading:
      "Notice: When undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)",
    componentProps: {
      sx: { mb: -2 },
    },
    component: Typography,
  },
  {
    id: 3,
    gridLength: 12,
    componentProps: {
      name: "frb",
      label: "FR-B: Foster carer *",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 4,
    heading:
      "Notice: Paragraph 5.68 of the Statutory Guidance requires the fostering service to support the children of foster carers.",
    componentProps: {
      sx: { mb: -2 },
    },
    component: Typography,
  },
  {
    id: 5,
    gridLength: 12,
    componentProps: {
      name: "frc",
      label: "FR-C: Child/young person in the household *",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 6,
    heading:
      "Notice: When undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carers)",
    componentProps: {
      sx: { mb: -2 },
    },
    component: Typography,
  },
  {
    id: 7,
    gridLength: 12,
    componentProps: {
      name: "frd",
      label: "FR-D: Fostered child or young person",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 8,
    heading:
      "Notice: When undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the placing authority for any child placed within the preceding year.",
    componentProps: {
      sx: { mb: -2 },
    },
    component: Typography,
  },
  {
    id: 9,
    gridLength: 12,
    componentProps: {
      name: "fre",
      label: "FR-E: Child's social worker",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 12,
    componentProps: {
      name: "frf",
      label: "FR-F: Additional reports",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 12,
    componentProps: {
      name: "comments",
      label: "if any required reports are not available, please comment:",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
