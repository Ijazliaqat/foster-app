import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";

export const defaultValues = {
  actualAuthorityLiveIn: "",
  authorityOrAgency: "",
  haveApplied: "",
  title: "",
  firstName: "",
  lastName: "",
  address: "",
  telephone: "",
  relyOnSupport: "",
  involvedInFostering: "",
  commentsAndSuggestion: "",
};

export const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(3, "Mininum 3 characters")
    .max(20, "Maximum 20 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(3, "Mininum 3 characters")
    .max(20, "Maximum 20 characters"),
  actualAuthorityLiveIn: Yup.string()
    .trim()
    .required("Actual Authority is required"),
  title: Yup.string().required("Title is required"),
  address: Yup.string()
    .required("Address is required")
    .min(6, "Mininum 6 characters")
    .max(20, "Maximum 20 characters"),
  telephone: Yup.string()
    .required("Telephone is required")
    .min(4, "Mininum 6 characters")
    .max(25, "Maximum 25 characters"),
  relyOnSupport: Yup.string()
    .required("Field is Required")
    .min(2, "Mininum 2 characters")
    .max(100, "Maximum 100 characters"),
  involvedInFostering: Yup.string()
    .required("Required")
    .min(2, "Mininum 2 characters")
    .max(100, "Maximum 100 characters"),
  commentsAndSuggestion: Yup.string()
    .required("Suggestions is Required")
    .min(2, "Mininum 2 characters")
    .max(100, "Maximum 100 characters"),
});

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "actualAuthorityLiveIn",
      label: "Which actual Authority do you live in",
      select: true,
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "No",
      label: "Are you presently Fostering for a local authority or agency?",
      name: "authorityOrAgency",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "No",
      label: "Have you ever applied to be a foster carer or child Minder",
      name: "haveApplied",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
];
export const formDataPersonalDetails = [
  {
    gridLength: 6,
    otherOptions: { name: "title", label: "Tilte", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "firstName", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "lastName", label: "Last Name", fullWidth: true },
    component: RHFTextField,
  },
];
export const formDataContactDetails = [
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "telephone", label: "Telephone", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "relyOnSupport",
      label:
        "Who would you rely on for support (i.e Baby-sitting- Please state name and Address)?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "involvedInFostering",
      label: "Do you need the training about the issues involved in fostering",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "commentsAndSuggestion",
      label:
        "Do you have the comments or suggestions about the support you will need from us?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export { default as OtherInfoForm } from "./OtherInfoForm";
