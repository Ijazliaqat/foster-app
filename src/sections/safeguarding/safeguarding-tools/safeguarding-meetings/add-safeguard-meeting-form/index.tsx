import * as Yup from "yup";
import { RHFTextField } from "@root/components/hook-form";
import { Grid, Typography } from "@mui/material";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const AddSafeguardingMeetingFormData = [

  
  {
    id: 1,
    componentProps: {
      name: "signedOffBy",
      label: "Signed off by",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  
  {
    id: 2,
    componentProps: {
      name: "nameInPrint",
      label: "Name in print",
      sx: { mb: 4},
    },
    component: RHFTextField,
    md: 6,
  },
 
  {
    id: 3,
    componentProps: {
      name: "positionInorganization",
      label: "Position in organization",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
    
  },
  {
    id: 4,
    title: "",
    componentProps: {
      sx: { mb: 4 },
    },
    component: Grid,
    md: 6,
  },

  {
    id: 5,
    componentProps: {
      name: "date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 6,
    title: "",
    componentProps: {
      sx: { mb: 4 },
    },
    component: Grid,
    md: 6,
   
  },
  {
    id: 7,
    componentProps: {
      name: "dateToReview",
      label: "Date to review",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  
];

export const defaultValues = {
  signedOffBy: "",
  nameInPrint: "",
  positionInorganization: "",
  date: new Date(),
  dateToReview: new Date(),
};

export const AddSafeguardingMeetingFormValidationSchema = Yup.object().shape({
  signedOffBy: Yup.string().trim().required("Field is Required"),
  nameInPrint: Yup.string().trim().required("Field is Required"),
  positionInorganization: Yup.string().trim().required("Field is Required"),
  Date: Yup.date().required("Field is Required"),
  dateToReview: Yup.string().trim().required("Field is Required"),
});

export { default as AddSafeguardingMeetingForm } from "./AddSafeguardingMeetingForm";

