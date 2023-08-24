import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const ViewOutSchoolActivityInfoData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "activityType",
      label: "Activity Type",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "From Date",
      name: "fromDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "To Date",
      name: "outOfDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "comments",
      multiline: true,
      fullWidth: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
