import SignaturePad from "@root/components/SignaturePad";
import {
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import * as Yup from "yup";

export const initialValues = {
  nameOfFosterCarer: "",
  dateOfReviewMeeting: null,
  reviewingOfficer: "",
  supervisingSocialWorker: "",
  fosterCarer: "",
  others: "",
  supervisiingSocialWorker: "",
  FRBfosterCarer: "",
  youngPersonInHouseHold: "",
  fosteringChildOrYoungPerson: "",
  childSocialWorker: "",
  additionalReports: "",

  ifReportNotAvailable: "",
  DBSfosterCarers: "",
  DBShouseholder: "",
  DBSnonHouseholder: "",
  medicalChecks: "",
  otherChecks: "",

  ifRequiredCheckNotAvailable: "",
  fosterHomeSafety: "",
  unAnnouncedVisit: "",
  firstSafetyPlan: "",
  familySaferCaringPolicy: "",
  petAssesments: "",
  smokingAssesments: "",
  personalDevelopementPlan: "",
  completeTSDS: "",
  exemptionOrPlacements: "",
  impactOfFostering: "",
  needsOfChildren: "",
  workingAsAPartOfTeam: "",
  carersOwnDevelopment1: "",
  carersOwnDevelopment2: "",
  summary: "",
  changesToApprovalTerms: "",
  recommendation: "",
  date1: null,
  time: null,
  signature: "",
  date2: null,
};

export const formSchema = Yup.object().shape({
  nameOfFosterCarer: Yup.string().required("Field is required."),
  dateOfReviewMeeting: Yup.string().required("Field is required."),
  reviewingOfficer: Yup.string().required("Field is required."),
  supervisingSocialWorker: Yup.string().required("Field is required."),
  fosterCarer: Yup.string().required("Field is required."),
  others: Yup.string().required("Field is required."),
  supervisiingSocialWorker: Yup.string().required("Field is required."),
  FRBfosterCarer: Yup.string().required("Field is required."),
  youngPersonInHouseHold: Yup.string().required("Field is required."),
  fosteringChildOrYoungPerson: Yup.string().required("Field is required."),
  childSocialWorker: Yup.string().required("Field is required."),
  additionalReports: Yup.string().required("Field is required."),
  ifRequiredCheckNotAvailable: Yup.string().required("Field is required."),

  ifReportNotAvailable: Yup.string().required("Field is required."),
  DBSfosterCarers: Yup.string().required("Field is required."),
  DBShouseholder: Yup.string().required("Field is required."),
  DBSnonHouseholder: Yup.string().required("Field is required."),
  medicalChecks: Yup.string().required("Field is required."),
  otherChecks: Yup.string().required("Field is required."),

  fosterHomeSafety: Yup.string().required("Field is required."),
  unAnnouncedVisit: Yup.string().required("Field is required."),
  firstSafetyPlan: Yup.string().required("Field is required."),
  familySaferCaringPolicy: Yup.string().required("Field is required."),
  petAssesments: Yup.string().required("Field is required."),
  smokingAssesments: Yup.string().required("Field is required."),
  personalDevelopementPlan: Yup.string().required("Field is required."),
  completeTSDS: Yup.string().required("Field is required."),
  exemptionOrPlacements: Yup.string().required("Field is required."),
  impactOfFostering: Yup.string().required("Field is required."),
  needsOfChildren: Yup.string().required("Field is required."),
  workingAsAPartOfTeam: Yup.string().required("Field is required."),
  carersOwnDevelopment1: Yup.string().required("Field is required."),
  carersOwnDevelopment2: Yup.string().required("Field is required."),
  summary: Yup.string().required("Field is required."),
  changesToApprovalTerms: Yup.string().required("Field is required."),
  recommendation: Yup.string().required("Field is required."),
  date1: Yup.string().required("Field is required."),
  time: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
  date2: Yup.string().required("Field is required."),
});

export const FRD1FormData = [
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
    gridLength: 6,
    otherOptions: {
      label: "Date of review meeting",
      name: "dateOfReviewMeeting",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    head: "Present",
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Reviewing officer",
      name: "reviewingOfficer",
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
      label: "Supervising social worker",
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
    gridLength: 12,
    otherOptions: {
      label: "Others",
      name: "others",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Reports information the review meeting",
  },
  {
    gridLength: 12,
    title: "FR-A: Supervising social worker",
    otherOptions: {
      name: "supervisiingSocialWorker",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "FR-B: Foster Carer",
    otherOptions: {
      name: "FRBfosterCarer",
      options: [
        "When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)",
        "When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)",
      ],
      sx: { display: "flex", flexDirection: "column", gap: { xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "FR-C: Child/young person in the household",
    otherOptions: {
      name: "youngPersonInHouseHold",
      options: [
        "Paragraph 5.68 of the statutory Guidance requires the fostering service to support the children of foster carers",
        "Paragraph 5.68 of the statutory Guidance requires the fostering service to support the children of foster carers",
      ],
      sx: { display: "flex", flexDirection: "column", gap: { xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "FR-D: Fostering child or young person",
    otherOptions: {
      name: "fosteringChildOrYoungPerson",
      options: [
        "When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of any child placed with foster carers(Subject to age and understanding)",
        "When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of any child placed with foster carers(Subject to age and understanding)",
      ],
      sx: { display: "flex", flexDirection: "column", gap: { xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "FR-E: Childs social worker",
    otherOptions: {
      name: "childSocialWorker",
      options: [
        "When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)",
        "When Undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)",
      ],
      sx: { display: "flex", flexDirection: "column", gap: { xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "FR-F: Additional Reports",
    otherOptions: {
      name: "additionalReports",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "If any required reports are not available, please comment:",
      name: "ifReportNotAvailable",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Checks and medicals",
  },
  {
    gridLength: 12,
    title:
      "DISCLAIMER: There is no legal requirement to update DBS checks or medicals after approval, but fostering services will usually have their own policies regarding the updating of these checks",
  },
  {
    gridLength: 12,
    title: "DBS foster carers",
    otherOptions: {
      name: "DBSfosterCarers",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "DBS householder members",
    otherOptions: {
      name: "DBShouseholder",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "DBS non-householder members",
    otherOptions: {
      name: "DBSnonHouseholder",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Medical checks/updates",
    otherOptions: {
      name: "medicalChecks",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Other checks",
    otherOptions: {
      name: "otherChecks",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title:
      "If any required checks are not available or issues have arisen from the checks, please comment:",
    otherOptions: {
      name: "ifRequiredCheckNotAvailable",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Other documents",
  },
  {
    gridLength: 12,
    title:
      "DISCLAIMER: Depending on the policy of the fostering service, the reviewing officer may be required to check other documents, such as:",
  },
  {
    gridLength: 12,
    title: "Foster home safety check",
    otherOptions: {
      name: "fosterHomeSafety",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Unannounced visit",
    otherOptions: {
      name: "unAnnouncedVisit",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "First safety plan",
    otherOptions: {
      name: "firstSafetyPlan",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Family safer caring policy",
    otherOptions: {
      name: "familySaferCaringPolicy",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Pet assesments",
    otherOptions: {
      name: "petAssesments",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Smoking assesments",
    otherOptions: {
      name: "smokingAssesments",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Personal development plan",
    otherOptions: {
      name: "personalDevelopementPlan",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Complete TSDS",
    otherOptions: {
      name: "completeTSDS",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    head: "Recommendations of last reviewing meeting",
  },
  {
    gridLength: 12,
    title:
      "If any required checks are not available or issues have arisen from the checks, please comment:",
    otherOptions: {
      name: "ifRequiredCheckNotAvailable",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "Recommendations made, action taken and outstanding actions (with timescale)",
    otherOptions: {
      name: "ifRequiredCheckNotAvailable",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Exemptions/placements outside terms of approvel",
  },
  {
    gridLength: 12,
    title:
      "Were there any exemptions or placements outside the carers terms of approvel (unlowful placements)",
    otherOptions: {
      name: "exemptionOrPlacements",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    head: "Summery and discussion",
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Impact of fostering",
      name: "impactOfFostering",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Needs of children",
      name: "needsOfChildren",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Working as a part of team",
      name: "workingAsAPartOfTeam",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Carers own development (carer 1)",
      name: "carersOwnDevelopment1",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Carers own development (carer 2)",
      name: "carersOwnDevelopment2",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Summery and discussion",
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Summary",
      name: "summary",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Changes to approval terms",
    otherOptions: {
      name: "changesToApprovalTerms",
      options: [
        "Are the carers current terms of approval appropriate",
        "Are the carers current terms of approval unappropriate",
      ],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Recommendation",
      name: "recommendation",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    border: true,
  },
  {
    gridLength: 12,
    head: "Next review meeting",
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "date1",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Time",
      name: "time",
      fullWidth: true,
    },
    component: RHFTimePicker,
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
      name: "date2",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
