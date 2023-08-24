import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const EditPersonalEducationPlanData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "school",
      label: "School",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "PEP Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "onFile",
      label: "On File",
      fullWidth: true,
      select: true,
    },
    options: [{value: 'o level', label:"O Level"}],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Principal Name",
      name: "principalName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "comments",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
