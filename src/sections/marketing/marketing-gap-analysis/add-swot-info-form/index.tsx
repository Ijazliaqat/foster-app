import * as Yup from "yup";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  competitor: "",
  location: "",
  swotTopic: "",
  swotDuration: '',
  swotCompetitor: '',
  researcherRole: "",
  date: new Date(),
  strengths: "",
  weaknesses: "",
  opportunities: "",
  threats: "",
};
export const formSchema = Yup.object().shape({
  competitor: Yup.string().required("Field is required"),
  location: Yup.string().required("Field is required"),
  swotTopic: Yup.string().required("Field is required"),
  swotDuration: Yup.string().required("Field is required"),
  swotCompetitor: Yup.string().required("Field is required"),
  researcherRole: Yup.string().required("Field is required"),
  date: Yup.date().required("Field is required"),
  strengths: Yup.string().required("Field is required"),
  weaknesses: Yup.string().required("Field is required"),
  opportunities: Yup.string().required("Field is required"),
  threats: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Competitor",
      name: "competitor",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Location",
      name: "location",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "SWOT Topic",
      name: "swotTopic",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "SWOT Duration",
      name: "swotDuration",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "SWOT (Competitor)",
      name: "swotCompetitor",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Researcher (Role)",
      name: "researcherRole",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "date",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Strengths",
      name: "strengths",
      multiline: true,
      sx: { mb: 4 },
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Weaknesses",
      name: "weaknesses",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Opportunities",
      name: "opportunities",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Threats",
      name: "threats",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
];
