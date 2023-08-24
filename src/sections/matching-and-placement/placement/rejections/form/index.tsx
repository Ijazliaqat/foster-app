import {
  RHFMultiCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  childName: "",
  carerName: "",
  whoRejected: "",
  rejectionDate: new Date(),
  placementType: "",
  rejectionReason: "",
  agencySocialWorker: "",
  localAuthorityWorker: "",
  voiceMemoRejection: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  carerName: Yup.string().required("Field is required"),
  whoRejected: Yup.string().required("Field is required"),
  rejectionDate: Yup.date().required("Field is required"),
  placementType: Yup.string().required("Field is required"),
  rejectionReason: Yup.string().required("Field is required"),
  agencySocialWorker: Yup.string().required("Field is required"),
  localAuthorityWorker: Yup.string().required("Field is required"),
  voiceMemoRejection: Yup.string().required("Field is required"),
});

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Child Name",
      name: "childName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Carer Name",
      name: "carerName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Who Rejected?",
    otherOptions: {
      name: "whoRejected",
      options: ["Child", "Carer", "LA SSW", "SSW"],
    },
    sx: { "& .MuiFormGroup-root": { flexDirection: "row !important" } },
    component: RHFMultiCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Rejecteion Date",
      name: "rejectionDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Placement Type",
      name: "placementType",
      fullWidth: true,
      select: true,
      options: [{ value: "value", label: "label" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Rejection Reason",
      name: "rejectionReason",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Agency Social Worker (SSW)",
      name: "agencySocialWorker",
      fullWidth: true,
      select: true,
      options: [{ value: "value", label: "label" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Local Authority Worker SW",
      name: "localAuthorityWorker",
      fullWidth: true,
      select: true,
      options: [{ value: "value", label: "label" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Voice Memo on Rejection",
      name: "voiceMemoRejection",
      fullWidth: true,
    },
  },
];
