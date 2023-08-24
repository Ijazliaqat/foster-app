import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  caringChildren: "Text",
  partOfTeam: "Text",
  personalDevelopment: "Text",
  personalIssues: "Text",
  agencyIssues: "Text",
  safeEnvironment: "Text",
  allegations: "Text",
  dayCare: "Text",
  medicationChecked: true,
  fosterComment: "Text",
  managerComment: "Text",
};

export const FormSchema = Yup.object().shape({
  caringChildren: Yup.string().required("required"),
  partOfTeam: Yup.string().required("required"),
  personalDevelopment: Yup.string().required("required"),
  personalIssues: Yup.string().required("required"),
  agencyIssues: Yup.string().required("required"),
  safeEnvironment: Yup.string().required("required"),
  allegations: Yup.string().required("required"),
  dayCare: Yup.string().required("required"),
  medicationChecked: Yup.boolean().required("required"),
  fosterComment: Yup.string().required("required"),
  managerComment: Yup.string().required("required"),
});

export const carerSectionBetaData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "caringChildren",
      label: "Caring of Children:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "partOfTeam",
      label: "Working as part of a team:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "personalDevelopment",
      label: "Training & Personal Development:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "personalIssues",
      label: "Carer Personal Issues:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "agencyIssues",
      label: "Agency Issues:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "safeEnvironment",
      label: "Providing a Safe Enviroment / Safe Care Issues:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "allegations",
      label: "Concerns / Allegations / Commendations:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "dayCare",
      label: "Day Care / Household Respite Carer and Respite Training:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    otherOptions: {
      name: "medicationChecked",
      label: "Medication Sheet Checked",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "fosterComment",
      label: "Foster Carer comments on Supervision:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "managerComment",
      label: "Line Managers's Comments on Supervision",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as CarerSectionBeta } from "./CarerSectionB";
