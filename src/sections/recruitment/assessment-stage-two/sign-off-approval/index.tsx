import * as Yup from "yup";
import { fData } from "@root/utils/formatNumber";
import {
  RHFCheckbox,
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import { Hidden } from "@mui/material";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";

export const defaultValues = {
  applicantName: "",
  date: new Date(),
  decisionMakerName: "",
  decisionMakerRole: "",
  formFAndPanelMinutes: "",
  otherMaterial: "",
  keyConsiderations: "",
  agreeWithProcess: "",
  noProvideDetails: "",
  pannelRecommendation: "",
  reasonsRecommendation: "",
  materialNotAvailable: "",
  adviceFosteringService: "",
  reasonsDecision: "",
  decision: "",
  signatureDate: new Date(),
  signature: null,
};

export const FormSchema = Yup.object().shape({
  applicantName: Yup.string().required("Field is required"),
  date: Yup.date().required("Field is required"),
  decisionMakerName: Yup.string().required("Field is required"),
  decisionMakerRole: Yup.string().required("Field is required"),
  formFAndPanelMinutes: Yup.string().required("Field is required"),
  otherMaterial: Yup.string().required("Field is required"),
  keyConsiderations: Yup.string().required("Field is required"),
  agreeWithProcess: Yup.string().required("Field is required"),
  noProvideDetails: Yup.string().required("Field is required"),
  pannelRecommendation: Yup.string().required("Field is required"),
  reasonsRecommendation: Yup.string().required("Field is required"),
  materialNotAvailable: Yup.string().required("Field is required"),
  adviceFosteringService: Yup.string().required("Field is required"),
  reasonsDecision: Yup.string().required("Field is required"),
  decision: Yup.string().required("Field is required"),
  signatureDate: Yup.date().required("Field is required"),
  signature: Yup.mixed().nullable().required("Signature  is required"),
});

export const formData1 = [
  {
    gridLength: 6,
    otherOptions: {
      name: "applicantName",
      label: "Applicant Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "date",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "decisionMakerName",
      label: "Name of decision maker",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "decisionMakerRole",
      label: "Role of decision maker",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const formData2 = [
  {
    gridLength: 6,
    otherOptions: {
      defaultValue: "No",
      label: "Form F/PAR and panel minutes",
      name: "formFAndPanelMinutes",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 6,
    otherOptions: {
      defaultValue: "No",
      label: "Other material If yes, please list:",
      name: "otherMaterial",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "keyConsiderations",
      label: "Key considerations/arguments in this case:",
      multiline: true,
      minRows: 4,
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "No",
      label:
        "I agree with the process and approach of the assessment(including panel process), am satisfied as to its fairness, and satisfied that the arguments have been properly addressed: ",
      name: "agreeWithProcess",
      options: ["Yes", "No"],
      linebreak: true,
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "noProvideDetails",
      label: "if no,provide details:",
      multiline: true,
      minRows: 4,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "pannelRecommendation",
      label: "Recommendation of pannel:",
      multiline: true,
      minRows: 4,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "reasonsRecommendation",
      label: "Reasons given for this recommendation:",
      multiline: true,
      minRows: 4,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "No",
      label:
        "I have considered additional material that was not available at panel if yes,peovide details of this information and how this has had an impact on the decision:",
      name: "materialNotAvailable",
      options: ["Yes", "No"],
      linebreak: true,
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "decision",
      label: "Decision:",
      multiline: true,
      minRows: 4,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "reasonsDecision",
      label: "Reasonsfro decision:",
      multiline: true,
      minRows: 4,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "adviceFosteringService",
      label: "Advice to Fostering Service:",
      multiline: true,
      minRows: 4,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "signature",
      label: "Signature by decision maker",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "signatureDate",
      label: "Date",
      fullWidth: true,
      sx: { mt: 2 },
    },
    component: RHFDatePicker,
  },
];

export { default as SignOffApproval } from "./SignOffApprovalForm";
