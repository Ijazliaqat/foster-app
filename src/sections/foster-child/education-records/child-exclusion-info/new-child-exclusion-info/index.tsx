import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COURSEATTENDED } from "@root/dropdown-data/courseAttended";

export const NewTrainingProfileData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "classStudying",
      label: "Class Studying (School)",
      fullWidth: true,
      select: true,
    },
    options: [{value: 'o level', label:"O Level"}],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "type",
      label: "Type of Exclusion",
      fullWidth: true,
      select: true,
    },
    options: [{value: 'o level', label:"O Level"}],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Date Exclusion",
      name: "dateExclusion",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Date of Return",
      name: "dateReturn",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      label: "Exclusion Details",
      name: "exclusionDetails",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      label: "Action Taken",
      name: "actionTaken",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      label: "Outcome",
      name: "outcome",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
