import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const exemptionsFormData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "exemptions",
      label: "Were there any exemptions or placements outside the carer's terms of approval (unlawful placements)",
      sx: { mt: 2 },
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "required",
      label:
        "If yes, please provide details and any action required *",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 2 },
    },
    component: RHFTextField,
  },
];
