import { RHFTextField } from "@root/components/hook-form";

export const formFields = [
  {
    gridLength: 12,
    otherOptions: {
      label: "Complaits or Allegation during period under review",
      name: "allegation",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Significant changes/events for Carers since last review",
      name: "significantChanges",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Impact of Foresting On Family",
      name: "impact",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    heading: "Experience of working with birth parent(s)",
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Impact of Foresting On Family",
      name: "impact2",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    heading: "Working relationship with the Agency",
  },
  {
    gridLength: 12,
    otherOptions: {
      label:
        "What specific prepration / training have the carer/s to assist them to become foster carers (First Review ONLY)?",
      name: "prepration",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Support for Carers",
      name: "support",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    heading: "Working relationship with professional",
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Supervising Social Workers",
      name: "socialWorkers",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Other Professionals",
      name: "otherProfessionals",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Other Foster Carers",
      name: "otherFosterCarers",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Procedures",
      name: "procedures",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
];
