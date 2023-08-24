import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const formFields = [
  {
    gridLength: 12,
    otherOptions: {
      label: "Particular issues arising from placements:",
      name: "particularIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Training Issues:",
      name: "trainingIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    heading: "Safety Issues",
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Last Health and Safety Date:",
      name: "safetyDate",
      sx: { mb: 4}
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Equipment:",
      name: "equipment",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "General Comments on Placements:",
      name: "generalComments",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Supervising Social Worker Recommendations:",
      name: "supervising",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Implications and descions for the future:",
      name: "descions",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Review Officer Comments:",
      name: "officerComments",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Pannel Recommendation:",
      name: "pannelRecommendation",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Need for Change in Current Terms of Approval:",
      name: "termsApproval",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Target Date for considration by Agency Pannel:",
      name: "targetDate",
      sx: { mb: 4}
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Birth Children Comments:",
      name: "childrenComments",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "CLA Comments:",
      name: "claComments",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Foster Carer Comments:",
      name: "carerComments",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "IRO Comments:",
      name: "iroComments",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Final Outcome:",
      name: "finalOutcome",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Category",
      name: "category",
      select: true,
      options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
      
    },
    component: RHFSelect,
  },
  {
    tag: <br />,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Home Visit Type",
      name: "homeVisitType",
      select: true,
      options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
      sx: { mb: 4}
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Home Visit Status",
      name: "homeVisitStatus",
      select: true,
      options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
      sx: { mb: 4}
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Visit:",
      name: "visitDate",
      sx: { mb: 4}
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "fileSeen",
      label: "Home File Seen",
      sx: { mb: 4}
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "sheetChecked",
      label: "Medication Sheet Checked",
      sx: { mb: 4}
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "authorityFeedback",
      label: "Local Authority Feedback Required",
      sx: { mb: 4}
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Nature of Visit:",
      name: "natureOfVisit",
      multiline: true,
      minRows: 3,
      sx: { mb: 4}
    },
    component: RHFTextField,
  },
];
