import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";

// ===================================================================================
export const defaultValues = {
  carerName: "",
  time: new Date(),
  caseName: "",
  uploadDate: new Date(),
  submittedUploadDate: new Date(),
  Status: "",
  Minutes: "",
};

// =========================================================================================
export const administratorData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "carerName",
      label: "Carer Name (Code)",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "option 1", label: "Madiha Iffat" }],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Time",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFTimePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "caseName",
      label: "Case Name",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "option 1", label: "Case123" }],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date Minutes Completed",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date Submitted to chair for Recommendation",
      name: "submittedUploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "status",
      label: "Status",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "pending", label: "pending" }],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    requireFileUpload: true,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "minutes",
      label: "Minutes",
      multiline: true,
      minRows: 2,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];
