import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";

export const formDataFeild = [
  {
    gridLength: 6,
    componentProps: {
      label: "Assessment meeting Date",
      name: "assessmentMeetingDate",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    componentProps: {
      name: "assessmentByRole",
      label: "Assessment By (Role)",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "finalDecision",
      label: "Final Decision",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading: "Written Notice Issued ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2, mt: 1 },
    },

    component: Typography,
    md: 4,
  },
  {
    componentProps: {
      defaultValue: "",
      name: "writtenNoticeIssued",
      options: ["Yes", "No"],
      sx: {
        ml: "0px !important",
        width: "100%",
        justifyContent: "space-between",
      },
    },
    md: 2,
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Notice Issued Date",
      name: "noticeIssuedDate",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    componentProps: {
      name: "responseToWrittenNotice",
      label: "Response to Written Notice",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const formDataValues = {
  assessmentMeetingDate: new Date(),
  assessmentByRole: "",
  finalDecision: "",
  writtenNoticeIssued: "",
  noticeIssuedDate: new Date(),
  responseToWrittenNotice: "",
};

export const formValidationSchema = Yup.object().shape({
  assessmentMeetingDate: Yup.date().required("Field is Required"),
  assessmentByRole: Yup.string().trim().required("Field is Required"),
  finalDecision: Yup.string().trim().required("Field is Required"),
  writtenNoticeIssued: Yup.string().trim().required("Field is Required"),
  noticeIssuedDate: Yup.date().required("Field is Required"),
  responseToWrittenNotice: Yup.string().trim().required("Field is Required"),
});
