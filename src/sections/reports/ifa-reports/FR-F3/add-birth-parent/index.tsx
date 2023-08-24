import SignaturePad from "@root/components/SignaturePad";
import {
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  name: "",
  nameOfChild: "",
  relationshipToChild: "",
  nameOfFosterCarer: "",
  whatFosterCarerHasDone: "",
  whatFosterCarerHasDoneBetter: "",
  informationAboutComplaint: "",
  anythingElse: "",
  signature: "",
  date: null,
};

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Field is required."),
  nameOfChild: Yup.string().required("Field is required."),
  relationshipToChild: Yup.string().required("Field is required."),
  nameOfFosterCarer: Yup.string().required("Field is required."),
  whatFosterCarerHasDone: Yup.string().required("Field is required."),
  whatFosterCarerHasDoneBetter: Yup.string().required("Field is required."),
  informationAboutComplaint: Yup.string().required("Field is required."),
  anythingElse: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
});

export const FRD1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Name",
      name: "name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of Child",
      name: "nameOfChild",
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
    otherOptions: {
      label: "Relationship to Child",
      name: "relationshipToChild",
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
    otherOptions: {
      label: "Name of Foster Carer",
      name: "nameOfFosterCarer",
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
    gridLength: 12,
    otherOptions: {
      label:
      "What has been the foster carer done well in caring for your child/children?",
      name: "whatFosterCarerHasDone",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label:
      "What could the foster carer have done better in caring for your child/children?",
      name: "whatFosterCarerHasDoneBetter",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
    "Have you been provided with information about how to make a complaint, if you want to?",
    otherOptions: {
      name: "informationAboutComplaint",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Is there anything else you would like to say?",
      name: "anythingElse",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Signature",
      name: "signature",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];

