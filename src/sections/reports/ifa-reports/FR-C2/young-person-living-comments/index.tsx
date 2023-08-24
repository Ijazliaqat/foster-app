import SignaturePad from "@root/components/SignaturePad";
import {
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  fosterCarer: "foster carer",
  supervisingSocialWorker: "social worker",
  youngPersonName: "person name",
  childDOB: new Date(),
  likeAboutFostering: "some text",
  likeToChangeFamilyFostering: "some text",
  worriedUnhappyAboutFostering: "some text",
  meetUpWithOtherFosterCarers: "Yes",
  ifYouDont: "Yes",
  name: "name",
  date: new Date(),
  signature: null,
};

export const formSchema = Yup.object().shape({
  fosterCarer: Yup.string().required("Field is required."),
  supervisingSocialWorker: Yup.string().required("Field is required."),
  youngPersonName: Yup.string().required("Field is required."),
  childDOB: Yup.string().required("Field is required."),
  likeAboutFostering: Yup.string().required("Field is required."),
  likeToChangeFamilyFostering: Yup.string().required("Field is required."),
  worriedUnhappyAboutFostering: Yup.string().required("Field is required."),
  meetUpWithOtherFosterCarers: Yup.string().required("Field is required."),
  ifYouDont: Yup.string().required("Field is required."),
  name: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
  signature: Yup.mixed().nullable().required("Field is required."),
});

export const FRC2FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Foster Carer(s)",
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
    otherOptions: {
      label: "Supervising Social Worker",
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
    gridLength: 6,
    otherOptions: {
      label: "Young Person's Name",
      name: "youngPersonName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Child’s DOB",
      name: "childDOB",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    title: "What do you like about fostering (good things)? *",
    otherOptions: {
      name: "likeAboutFostering",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "Is there anything you would like to change about your family fostering?",
    otherOptions: {
      name: "likeToChangeFamilyFostering",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "If you were worried or unhappy about fostering, who would you talk to?",
    otherOptions: {
      name: "worriedUnhappyAboutFostering",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "Do you meet up with other children whose parents are foster carers?",
    otherOptions: {
      name: "meetUpWithOtherFosterCarers",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "If you don’t, would you like to do this?",
    otherOptions: {
      name: "ifYouDont",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
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
      label: "Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "Signature",
    otherOptions: {
      name: "signature",
    },
    component: SignaturePad,
  },
];
