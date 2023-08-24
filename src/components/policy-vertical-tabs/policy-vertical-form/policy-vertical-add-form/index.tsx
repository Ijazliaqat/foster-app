import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import SignaturePad from "@root/components/SignaturePad";
import { fData } from "@root/utils/formatNumber";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const PolicyVerticalAddNewDefaultValues = {
  title: "",
  dateUploaded: null,
  description: "",
  version: "",
  createdBy: "",
  approvedBy: "",
  author: null,
  approver: null,
  creationTime: null,
  lastModifiedTime: null,
  modifiedBy: "",
  eSignatureofAuthor: "",
  eSignatureofApprover: "",
  updatePhoto: "",
};

let isSelect = false;

export const handleInputFields = (value: any) => {
  isSelect = value;
};

export const PolicyVerticalAddNewValidationSchema: any = Yup.object().shape({
  // title: Yup.string().required("Field is Required"),
  dateUploaded: Yup.date().required("Field is Required"),
  description: Yup.string().required("Field is Required"),
  version: Yup.string().required("Field is Required"),
  createdBy: Yup.string().required("Field is Required"),
  approvedBy: Yup.string().required("Field is Required"),
  author: Yup.date().required("Field is Required"),
  approver: Yup.date().required("Field is Required"),
  creationTime: Yup.date().required("Field is Required"),
  lastModifiedTime: Yup.date().required("Field is Required"),
  modifiedBy: Yup.string().required("Field is Required"),
  eSignatureofAuthor: Yup.mixed()
    .nullable()
    .required("Field is Required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value: any) => value && FILE_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
      (value: any) => value && value.size <= MAX_FILE_SIZE
    ),
  eSignatureofApprover: Yup.mixed()
    .nullable()
    .required("Field is Required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value: any) => value && FILE_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
      (value: any) => value && value.size <= MAX_FILE_SIZE
    ),
  updatePhoto: Yup.mixed().required("Field is Required"),
});

export const PolicyVerticalAddNewFormData = [
  {
    id: 2,
    componentProps: {
      label: "Date Uploaded",
      name: "dateUploaded",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      label: "Description",
      name: "description",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      label: "Version",
      name: "version",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Hayes", label: "Hayes" }],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      label: "Created By",
      name: "createdBy",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      label: "Approved By",
      name: "approvedBy",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      label: "eSignature of Author",
      name: "eSignatureofAuthor",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
  {
    id: 8,
    componentProps: {
      label: "eSignature of Approver",
      name: "eSignatureofApprover",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
  {
    id: 9,
    componentProps: {
      label: "Date of eSignature of Author",
      name: "author",
      fullWidth: true,
      sx: { mb: 4, mt: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 10,
    componentProps: {
      label: "Date of eSignature of Approver",
      name: "approver",
      fullWidth: true,
      sx: { mb: 4, mt: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      label: "Creation Time",
      name: "creationTime",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTimePicker,
    md: 6,
  },
  {
    id: 12,
    componentProps: {
      label: "Last Modified Time",
      name: "lastModifiedTime",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTimePicker,
    md: 6,
  },
  {
    id: 13,
    componentProps: {
      label: "Modified By",
      name: "modifiedBy",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];
