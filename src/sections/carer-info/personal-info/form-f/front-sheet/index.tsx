import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { fDate } from "@root/utils/formatTime";
import dayjs from "dayjs";

const todayDate = dayjs().format("MM/DD/YYYY");
const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  updatePhoto: "",
  nameOfApplicants: "",
  socialWorkerRecommendation: "",
  fosteringServiceRefrenceNumber: "  ",
  nameOfTeamManager: "  ",
  nameOfFosteringService: "  ",
  telephone: "",
  address: "",
  dateofApplicationAccepted: new Date(todayDate),
  nameOfSocailWorker: " ",
  dateOfAssessmentCompleted: new Date(todayDate),
  emailAddress: "",
  dateOfAssessmentUpdated: new Date(todayDate),
};

export const FormSchema = Yup.object().shape({
  updatePhoto: Yup.mixed().required("Required"),
  nameOfApplicants: Yup.string().required("Required"),
  socialWorkerRecommendation: Yup.string().required("Required"),
  fosteringServiceRefrenceNumber: Yup.string().required("Required"),
  nameOfTeamManager: Yup.string().required("Required"),
  nameOfFosteringService: Yup.string().required("Required"),
  telephone: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  dateofApplicationAccepted: Yup.date().required("Date is required"),
  nameOfSocailWorker: Yup.string().required("Required"),
  dateOfAssessmentCompleted: Yup.date().required("Date is required"),
  emailAddress: Yup.string().required("Required"),
  dateOfAssessmentUpdated: Yup.date().required("Date is required"),
});

export const FRONTSHEETFORMDATA = [
  {
    id: 1,
    componentProps: {
      name: "nameOfApplicants",
      label: "Name Of Applicant(s)",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "socialWorkerRecommendation",
      label: "Social Worker`s Recommendation",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 3,
    componentProps: {
      name: "fosteringServiceRefrenceNumber",
      label: "Fostering Service Reference Number",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "nameOfTeamManager",
      label: "Name Of Team Manager",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "nameOfFosteringService",
      label: "Name Of Fostering Service",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 6,
    componentProps: {
      name: "telephone",
      label: "Telephone",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      name: "address",
      label: "address",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 8,
    componentProps: {
      name: "dateofApplicationAccepted",
      label: "Date Of Application Accepted",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 9,
    componentProps: {
      name: "nameOfSocailWorker",
      label: "Name OF Social Worker",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 10,
    componentProps: {
      name: "dateOfAssessmentCompleted",
      label: "Date Of Assessment Accepted",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 11,
    componentProps: {
      name: "emailAddress",
      label: "emailAddress  Address",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 12,
    componentProps: {
      name: "dateOfAssessmentUpdated",
      label: "Date Of Assessment Updated",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
];
export { default as FrontSheetForm } from "./FrontSheetForm";
