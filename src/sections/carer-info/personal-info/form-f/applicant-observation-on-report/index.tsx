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
  nameOfApplicant: "",
  dateReceiveReport: new Date(todayDate),
  reportComment: "",
  signature: "",
  date: new Date(todayDate),
  signature1: "",
  date1: new Date(todayDate),
};

export const FormSchema = Yup.object().shape({
  nameOfApplicant: Yup.string().required("Required"),
  dateReceiveReport: Yup.date().required("Date is required"),
  reportComment: Yup.string().required("Required"),
  date: Yup.date().required("Required"),
  signature: Yup.string().required("Required"),
  date1: Yup.date().required("Required"),
  signature1: Yup.string().required("Required"),
});
export const APPLICANTOBSERVATIONREPORTDATA = [
  {
    id: 1,
    componentProps: {
      name: "nameOfApplicant",
      label: "Name Of Applicant(s)",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 1.5,
    variant: "body2",
    heading:
      " I/We have read the report prepared on my/our suitability to foster (understanding that any confidential third party information in section C may have been withheld)",
  },
  {
    id: 2,
    componentProps: {
      name: "dateReceiveReport",
      label: "I/We have received the report on the following date",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFDatePicker,
  },
  {
    id: 2.5,
    variant: "body2",
    heading: `
        I/We certify that, to the best of our/my knowledge and belief, the factual information contained in this report is accurate and I/we have indicated in the box below any factual corrections that need to be made. I/We understand that if any of this information is found to be false or misleading, this may result in the fostering service rejecting my/our pplication. I/We understand that it is important not to withhold any information about factors that may influence our/my capacity to care for a child.
       `,
  },

  {
    id: 3,
    componentProps: {
      name: "reportComment",
      label:
        "I/We have the following factual corrections/observations/additional comments on the report",
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 3.5,
    variant: "body2",
    heading: `
        I/We understand that any information supplied by me/us in respect of this application may be held and/or proceed in an electronic format and is sunject to the relevant provisions in the Data Protection Act 1998 and other relevant statutes. I/We understand that any informationsupplied will form part of the fostering services’s case record in respect of my/our application. I/We understand that this form is the property of the fostering service to which I/we have applied. I/We agree not to copy this document (Other that for my/our personal records) or disclose its contents in full or in part, to any other person, fostering service or authority without the fostering service’s permission.`,
  },
  {
    id: 4,
    componentProps: {
      name: "signature",
      label: "Signature",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "date",
      label: "Date",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
    componentProps: {
      name: "signature1",
      label: "Signature",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      name: "date1",
      label: "Date",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
];

export { default as ApplicantObservationOnReportForm } from "./ApplicantObservationOnReportForm";
