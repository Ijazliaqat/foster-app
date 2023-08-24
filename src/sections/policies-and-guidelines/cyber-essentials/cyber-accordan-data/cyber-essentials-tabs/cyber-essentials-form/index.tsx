import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import SignaturePad from "@root/components/hook-form/SignaturePad";

// ===================================================================================
export const defaultValues = {
  title: "",
  dateUploaded: new Date(),
  description: "",
  versions: "",
  createdBy: "",
  approvedBy: "",
  eSignatureAuthor: '',
  eSignatureApprover: '',
  dateAuthor: new Date(),
  dateApprover: new Date(),
  creationTime: new Date(),
  lastModified: new Date(),
  modifiedBy: "",
};
// ======================================================
export const FormSchema = Yup.object().shape({
  title: Yup.string().required("Field is required"),
  dateUploaded: Yup.date().required("Field is required"),
  description: Yup.string().required("Field is required"),
  versions: Yup.string().required("Field is required"),
  createdBy: Yup.string().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
  eSignatureAuthor: Yup.string().required("Field is required"),
  eSignatureApprover: Yup.string().required("Field is required"),
  dateAuthor: Yup.date().required("Field is required"),
  dateApprover: Yup.date().required("Field is required"),
  creationTime: Yup.date().required("Field is required"),
  lastModified: Yup.date().required("Field is required"),
  modifiedBy: Yup.string().required("Field is required"),
});

// =====================================================================================================
export const cyberFormData = [
  {
    gridLength: 6,
    otherOptions: { name: "title", fullWidth: true, label: "Title" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date Uploaded",
      name: "dateUploaded",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: { name: "description", fullWidth: true, label: "Description" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "versions",
      label: "Versions",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "option 1", label: "Madiha Iffat" }],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: { name: "createdBy", fullWidth: true, label: "Created By" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "approvedBy", fullWidth: true, label: "Approved By" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "eSignatureAuthor",
      label: "eSignature of Author",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "eSignatureApprover",
      label: "eSignature of Approver",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of eSignature of Author",
      name: "dateAuthor",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of eSignature of Approver",
      name: "dateApprover",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Creation Time",
      name: "creationTime",
      fullWidth: true,
    },
    component: RHFTimePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Last Modified Time",
      name: "lastModified",
      fullWidth: true,
    },
    component: RHFTimePicker,
  },
  {
    gridLength: 6,
    otherOptions: { name: "modifiedBy", fullWidth: true, label: "Modified By" },
    component: RHFTextField,
  },
];
