import * as Yup from "yup";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";

export const defaultValues = {
  name: "",
  interviewDate: new Date(),
  companyName: "",
  location: "",
  recordOfMatters: "",
  accurateRecord: true,
  notAccurate: false,
  signature: null,
  signatureDate: new Date(),
  socialWorkerAnalysis: "",
  accessorName: "",
  accessorSignature: null,
  accessorSignatureDate: new Date(),
};

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb

const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name Of Person Interviewed is required"),
  interviewDate: Yup.date().required("Date of Interview is required"),
  companyName: Yup.string().required("Company Name is required"),
  location: Yup.string().required("Location required"),
  recordOfMatters: Yup.string().required("Field is required"),
  accurateRecord: Yup.boolean(),
  notAccurate: Yup.boolean(),
  signatureDate: Yup.date().required("Date of Interview is required"),
  socialWorkerAnalysis: Yup.string().required(
    "Social Work Analysis is required"
  ),
  accessorName: Yup.string().required("Name Of Assessor is required"),
  accessorSignatureDate: Yup.date().required("Date is required"),
  signature: Yup.mixed()
    .nullable()
    .required("Signature Of Interviewee is required"),
  // .test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   (value: any) => value && FILE_FORMATS.includes(value.type)
  // )
  // .test(
  //   "fileSize",
  //   `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
  //   (value: any) => value && value.size <= MAX_FILE_SIZE
  // ),
  accessorSignature: Yup.mixed()
    .nullable()
    .required("Signature Of Accessor is required"),
  // .test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   (value: any) => value && FILE_FORMATS.includes(value.type)
  // )
  // .test(
  //   "fileSize",
  //   `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
  //   (value: any) => value && value.size <= MAX_FILE_SIZE
  // ),
});

export const formData1 = [
  {
    gridLength: 6,
    otherOptions: {
      name: "name",
      label: "Name of the Person Interviewed",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "interviewDate",
      label: "Date Of Interview",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "companyName",
      label: "Company Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "location",
      label: "Location",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "recordOfMatters",
      label: "Record of Matters Discussed",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const formData2 = [
  {
    gridLength: 12,
    otherOptions: {
      name: "accurateRecord",
      label: "This is an accurate record of our discussion",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "notAccurate",
      label:
        "There are aspects of this record that are not accurate (Please explain using additional sheets as necessory",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "signature",
      label: "Signature of Interviewee",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "signatureDate",
      label: "Date",
      fullWidth: true,
      sx: { mt: 2 },
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "socialWorkerAnalysis",
      label: "Social Worker Analysis",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "accessorName",
      label: "Name of Accessor",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "accessorSignatureDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "accessorSignature",
      label: "Signature Of Accessor",
    },

    component: SignaturePad,
  },
];

export { default as InterviewRecordAndAnalysisComponent } from "./InterviewRecordAndAnalysis";
