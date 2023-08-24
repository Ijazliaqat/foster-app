import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const FormData = [
  {
    id: 1,
    componentProps: {
      name: "apiName",
      label: "API Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 2,
    componentProps: {
      name: "apiKey",
      label: "API Key",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "expiryDate",
      label: "Expiry Date",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "apiLink",
      label: "API Link",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "status",
      label: "Status",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "hitsPerMinute",
      label: "Hits per minute",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "averageResponseTime",
      label: "Average Response Time",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

export const FormDataValues = {
  apiName: "",
  apiKey: "",
  expiryDate: new Date(),
  apiLink: "",
  status: "",
  hitsPerMinute: "",
  averageResponseTime: "",
};

export const FormValidationSchema = Yup.object().shape({
  apiName: Yup.string().trim().required("Field is Required"),
  apiKey: Yup.string().trim().required("Field is Required"),
  expiryDate: Yup.date().required("Field is Required"),
  apiLink: Yup.string().trim().required("Field is Required"),
  status: Yup.string().trim().required("Field is Required"),
  hitsPerMinute: Yup.string().trim().required("Field is Required"),
  averageResponseTime: Yup.string().trim().required("Field is Required"),
});
