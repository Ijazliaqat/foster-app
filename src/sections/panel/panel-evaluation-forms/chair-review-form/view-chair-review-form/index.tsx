import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
// utils

// ----------------------------------------------------------------------

export const ChairReviewFormData = [
  {
    gridLength: 6,
    otherOptions: { name: "version", label: "Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of inclusion on central list:",
      name: "authorSignatureDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Dates of panels attended in the last year",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Strength as a panel chair",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Areas of change and / or for development by the panel chair",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "How and by when will these be achieved",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Any changes to be made by the agency",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "How and when will these be achieved",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Input and training planned",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "version", label: "Signature of Panel Chair", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "version", label: "Agency Decision-maker", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "authorSignatureDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },

];
