import { RHFSwitch, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
  localAuthorityNumber: "",
  localAuthorityName: "",
  childName: "",
  childCaseId: "",
  followTemplate: false,
};

export const singleChildDataExchangeSchema = Yup.object().shape({
  localAuthorityNumber: Yup.string().required("Field is required"),
  localAuthorityName: Yup.string().required("Field is required"),
  childName: Yup.string().required("Field is required"),
  childCaseId: Yup.string().required("Field is required"),
  followTemplate: Yup.boolean().required(),
});

export const singleChildDataExchangeFormData = [
  {
    gridLength: 12,
    otherOptions: {
      label: "Local Authority Number",
      name: "localAuthorityNumber",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Local Authority Name",
      name: "localAuthorityName",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Child Name",
      name: "childName",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Child Case ID",
      name: "childCaseId",
      fullWidth: true,
      sx: { width: { lg: "58%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 3,
    otherOptions: {
      name: "followTemplate",
      label: "Follow Template",
    },
    component: RHFSwitch,
  },
];
