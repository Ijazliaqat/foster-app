import * as Yup from "yup";
import {  RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const agencyInfoData = [
  {
    componentProps: {
      name: "localAuthorityNumber",
      label: "Local Authority Number",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "requestedPerson",
      label: "Requested By (IFA Requested Person)",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "role",
      label: "Role ",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
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
    componentProps: {
      name: "agencyNumber",
      label: "Agency Number",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "approverName",
      label: "LA Approver Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "comment",
      label: "Comment",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const agencyInfoDataValues = {};

export const agencyInfoValidationSchema = Yup.object().shape({
  // yourrequest: Yup.string().trim().required("Field is Required"),
});
