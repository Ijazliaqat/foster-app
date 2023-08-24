import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
export const Dummy = [
  {
    // dateofComplaints:"02:30:20",
    Status: "panding",
  },
];

export const ComplaintsData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "Complaints against person category",
      name: "complaintsAgainstPersonCategory",
      fullWidth: true,
      select: true,
      options: [
        { value: "Request for Single Data", label: "Request for Single Data" },
      ],
    },
    component: RHFSelect,
  },

  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Complaints against person",
      name: "complaintsAgainstPerson",
      fullWidth: true,
      select: true,
      options: [
        { value: "Request for Single Data", label: "Request for Single Data" },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Complaints Date",
      name: "complaintsDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Agency reported Date",
      name: "agencyReportedDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      label: "Review Date",
      name: "reviewDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      label: "Nature of Complaints",
      name: "natureOfComplaints",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      label: "Person Notified to Agency",
      name: "personNotifiedToAgency",
      multiline: false,
      // minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      label: "Person Completing Report",
      name: "personCompletingReport",
      multiline: false,
      // minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      label: "Agency Social worker Involved:",
      name: "agencySocialWorkerInvolved",
      multiline: false,
      //minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      label: "Child Local Authority",
      name: "childLocalAuthority",
      fullWidth: true,
      select: true,
      options: [
        { value: "Request for Single Data", label: "Request for Single Data" },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      label: "Carer Local Authority",
      name: "carerLocalauthority",
      fullWidth: true,
      select: true,
      options: [
        { value: "Request for Single Data", label: "Request for Single Data" },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      label: "Complaints Details",
      name: "complaintsDetails",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      label: "Investigation Undertaken",
      name: "investigationUndertaken",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 12,
    otherOptions: {
      label: "Independent Support Offered Info:",
      name: "independentSupportOfferedInfo",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 12,
    otherOptions: {
      label: "Agency Action Taken:",
      name: "agencyActionTaken",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 12,
    otherOptions: {
      label: "Complaints Outcome:",
      name: "complaintsOutcome",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 18,
    gridLength: 6,
    otherOptions: {
      label: "Is This substantiated",
      name: "isThisSubstantiated",
      fullWidth: true,
      select: true,
      options: [
        { value: "Request for Single Data", label: "Request for Single Data" },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 19,
    gridLength: 12,
    otherOptions: {
      label: "Team Manger Recommendation",
      name: "teamMangerRecommendation",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 21,
    gridLength: 6,
    otherOptions: {
      label: "Has Registered Manger Informed",
      name: "hasRegisteredMangerInformed",
      options: ["Yes", "No"],
    },

    component: RHFRadioGroupWithLabel,
  },
  {
    id: 21,
    gridLength: 6,
    otherOptions: {
      label: "Registered Manager informed Date",
      name: "registeredManageInformedDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 22,
    gridLength: 6,
    otherOptions: {
      label: "Has ofsted been Informed",
      name: "hasofstedBeenInformed",
      options: ["Yes", "No"],
    },

    component: RHFRadioGroupWithLabel,
  },
  {
    id: 21,
    gridLength: 6,
    otherOptions: {
      label: "OFSTED Notified Date",
      name: "oFSTEDNotifiedDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 22,
    gridLength: 6,
    otherOptions: {
      label: "Is Schedule 7",
      name: "isScheduleSeven",
      options: ["Yes", "No"],
    },

    component: RHFRadioGroupWithLabel,
  },
  {
    id: 23,
    gridLength: 12,
    otherOptions: {
      label: "Reported To",
      name: "reportedTo",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 24,
    gridLength: 12,
    otherOptions: {
      label: "Registered Manger Recommendation:",
      name: "registeredMangerRecommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 25,
    gridLength: 6,
    otherOptions: {
      label: "Closure Date",
      name: "closureDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 26,
    gridLength: 6,
    otherOptions: {
      label: "Next Alert Date",
      name: "nextAlertDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
export const ComplaintsDataValue = {
  complaintsAgainstPersonCategory: "",
  complaintsAgainstPerson: "",
  complaintsDate: new Date(),
  agencyReportedDate: new Date(),
  reviewDate: new Date(),
  natureOfComplaints: "",
  personNotifiedToAgency: "",
  personCompletingReport: "",
  agencySocialWorkerInvolved: "",
  childLocalAuthority: "",
  carerLocalauthority: "",
  complaintsDetails: "",
  independentSupportOfferedInfo: "",
  agencyActionTaken: "",
  complaintsOutcome: "",
  isThisSubstantiated: "",
  teamMangerRecommendation: "",
  hasRegisteredMangerInformed: "",
  registeredManageInformedDate: new Date(),
  hasofstedBeenInformed: "",
  oFSTEDNotifiedDate: new Date(),
  isScheduleSeven: "",
  reportedTo: "",
  registeredMangerRecommendation: "",
  closureDate: new Date(),
  nextAlertDate: new Date(),
};
export const FormSchema = Yup.object().shape({
  complaintsAgainstPersonCategory: Yup.string().required("required"),
  complaintsAgainstPerson: Yup.string().required("required"),
  complaintsDate: Yup.date().required("required"),
  agencyReportedDate: Yup.date().required("required"),
  reviewDate: Yup.date().required("required"),
  natureOfComplaints: Yup.string().required("required"),
  personNotifiedToAgency: Yup.string().required("required"),
  personCompletingReport: Yup.string().required("required"),
  agencySocialWorkerInvolved: Yup.string().required("required"),
  childLocalAuthority: Yup.string().required("required"),
  carerLocalauthority: Yup.string().required("required"),
  complaintsDetails: Yup.string().required("required"),
  independentSupportOfferedInfo: Yup.string().required("required"),
  agencyActionTaken: Yup.string().required("required"),
  complaintsOutcome: Yup.string().required("required"),
  isThisSubstantiated: Yup.string().required("required"),
  teamMangerRecommendation: Yup.string().required("required"),
  hasRegisteredMangerInformed: Yup.string().required("required"),
  registeredManageInformedDate: Yup.date().required("required"),
  hasofstedBeenInformed: Yup.string().required("required"),
  oFSTEDNotifiedDate: Yup.date().required("required"),
  isScheduleSeven: Yup.string().required("required"),
  reportedTo: Yup.string().required("required"),
  registeredMangerRecommendation: Yup.string().required("required"),
  closureDate: Yup.date().required("required"),
  nextAlertDate: Yup.date().required("required"),
});
