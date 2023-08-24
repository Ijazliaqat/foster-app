import { RHFTextField } from "@root/components/hook-form";

export const recommendationFormData = [
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "required",
      label: "Recommendations made, action taken and outstanding actions (with timescale)",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: 2 },
    },
    component: RHFTextField,
  },
];
