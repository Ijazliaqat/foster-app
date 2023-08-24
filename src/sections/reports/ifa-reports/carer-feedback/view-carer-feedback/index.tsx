import { Typography } from "@mui/material";
import SignaturePad from "@root/components/SignaturePad";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
const todayDate = dayjs().format("MM/DD/YYYY");

export const CarerFeedbackDefaultValues = {
  employeeName: "John Doe",
  position: "junior FE developer",
  lineManager: "John smith",
  productivity: "Text",
  communication: "",
  cooperation: "Text",
  reliability: "",
  judgement: "Text",
  support: "",
  comments: "",
  riskName: "John Doe",
  date: new Date(todayDate),
  sign: "",
};
export const CarerFeedbackFormData = [
  {
    gridLength: 6,
    componentProps: {
      name: "employeeName",
      label: "Employee Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Position",
      name: "position",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Line Manager",
      name: "lineManager",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Productivity",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 12,
    title: `Overall handling of multiple priorites.`,
    componentProps: {
      name: "productivity",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Communication",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 12,
    title: `Exhibits good listening and comprehension skills Effectively 
    expresses oneself in all written and oral communications
    `,
    componentProps: {
      name: "productivity",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Cooperation/Teamwork ",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 12,
    title: `Builds positive working relationships with yourselves, children and young people, colleagues, and professionals.
    `,
    componentProps: {
      name: "communication",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Reliability",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 12,
    title: `The extent to which the employee can be depended upon to complete work, projects or assignments on time. The degree to which the employee is reliable,
    punctual and ability to follow through as needed`,

    componentProps: {
      name: "reliability",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Support",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 12,
    title: `How well the SSW supports youself and the children in your care`,

    componentProps: {
      name: "reliability",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    gridLength: 12,
    componentProps: {
      label: `Comments`,
      name: "comments",
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
      label: "Name of risk",
      name: "riskName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Date ",
      name: "date",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    title: "Sign",
    componentProps: {
      name: "sign",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
];
