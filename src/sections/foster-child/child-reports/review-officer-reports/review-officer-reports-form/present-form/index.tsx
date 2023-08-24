import {
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";

export const PresentFormData = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "ReviewingOfficer",
      label: "Reviewing officer *",
      fullWidth: true,
      select: true,
      sx: { mt: 2 },
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
    componentProps: {
      name: "socialWorker",
      label: "Supervising social worker *",
      fullWidth: true,
      select: true,
      sx: { mt: 2 },
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "FosterCarers",
      label: "Foster Carer(s) *",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 12,
    componentProps: {
      label: "Other",
      name: "other",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
