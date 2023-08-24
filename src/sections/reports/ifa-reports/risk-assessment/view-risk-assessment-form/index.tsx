import dayjs from "dayjs";
import { Typography } from "@mui/material";
import {
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/SignaturePad";

const todayDate = dayjs().format("MM/DD/YYYY");

export const RiskAssessmentFormDefaultValues = {
  childName: "John Doe",
  DOB: new Date(todayDate),
  carerName: "John Doe",
  initialAssessmentDate: new Date(todayDate),
  reason: "Text",
  riskAndWhom: "Text",
  manageRisk: "Text",
  placement: "Text",
  protectiveFactor: "Text",
  futherInformatin: "Text",
  identifiedSpecific: "Text",
  riskName: "John Doe",
  riskLevel: "Diasabeled Choice",
  riskProbability: "Diasabeled Choice",
  riskReviewDate: new Date(todayDate),
  strategiesAgreed: "",
  comments: "Text",
  socialWorker: new Date(todayDate),
  childCarer: new Date(todayDate),
  rigisterRisk: new Date(todayDate),
  sign: "",
  date: new Date(todayDate),
};
export const RiskAssessmentFormData = [
  {
    gridLength: 6,
    componentProps: {
      name: "childName",
      label: "Name of Child",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "DOB",
      label: "Date of birth",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "carerName",
      label: "Name of carer",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "initialAssessmentDate",
      label: "Date of initial Assessment ",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 12,
    title:
      "Reason why risk assessment is being completed or updated eg concern or incident. ",
    componentProps: {
      name: "reason",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "What is the risk and to whom? ",
    componentProps: {
      name: "riskAndWhom",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "What strategy is in place to manage the risk?",
    componentProps: {
      name: "manageRisk",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title:
      "Are different strategies used in school, community or in placement?",
    componentProps: {
      name: "placement",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Are there any protective factors in the placement that reduce or raise risk for the foster child or others?
    E-g other children within the home, carers previous experience and training.`,
    componentProps: {
      name: "protectiveFactor",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Is there any futher information to note that enhances this risk assessment or wil contribute to the safe 
    care offered to this young person? Where has this been sound sourced i.e. previous observations from carers,
     SSW information from LA case files`,
    componentProps: {
      name: "futherInformatin",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `List identified specific 'triggers' either in the foster home or external to it 
    that seem affect or escalate the identified risks.`,
    componentProps: {
      name: "identifiedSpecific",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `How and when are the current strategies being reviewed and updated? By whom?`,
    componentProps: {
      name: "identifiedSpecific",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Assesing the Risk",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "riskName",
      label: "Name of Risk",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    gridLength: 6,
    componentProps: {
      name: "riskLevel",
      label: "Level Of Risk (Low, Medium, High)",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "choice", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "riskProbability",
      label: "Probability Of Risk (Low, Medium, High)",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "choice", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "riskReviewDate",
      label: "Review OF Risk Date And Outcome",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Management the Risk",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 12,
    title: "Strategies Agreed",
    componentProps: {
      defaultValue: "Yes",
      name: "strategiesAgreed",
      options: ["Yes", "No"],
      fullWidth: true,
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    componentProps: {
      label: "Comments",
      name: "comments",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    title:
      "The assessment has been shared and agreed with the child's placing La social worker.",
    componentProps: {
      name: "socialWorker",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    title: "The assessment has been shared and agreed with the child's carer.",
    componentProps: {
      name: "childCarer",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    title:
      "The assessment has been shared and agreed with the operations manager and recorded on high risk register.",
    componentProps: {
      name: "rigisterRisk",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    heading: "",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 6,
    title: "Sign",
    componentProps: {
      name: "sign",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "date",
      label: "Date",
      fullWidth: true,
      sx: { mt: 2 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Name of Risk",
      name: "riskName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];
