import { Typography } from "@mui/material";
import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";

export const CarerSectionBDefultValue = {
  childrenCaring: "Text",
  workingTeam: "Text",
  traningPersonalDevelopment: "Text",
  carerPersonalIssues: "Text",
  agencyIssues: "Text",
  ProvidingSafeCareIssues: "Text",
  concerns: "Text",
  careDay: "Text",
  medicationSheetCheck: "",
  commentsSupervision: "Text",
  lineManager: "Text",
};

export const CarerSectionBFromDate = [
  {
    gridLength: 12,
    title: "Caring of Children",
    componentProps: {
      name: "childrenCaring",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Working as part of a team",
    componentProps: {
      name: "workingTeam",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Training & Personal Development",
    componentProps: {
      name: "traningPersonalDevelopment",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Carer Personal Issues",
    componentProps: {
      name: "carerPersonalIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Agency Issues",
    componentProps: {
      name: "agencyIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Providing a Safe Environment / Safe Care Issues",
    componentProps: {
      name: "ProvidingSafeCareIssues",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Concern / Allegation / Commendations",
    componentProps: {
      name: "concerns",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Day Care / Household Respite Carer and Respite Training",
    componentProps: {
      name: "careDay",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "medicationSheetChecked",
      label: (
        <Typography sx={(theme) => style.checkboxText(theme)}>
          Medication Sheet Checked
        </Typography>
      ),
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Foster Carer comments on Supervision",
    componentProps: {
      name: "commentsSupervision",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Line Manager's Comments on Supervision",
    componentProps: {
      name: "lineManager",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];
const style = {
  checkboxText: (theme: any) => ({
    fontWeight: 500,
    fontSize: "14px",
    color: "#898989 ",
  }),
};
