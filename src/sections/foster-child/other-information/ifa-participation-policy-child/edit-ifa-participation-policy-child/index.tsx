import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const IfaParticipationPolicyData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfParticipation",
      label: "Date of Participatin",
      fullWidth: true,
      select: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "achievement",
      label: "Achievement",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "likeMost",
      label: "What did you like the most?",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "likeEvent",
      label: "What did you not like this event?",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },

  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "participationActivity",
      label: "Participation Activity",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
