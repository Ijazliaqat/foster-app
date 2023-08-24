import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
// utils

// ----------------------------------------------------------------------

export const data = [
  {
    templateName: "CCE Template.pdf",
    uploadedDate: "12.11.2021",
    description: "Safeguarding policy incorporated changes",
    version: "Version_13.01_12112021",
    authorRole: "Victor Krum (Safeguarding Officer)",
    approverRole: "Tom Hanks (Director)",
  },
  {
    templateName: "CSE Template.pdf",
    uploadedDate: "12.11.2021",
    description: "Safeguarding policy incorporated changes",
    version: "Version_13.01_12112021",
    authorRole: "Victor Krum (Safeguarding Officer)",
    approverRole: "Tom Hanks (Director)",
  },
  {
    templateName: "CCE Template.pdf",
    uploadedDate: "12.11.2021",
    description: "Safeguarding policy incorporated changes",
    version: "Version_13.01_12112021",
    authorRole: "Victor Krum (Safeguarding Officer)",
    approverRole: "Tom Hanks (Director)",
  },
]
export const defaultValues = {
  templateName: "",
  // uploadDate: new Date(),
  description: "",
  authorRole: "",
  approverRole: "",
};

export const FormSchema = Yup.object().shape({
  templateName: Yup.string().required("Field is required"),
  uploadDate: Yup.date().required("Field is required"),
  description: Yup.string().required("Field is required"),
  authorRole: Yup.string().required("Field is required"),
  approverRole: Yup.string().required("Field is required"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: { name: "templateName", label: "Template Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date Uploaded",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Description",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Authore Role",
    otherOptions: {
      name: "authorRole",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Victor Krum (Safeguarding Officer)", label: "Victor Krum (Safeguarding Officer)" },
    ], component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "Approver Role",
    otherOptions: {
      name: "approverRole",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Tom Hanks (Director)", label: "Tom Hanks (Director)" },
      { value: "Snape Roy (Registered Manager)", label: "Snape Roy (Registered Manager)" },
    ], component: RHFSelect,
  },

];
