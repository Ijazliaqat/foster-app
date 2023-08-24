import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const IncidentFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "personNotifiedAgency",
      label: "Person Notified to Agency",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "incidentDate",
      label: "Incident Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "agencyReportedDate",
      label: "Agency reported Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "reviewDate",
      label: "Review Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 5,
    otherOptions: {
      name: "natureOfIncident",
      label: "Nature of Incident",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Death of a child.",
        label: "Death of a child.",
      },
      {
        value: "Information has been provided to the DBS re Foster Carers",
        label: "Information has been provided to the DBS re Foster Carers",
      },
      {
        value: "Serious illness or serious accident of fostered child.",
        label: "Serious illness or serious accident of fostered child.",
      },  
      {
        value:
          " Allegation that a Child placed with the Foster Carer's home has committed a serious offence.",
        label:
          " Allegation that a Child placed with the Foster Carer's home has committed a serious offence.",
      },
      {
        value:
          "Involvement or suspected involvement of a child placed in the Foster Carer's home in Child Sexual Exploitation.",
        label:
          "Involvement or suspected involvement of a child placed in the Foster Carer's home in Child Sexual Exploitation.",
      },
      {
        value:
          "Serious incident relating to a child placed in the Foster Carer's home necessitating calling the police to the home.",
        label:
          "Serious incident relating to a child placed in the Foster Carer's home necessitating calling the police to the home.",
      },
      {
        value: "Any serious complaint about any Foster Carer.",
        label: "Any serious complaint about any Foster Carer.",
      },
      {
        value:
          "Investigation and outcome of any child protection enquiry involving any foster carer.",
        label:
          "Investigation and outcome of any child protection enquiry involving any foster carer.",
      },
      {
        value:
          "Any form of physical intervention by a Foster Carer to restrict a child's movements.",
        label:
          "Any form of physical intervention by a Foster Carer to restrict a child's movements.",
      },
      {
        value: "Child placed with Foster Carers is missing from placement.",
        label: "Child placed with Foster Carers is missing from placement.",
      },
      
      {
        value: "Behavioural issues",
        label: "Behavioural issues",
      },
      {
        value: "child protection inquiry",
        label: "child protection inquiry",
      },
      {
        value: "minor accident",
        label: "minor accident",
      },
      {
        value: "restraint",
        label: "restraint",
      },
      {
        value: "school exclusion",
        label: "school exclusion",
      },
      {
        value: "serious incident necessitating police call",
        label: "serious incident necessitating police call",
      },
      {
        value: "unauthorized absence",
        label: "unauthorized absence",
      },
      {
        value: "“Other , Please specify if any”",
        label: "“Other , Please specify if any”",
      },
    ],
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "personCompletedReport",
      label: "Person Completing Report",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "agencySocialWorkerInvolved",
      label: "Agency Social worker Involved:",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "incidentDetails",
      label: "Details of Incidents",
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
      name: "agencyActionTaken",
      label: "Action Taken by Agency :",
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
      name: "carerActionTaken",
      label: "Action Taken by Carer :",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "reportedTo",
      label: "Reported To:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "incidentOutcome",
      label: "Outcome of incident:",
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
      name: "actionTaken",
      label: "Action Taken:",
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
      name: "teamManagerComments",
      label: "Team Manger Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "hasRegisteredManagerInformed",
      label: "Has Registered Manger Informed:",
    },
    component: "RadioGroup",
  },
  {
    id: 16,
    gridLength: 6,
    otherOptions: {
      name: "registeredManagerInformedDate",
      label: "Registered Manager informed Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  ///////new
  {
    id: 17,
    gridLength: 12,
    otherOptions: {
      name: "registerManagerRecommendation",
      label: "Registered Manger Recommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  //new sc
  {
    id: 18,
    otherOptions: {
      name: "schedule7Notification",
      label: "Schedule 7 Notification:",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Death of a child.",
        label: "Death of a child.",
      },
      {
        value: "Information has been provided to the DBS re Foster Carers",
        label: "Information has been provided to the DBS re Foster Carers",
      },
      {
        value: "Serious illness or serious accident of fostered child.",
        label: "Serious illness or serious accident of fostered child.",
      },
      {
        value:
          "Outbreak at the Foster Carer's home of an infectious disease which in the opinion of the General Practitioner is sufficiently serious to be notifiable.",
        label:
          "Outbreak at the Foster Carer's home of an infectious disease which in the opinion of the General Practitioner is sufficiently serious to be notifiable.",
      },
      {
        value:
          " Allegation that a Child placed with the Foster Carer's home has committed a serious offence.",
        label:
          " Allegation that a Child placed with the Foster Carer's home has committed a serious offence.",
      },
      {
        value:
          "Involvement or suspected involvement of a child placed in the Foster Carer's home in Child Sexual Exploitation.",
        label:
          "Involvement or suspected involvement of a child placed in the Foster Carer's home in Child Sexual Exploitation.",
      },
      {
        value:
          "Serious incident relating to a child placed in the Foster Carer's home necessitating calling the police to the home.",
        label:
          "Serious incident relating to a child placed in the Foster Carer's home necessitating calling the police to the home.",
      },
      {
        value: "Any serious complaint about any Foster Carer.",
        label: "Any serious complaint about any Foster Carer.",
      },
      {
        value:
          "Investigation and outcome of any child protection enquiry involving any foster carer.",
        label:
          "Investigation and outcome of any child protection enquiry involving any foster carer.",
      },
      {
        value:
          "Any form of physical intervention by a Foster Carer to restrict a child's movements.",
        label:
          "Any form of physical intervention by a Foster Carer to restrict a child's movements.",
      },
      {
        value: "Child placed with Foster Carers is missing from placement.",
        label: "Child placed with Foster Carers is missing from placement.",
      },
      {
        value:
          "this list is not exhaustive and other situations may warrant a critical incident report, for example serious illness of the foster carer or concerns raised about people within the wider community. If in doubt, Supervising Social Workers should consult with the Fostering Team Manager.",
        label:
          "this list is not exhaustive and other situations may warrant a critical incident report, for example serious illness of the foster carer or concerns raised about people within the wider community. If in doubt, Supervising Social Workers should consult with the Fostering Team Manager.",
      },
      {
        value: "Behavioural issues",
        label: "Behavioural issues",
      },
      {
        value: "child protection inquiry",
        label: "child protection inquiry",
      },
      {
        value: "minor accident",
        label: "minor accident",
      },
      {
        value: "restraint",
        label: "restraint",
      },
      {
        value: "school exclusion",
        label: "school exclusion",
      },
      {
        value: "serious incident necessitating police call",
        label: "serious incident necessitating police call",
      },
      {
        value: "unauthorized absence",
        label: "unauthorized absence",
      },
      {
        value: "“Other , Please specify if any”",
        label: "“Other , Please specify if any”",
      },
    ],
  },
  {
    id: 19,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "hasOfstedInformed",
      label: "Has Ofsted  Informed:",
    },
    component: "RadioGroup",
  },
  {
    id: 20,
    gridLength: 6,
    otherOptions: {
      name: "ofstedFormFilledDate",
      label: "OFSTED Online Form Filled Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 21,
    gridLength: 12,
    otherOptions: {
      name: "ofsedActionTaken",
      label: "Ofsed Action Taken:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 22,
    gridLength: 6,
    otherOptions: {
      name: "closureDate",
      label: "Closure Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 23,
    gridLength: 6,
    otherOptions: {
      name: "nextAlertDate",
      label: "Next Alert Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 24,
    otherOptions: {
      name: "restraintCarer",
      label: "Restraint Carer",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Death of a child.",
        label: "Death of a child.",
      },
      {
        value: "Information has been provided to the DBS re Foster Carers",
        label: "Information has been provided to the DBS re Foster Carers",
      },
      {
        value: "Serious illness or serious accident of fostered child.",
        label: "Serious illness or serious accident of fostered child.",
      },
      {
        value:
          "Outbreak at the Foster Carer's home of an infectious disease which in the opinion of the General Practitioner is sufficiently serious to be notifiable.",
        label:
          "Outbreak at the Foster Carer's home of an infectious disease which in the opinion of the General Practitioner is sufficiently serious to be notifiable.",
      },
      {
        value:
          " Allegation that a Child placed with the Foster Carer's home has committed a serious offence.",
        label:
          " Allegation that a Child placed with the Foster Carer's home has committed a serious offence.",
      },
      {
        value:
          "Involvement or suspected involvement of a child placed in the Foster Carer's home in Child Sexual Exploitation.",
        label:
          "Involvement or suspected involvement of a child placed in the Foster Carer's home in Child Sexual Exploitation.",
      },
      {
        value:
          "Serious incident relating to a child placed in the Foster Carer's home necessitating calling the police to the home.",
        label:
          "Serious incident relating to a child placed in the Foster Carer's home necessitating calling the police to the home.",
      },
      {
        value: "Any serious complaint about any Foster Carer.",
        label: "Any serious complaint about any Foster Carer.",
      },
      {
        value:
          "Investigation and outcome of any child protection enquiry involving any foster carer.",
        label:
          "Investigation and outcome of any child protection enquiry involving any foster carer.",
      },
      {
        value:
          "Any form of physical intervention by a Foster Carer to restrict a child's movements.",
        label:
          "Any form of physical intervention by a Foster Carer to restrict a child's movements.",
      },
      {
        value: "Child placed with Foster Carers is missing from placement.",
        label: "Child placed with Foster Carers is missing from placement.",
      },
      {
        value:
          "this list is not exhaustive and other situations may warrant a critical incident report, for example serious illness of the foster carer or concerns raised about people within the wider community. If in doubt, Supervising Social Workers should consult with the Fostering Team Manager.",
        label:
          "this list is not exhaustive and other situations may warrant a critical incident report, for example serious illness of the foster carer or concerns raised about people within the wider community. If in doubt, Supervising Social Workers should consult with the Fostering Team Manager.",
      },
      {
        value: "Behavioural issues",
        label: "Behavioural issues",
      },
      {
        value: "child protection inquiry",
        label: "child protection inquiry",
      },
      {
        value: "minor accident",
        label: "minor accident",
      },
      {
        value: "restraint",
        label: "restraint",
      },
      {
        value: "school exclusion",
        label: "school exclusion",
      },
      {
        value: "serious incident necessitating police call",
        label: "serious incident necessitating police call",
      },
      {
        value: "unauthorized absence",
        label: "unauthorized absence",
      },
      {
        value: "“Other , Please specify if any”",
        label: "“Other , Please specify if any”",
      },
    ],
  },
  {
    id: 25,
    gridLength: 12,
    otherOptions: {
      name: "investigationRequiredby",
      label: "Investigation Required by:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 26,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "hasAcknowledgedBy",
      label: "Has Acknowlede by:",
    },
    component: "RadioGroup",
  },
  {
    id: 27,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "policiesCalledHome",
      label: "Were Policies Called to Home:",
    },
    component: "RadioGroup",
  },
  {
    id: 28,
    gridLength: 12,
    otherOptions: {
      name: "reasonForConcern",
      label: "Reason For Concern:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 29,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "hasOutcomeToOFSTED",
      label: "Has Outcome To OFSTED:",
    },
    component: "RadioGroup",
  },
  {
    id: 30,
    gridLength: 12,
    otherOptions: {
      name: "hospitalAdmission",
      label: "Hospital Admission:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 31,
    gridLength: 12,
    otherOptions: {
      name: "section47Offences",
      label: "Section 47 Offences:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 32,
    gridLength: 12,
    otherOptions: {
      name: "deathRecord",
      label: "Death Record:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 33,
    gridLength: 12,
    Options: [true, false],
    otherOptions: {
      name: "wasIndependentSupportOffered",
      label: "Was independent Support offered Info:",
    },
    component: "RadioGroup",
  },
  {
    id: 34,
    gridLength: 12,
    otherOptions: {
      name: "independentSupportofferedInfo",
      label: "Independent Support Offered Info:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 35,
    gridLength: 12,
    Options: [true, false],
    otherOptions: {
      name: "hasDiscussLadoTaken",
      label: "Has Discuss with LADO taken place:",
    },
    component: "RadioGroup",
  },
  {
    id: 36,
    gridLength: 12,
    otherOptions: {
      name: "ladoComments",
      label: "LADO Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 37,
    gridLength: 12,
    otherOptions: {
      name: "followUpPlan",
      label: "Follow up Plan:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const formatters: any = {};

for (const formControl of IncidentFormData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  personNotifiedAgency: "",
  incidentDate: new Date(),
  agencyReportedDate: new Date(),
  reviewDate: new Date(),
  natureOfIncident: "",
  personCompletedReport: "",
  agencySocialWorkerInvolved: "",
  incidentDetails: "",
  agencyActionTaken: "",
  carerActionTaken: "",
  reportedTo: "",
  incidentOutcome: "",
  actionTaken: "",
  teamManagerComments: "",
  hasRegisteredManagerInformed: false,
  registeredManagerInformedDate: new Date(),
  registerManagerRecommendation: "",
  schedule7Notification: "",
  hasOfstedInformed: false,
  ofstedFormFilledDate: new Date(),
  ofsedActionTaken: "",
  closureDate: new Date(),
  nextAlertDate: new Date(),
  restraintCarer: "",
  investigationRequiredby: "",
  hasAcknowledgedBy: false,
  policiesCalledHome: false,
  reasonForConcern: "",
  hasOutcomeToOFSTED: false,
  hospitalAdmission: "",
  section47Offences: "",
  deathRecord: "",
  wasIndependentSupportOffered: false,
  hasDiscussLadoTaken: false,
  independentSupportofferedInfo: "",
  ladoComments: "",
  followUpPlan: "",
};

export const FormSchema = Yup.object().shape({
  personNotifiedAgency: Yup.string().required("required"),
  incidentDate: Yup.date().required("required"),
  agencyReportedDate: Yup.date().required("required"),
  reviewDate: Yup.date().required("required"),
  natureOfIncident: Yup.string().required("required"),
  personCompletedReport: Yup.string().required("required"),
  agencySocialWorkerInvolved: Yup.string().required("required"),
  incidentDetails: Yup.string().required("required"),
  agencyActionTaken: Yup.string().required("required"),
  carerActionTaken: Yup.string().required("required"),
  reportedTo: Yup.string().required("required"),
  incidentOutcome: Yup.string().required("required"),
  actionTaken: Yup.string().required("required"),
  teamManagerComments: Yup.string().required("required"),
  hasRegisteredManagerInformed: Yup.boolean().required("required"),
  registeredManagerInformedDate: Yup.date().required("required"),
  registerManagerRecommendation: Yup.string().required("required"),
  schedule7Notification: Yup.string().required("required"),
  hasOfstedInformed: Yup.boolean().required("required"),
  ofstedFormFilledDate: Yup.date().required("required"),
  ofsedActionTaken: Yup.string().required("required"),
  closureDate: Yup.date().required("required"),
  nextAlertDate: Yup.date().required("required"),
  restraintCarer: Yup.string().required("required"),
  investigationRequiredby: Yup.string().required("required"),
  hasAcknowledgedBy: Yup.boolean().required("required"),
  policiesCalledHome: Yup.boolean().required("required"),
  reasonForConcern: Yup.string().required("required"),
  hasOutcomeToOFSTED: Yup.boolean().required("required"),
  hospitalAdmission: Yup.string().required("required"),
  section47Offences: Yup.string().required("required"),
  deathRecord: Yup.string().required("required"),
  wasIndependentSupportOffered: Yup.boolean().required("required"),
  hasDiscussLadoTaken: Yup.boolean().required("required"),
  independentSupportofferedInfo: Yup.string().required("required"),
  ladoComments: Yup.string().required("required"),
  followUpPlan: Yup.string().required("required"),
});
export const formSchemaModel = Yup.object().shape({
  type: Yup.string().required("required"),
  documentDate: Yup.date().required("required"),
  password: Yup.string().required("required"),
});
export const UploadDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "WORD",
          label: "WORD",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const UploadViewDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "WORD",
          label: "WORD",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const Formet: any = {};

for (const formControl of UploadViewDocFormData) {
  if (formControl.format)
    Formet[formControl.componentProps.name] = formControl.format;
}
