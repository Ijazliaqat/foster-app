import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

const todayDate = dayjs().format("MM/DD/YYYY");
export const SwotAnalysisFormDefaultValues = {
  reportDate: new Date(),
  topic: "",
  duration: '',
  competitor: '',
  date: new Date(),
  reviewerRole: "",
  reviewerDate: new Date(),
  strengths: "",
  weaknesses: "",
  opportunities: "",
  threats: "",
};
export const formSchema = Yup.object().shape({
  reportDate: Yup.date().required("Field is required"),
  topic: Yup.string().required("Field is required"),
  duration: Yup.string().required("Field is required"),
  competitor: Yup.string().required("Field is required"),
  date: Yup.date().required("Field is required"),
  reviewerRole: Yup.string().required("Field is required"), 
  strengths: Yup.string().required("Field is required"),
  weaknesses: Yup.string().required("Field is required"),
  opportunities: Yup.string().required("Field is required"),
  threats: Yup.string().required("Field is required"),
});

export const SwotAnalysisFormData = [
  {
    gridLength: 12,
    heading: "SWOT Analysis Info",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 4 },
    },
    component: Typography,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "SWOT Report Date",
      name: "reportDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "SWOT Topic",
      name: "topic",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "SWOT Duration",
      name: "duration",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {},
    label: "SWOT (Competitor)",
    uploadPhoto: true,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Date",
      name: "date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Reviewer Role",
      name: "reviewerRole",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "fosterCarer", label: "Foster Carer" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Review Date",
      name: "reviewerDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    componentProps: {
      label: "Strengths",
      name: "strengths",
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
      label: "Weaknesses",
      name: "weaknesses",
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
      label: "Opportunities",
      name: "opportunities",
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
      label: "Threats",
      name: "threats",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];
