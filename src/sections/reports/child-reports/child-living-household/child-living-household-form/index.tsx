import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  acknowledgment: "",
  acknowledgmentBy: "",
  supervisingSocialWorker:"",
  childName: "",
  DOB: new Date(),
  fosterCarer: "",
  aboutFostering: "",
  familyFostering: "",
  unhappayAboutFostering: "",
  otherChildren: "",
  helpCompletedForm: "",
  likeToDoThis: "",
  pictureAboutFostering: "",
  childDrawing: "",
  additionalComments: "",
};

// export const formSchema = Yup.object().shape({
//   nameOfChild: Yup.string().required("Field is required."),
//   childDOB: Yup.string().required("Field is required."),
//   supervisingSocialWorker: Yup.string().required("Field is required."),
//   createdBy: Yup.string().required("Field is required."),
//   nameOfFosterCarer: Yup.string().required("Field is required."),
//   date: Yup.string().required("Field is required."),
//   signature: Yup.string().required("Field is required."),
// });

export const FRF1FormData = [
  {
    gridLength: 12,
    otherOptions: {
      name: "acknowledgment",
      label: "Acknowledgment *",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Acknowledgment By *",
      name: "acknowledgmentBy",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Supervising Social Worker *",
      name: "supervisingSocialWorker",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 3,
    otherOptions: {
      label: "Child Name *",
      name: "childName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 3,
    otherOptions: {
      label: "child's DOB and Age *",
      name: "DOB",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "foster Carer(s) *",
      name: "fosterCarer",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "What do you like about fostering (good things)? *",
    otherOptions: {
      name: "aboutFostering",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    title: "If you were worrid or unhappy about fostering, who would you talk do?*",
    otherOptions: {
      name: "unhappayAboutFostering",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 12,
    title: "Is there anything you would like to change about your family fostering? *",
    otherOptions: {
      name: "familyFostering",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    title: "Do you meet up with other children whose parents are foster carers? YES/NO *",
    otherOptions: {
      name: "otherChildren",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", title: "Yes" },
        { value: "no", label: "No" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "Do you don't, would you like to do this? YES/NO *",
    otherOptions: {
      name: "likeToDoThis",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    title: "If anyone helped you complete this form, who was it? *",
    otherOptions: {
      name: "helpCompletedForm",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  // {
  //   gridLength: 6,
  //   title: "Is there anything else you would like to tell us about fostering, or would you like to draw a picture about fostering? *",
  //   otherOptions: {
  //     name: "likeToDoThis",
  //     multiline: true,
  //     minRows: 3,
  //     sx: { mb: 4 },
  //   },
  //   component: RHFTextField,
  //   md: 12,
  // },
  // {
  //   title:"child Drawing",
  //   gridLength: 6,
  //   uploadPhoto:true
  // },
  // {
  //   gridLength: 6,
  //   title: " *",
  //   otherOptions: {
  //     name: "additionalComments",
  //     multiline: true,
  //     minRows: 3,
  //     sx: { mb: 4 },
  //   },
  //   component: RHFTextField,
  //   md: 12,
  // },
 
 
];
