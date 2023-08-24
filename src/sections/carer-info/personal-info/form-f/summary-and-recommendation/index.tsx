import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  dateOfApplication: new Date(todayDate),
  dateOfAssessmentCompleted: new Date(todayDate),
  anyComments: "",
  summaryOfKeyFactor: "",
  recommendation: "",

  nameOfSocialWorker: "",
  dateOfSocialWorker: new Date(todayDate),
  signatureOfSocialWorker: "",

  nameOfTeamManager: "",
  signatureOfTeamManager: "",
  dateOfTeamManager: new Date(todayDate),
};

export const FormSchema = Yup.object().shape({
  dateOfApplication: Yup.date().required("Required"),
  dateOfAssessmentCompleted: Yup.date().required("Date is required"),
  anyComments: Yup.string().required("Required"),

  nameOfSocialWorker: Yup.string().required("Required"),
  dateOfSocialWorker: Yup.date().required("Required"),
  signatureOfSocialWorker: Yup.string().required("Required"),

  nameOfTeamManager: Yup.string().required("Required"),
  signatureOfTeamManager: Yup.string().required("Required"),
  dateOfTeamManager: Yup.date().required("Required"),
});

export const summaryAndRecommendationFormData = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: "Time scales",
  },
  {
    id: 1,
    componentProps: {
      name: "dateOfApplication",
      label: "Date of application",
      multiline: true,
      minRows: 3,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 2,
    componentProps: {
      name: "dateOfAssessmentCompleted",
      label: "Date of assessment completed",
      multiline: true,
      minRows: 3,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },

  {
    id: 3,
    componentProps: {
      name: "anyComments",
      label: "Any comment about duration of assessment",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3.5,
    variant: "subtitle2",
    heading: `Summary`,
  },
  {
    id: 4,
    componentProps: {
      name: "summaryOfKeyFactor",
      label:
        "Summary of key factor leading to the recommendation (to include strengths, vulnerabilities and concerns)",
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 4.5,
    variant: "subtitle2",
    heading: `Recommendation`,
  },
  {
    id: 5,
    componentProps: {
      name: "recommendation",
      label:
        "This recommendation should include details of the terms of approval(type of fostering and the number and age range of children to be placed)",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 6,
    componentProps: {
      name: "nameOfSocialWorker",
      label: "Name of social worker completing the report",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      name: "dateOfSocialWorker",
      label: "Date",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 8,
    componentProps: {
      name: "signatureOfSocialWorker",
      label: "Signature of social worker completing the report",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 9,
    componentProps: {
      name: "nameOfTeamManager",
      label: "Name of team manager responsible for the report",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 10,
    componentProps: {
      name: "signatureOfTeamManager",
      label: "Signature of team manager responsible the report",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 11,
    componentProps: {
      name: "dateOfTeamManager",
      label: "Date",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
];

export { default as SummaryAndRecommendationForm } from "./SummaryAndRecommendationForm";
