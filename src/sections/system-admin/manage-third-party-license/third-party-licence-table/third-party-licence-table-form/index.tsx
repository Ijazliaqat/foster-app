import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const FormData = [
  {
    id: 1,
    componentProps: {
      name: "name",
      label: "Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 2,
    componentProps: {
      name: "typeOfLicense",
      label: "Type of License",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "description",
      label: "Description",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "guide",
      label: "Guide",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "email",
      label: "Email",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "phone",
      label: "Phone",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

export const FormDataValues = {
  name: "",
  typeOfLicense: "",
  description: new Date(),
  guide: "",
  email: "",
  phone: "",
};

export const FormValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Field is Required"),
  typeOfLicense: Yup.string().trim().required("Field is Required"),
  description: Yup.string().trim().required("Field is Required"),
  guide: Yup.string().trim().required("Field is Required"),
  email: Yup.string().trim().required("Field is Required"),
  phone: Yup.string().trim().required("Field is Required"),
});
