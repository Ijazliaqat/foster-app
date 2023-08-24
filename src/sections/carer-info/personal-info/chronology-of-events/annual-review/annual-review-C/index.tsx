import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const annualReviewCData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "allegationDuringPeriodUnderReview",
      label: "Complaints or Allegation during period under review",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "eventsForCarersSinceLastReview",
      label: "Significant changes/events for Carers since last review",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "importOfFosteringOnFamily",
      label: "Impact of Foresting On Family:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    title: "Impact of Foresting On Family",
    gridLength: 12,
    otherOptions: {
      name: "experienceOfWorkingWithBirthParents",
      label: "Impact of Fostering On Family",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    title: "Working relationship with the Agency",
    gridLength: 12,
    otherOptions: {
      name: "workingRelationshipWithTheAgency",
      label:
        "What specific preparation/training have the carer to assist them to become foster carers (First Review Only)?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "supportForCarers",
      label: "Support for Carers:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    title: "Working relationship with professionals",
    gridLength: 12,
    otherOptions: {
      name: "supervisingSocialWorker",
      label: "Supervising Social Workers:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "otherProfessionals",
      label: "Other Professionals:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "otherFosterCarers",
      label: "Other Foster Carers:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "procedures",
      label: "procedures:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as AnnualReviewC } from "./AnnualReviewC";

export const defaultValues = {
  allegationDuringPeriodUnderReview: "",
  eventsForCarersSinceLastReview: "",
  importOfFosteringOnFamily: "",
  experienceOfWorkingWithBirthParents: "",
  workingRelationshipWithTheAgency: "",
  supportForCarers: "",
  supervisingSocialWorker: "",
  otherProfessionals: "",
  otherFosterCarers: "",
  procedures: "",
};

export const formSchema = Yup.object().shape({
  allegationDuringPeriodUnderReview: Yup.string().required("required"),
  eventsForCarersSinceLastReview: Yup.string().required("required"),
  importOfFosteringOnFamily: Yup.string().required("required"),
  experienceOfWorkingWithBirthParents: Yup.string().required("required"),
  workingRelationshipWithTheAgency: Yup.string().required("required"),
  supportForCarers: Yup.string().required("required"),
  supervisingSocialWorker: Yup.string().required("required"),
  otherProfessionals: Yup.string().required("required"),
  otherFosterCarers: Yup.string().required("required"),
  procedures: Yup.string().required("required"),
});
