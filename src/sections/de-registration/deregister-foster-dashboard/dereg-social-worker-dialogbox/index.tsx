import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";


export const SOCIALWORKERFORMDATA = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "SW Name",
      name: "socialWorkerName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Role",
      name: "socialWorkerRole",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "De-reg Assessment Date",
      name: "assessmentDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Foster Carer Name",
      name: "fosterCarerName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      defaultValue: "No",
      label: "De-reg Assessment Outcome:",
      name: "assessmentOutcome",
      options: ["Passed", "Failed", "Pending"],
    },
    component: RHFRadioGroupWithLabel,
  },
];
