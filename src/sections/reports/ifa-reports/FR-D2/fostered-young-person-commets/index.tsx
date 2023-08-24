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
  fosterPersonName: "person name",
  personDOB: new Date(),
  likeAboutFostering: "some text",
  fosterCarersHelpedYou: "some text",
  fosterAnyThingDifferent: "some text",
  socialWorkerAnyThingDifferent: "some text",
  unhappyLivingWithYourCarers: "some text",
  treatedLikeMember: "Agree",
  feelGood: "Agree",
  takesOnBoard: "Agree",
  culterAndReligious: "Agree",
  staySafe: "Agree",
  healthyLifestyle: "Agree",
  leisureActivities: "Agree",
  schoolWork: "Agree",
  understandFeeling: "Agree",
  meetingAboutMe: "Agree",
  lookAfterMyself: "Agree",
  complaint: "Agree",
  antthingAboutYourFoster: "some text",
  helpedToCompleteForm: "some text",
  name: "name here",
  signature: null,
  date: new Date(),
};

export const formSchema = Yup.object().shape({
  fosterCarer: Yup.string().required("Field is required."),
  supervisingSocialWorker: Yup.string().required("Field is required."),
  fosterPersonName: Yup.string().required("Field is required."),
  personDOB: Yup.string().required("Field is required."),
  likeAboutFostering: Yup.string().required("Field is required."),
  fosterCarersHelpedYou: Yup.string().required("Field is required."),
  fosterAnyThingDifferent: Yup.string().required("Field is required."),
  socialWorkerAnyThingDifferent: Yup.string().required("Field is required."),
  unhappyLivingWithYourCarers: Yup.string().required("Field is required."),
  treatedLikeMember: Yup.string().required("Field is required."),
  feelGood: Yup.string().required("Field is required."),
  takesOnBoard: Yup.string().required("Field is required."),
  culterAndReligious: Yup.string().required("Field is required."),
  staySafe: Yup.string().required("Field is required."),
  healthyLifestyle: Yup.string().required("Field is required."),
  leisureActivities: Yup.string().required("Field is required."),
  schoolWork: Yup.string().required("Field is required."),
  understandFeeling: Yup.string().required("Field is required."),
  meetingAboutMe: Yup.string().required("Field is required."),
  lookAfterMyself: Yup.string().required("Field is required."),
  complaint: Yup.string().required("Field is required."),
  antthingAboutYourFoster: Yup.string().required("Field is required."),
  helpedToCompleteForm: Yup.string().required("Field is required."),
  name: Yup.string().required("Field is required."),
  signature: Yup.mixed().nullable().required("Field is required."),
  date: Yup.string().required("Field is required."),
});

export const FRD2FormData = [
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
      label: "Name (fostered young person)",
      name: "fosterPersonName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Fostered young person's DOB-Age",
      name: "personDOB",
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
    title: "How have your foster carers helped you?",
    otherOptions: {
      name: "fosterCarersHelpedYou",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Would you like your foster carers to do anything different?",
    otherOptions: {
      name: "fosterAnyThingDifferent",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Would you like your social worker to do anything different?",
    otherOptions: {
      name: "socialWorkerAnyThingDifferent",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "If you were unhappy living with your foster carers, who would you talk to?",
    otherOptions: {
      name: "unhappyLivingWithYourCarers",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "I am treated like a member of the foster family",
    otherOptions: {
      name: "treatedLikeMember",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "My foster carer helps me to feel good about myself",
    otherOptions: {
      name: "feelGood",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "My foster carer takes on board what i have to say",
    otherOptions: {
      name: "takesOnBoard",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "My culture and religious beliefs are respected and supported",
    otherOptions: {
      name: "culterAndReligious",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "I feel safe with my foster family and am helped to stay safe",
    otherOptions: {
      name: "staySafe",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "I am encouraged to eat well and have a healthy lifestyle",
    otherOptions: {
      name: "healthyLifestyle",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "I am encouraged to take part in leisure activities",
    otherOptions: {
      name: "leisureActivities",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "My foster carer supports me with my school work",
    otherOptions: {
      name: "schoolWork",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "My foster carer helps me to understand my feelings",
    otherOptions: {
      name: "understandFeeling",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "My foster carer helps me to take part in meetings about me ",
    otherOptions: {
      name: "meetingAboutMe",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "My foster carer helps me to learn how to look after myself",
    otherOptions: {
      name: "lookAfterMyself",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "My foster carer would help me if I wanted to make a complaint",
    otherOptions: {
      name: "complaint",
      options: [
        "Strongly Agree",
        "Agree",
        "Disagree",
        "Strongly Disagree",
        "Not Sure",
      ],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title:
      "Is there anything else you would like to say about living with your foster carers?",
    otherOptions: {
      name: "antthingAboutYourFoster",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "If anyone helped you complete this form, who was it?",
    otherOptions: {
      name: "helpedToCompleteForm",
      fullWidth: true,
    },
    component: RHFTextField,
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
    title: "Signature",
    otherOptions: {
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
