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
  nameOfFosterCarer: "",
  whatPositiveThings: "",
  howFosterCarerHelpedYou: "",
  whatSocialWorkershouldDo: "",
  haveYouBeenProvidedInfoAboutMakingComplaint: "",
  anythingElseYouWantToSay: "",
  signature: "",
  date: null,
};

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Field is required."),
  nameOfFosterCarer: Yup.string().required("Field is required."),
  whatPositiveThings: Yup.string().required("Field is required."),
  howFosterCarerHelpedYou: Yup.string().required("Field is required."),
  whatSocialWorkershouldDo: Yup.string().required("Field is required."),
  haveYouBeenProvidedInfoAboutMakingComplaint:
    Yup.string().required("Field is required."),
  anythingElseYouWantToSay: Yup.string().required("Field is required."),
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
      label: "Name of foster carer",
      name: "nameOfFosterCarer",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label:
        "What are the positive things about living in this fostering household?",
      name: "whatPositiveThings",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "How has the foster carer helped you?",
      name: "howFosterCarerHelpedYou",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Would you like your social worker to do anything different?",
      name: "whatSocialWorkershouldDo",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "Have you been provided with information about how you can make a complaint, if you want to?",
    otherOptions: {
      name: "haveYouBeenProvidedInfoAboutMakingComplaint",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title:
      "Is there anything else you would like to say about living in this fostering household?",
    otherOptions: {
      name: "anythingElseYouWantToSay",
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
