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
  position: "",
  nameOfChild: "",
  nameOfFosterCarer: "",
  roleWithChildAndFosterCarer: "",
  fosterCarersHelped: "",
  strengthsOFTheFosterCarer: "",
  forsterCarerLimitations: "",
  fosterCarersCommunication: "",
  anythingElse: "",
  signature: "",
  date: null,
};

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Field is required."),
  position: Yup.string().required("Field is required."),
  nameOfChild: Yup.string().required("Field is required."),
  nameOfFosterCarer: Yup.string().required("Field is required."),
  roleWithChildAndFosterCarer: Yup.string().required("Field is required."),
  fosterCarersHelped: Yup.string().required("Field is required."),
  strengthsOFTheFosterCarer: Yup.string().required("Field is required."),
  forsterCarerLimitations: Yup.string().required("Field is required."),
  fosterCarersCommunication: Yup.string().required("Field is required."),
  anythingElse: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
});

export const FRF1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Name",
      name: "name",
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
      label: "Position",
      name: "position",
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
      label: "Name of child/children",
      name: "nameOfChild",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of foster carer",
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
    title:
      "Briefly describe your role with the child/children and foster carer, including the nature and frequency of contact.",
    otherOptions: {
      name: "roleWithChildAndFosterCarer",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "How has the foster carer met the health/education/other needs of the child/children in placement?",
    otherOptions: {
      name: "fosterCarersHelped",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Please comment on the strengths of the foster carer",
    otherOptions: {
      name: "strengthsOFTheFosterCarer",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "Please comment on any limitations of the foster carer on their household. Do you believe that there are areas where the carer could benefit from additional advice or training?",
    otherOptions: {
      name: "forsterCarerLimitations",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "How well has the foster carer communicated with you/your organization?",
    otherOptions: {
      name: "fosterCarersCommunication",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Is there anything else you would like to say?",
    otherOptions: {
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
