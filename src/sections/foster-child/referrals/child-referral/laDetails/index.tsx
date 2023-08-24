import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const LaDetailsFormData = [
  {
    id: 1,
    componentProps: {
      name: "childCode",
      label: "Child Code",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "referrerName",
      label: "Referrer Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "referralDate",
      label: "Referral Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "socialWorkerName",
      label: "LA Social Worker Name",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: [
      {
        value: "John",
        label: "John",
      },
      {
        value: "Doe",
        label: "Doe",
      },
    ],
  },
  {
    id: 5,
    componentProps: {
      name: "childGeography",
      label: "Child Geography",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: [
      {
        value: "John",
        label: "John",
      },
      {
        value: "Doe",
        label: "Doe",
      },
    ],
  },
  {
    id: 6,
    componentProps: {
      name: "childPlacingAuthority",
      label: "Child Placing Authority",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: [
      {
        value: "John",
        label: "John",
      },
      {
        value: "Doe",
        label: "Doe",
      },
    ],
  },
  {
    id: 7,
    componentProps: {
      name: "dateLaNotified",
      label: "Date LA Notified",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 8,
    componentProps: {
      name: "localAuthority",
      label: "Local Authority",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: [
      {
        value: "John",
        label: "John",
      },
      {
        value: "Doe",
        label: "Doe",
      },
    ],
  },
  {
    id: 9,
    componentProps: {
      name: "laAddress",
      label: "LA Address",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 10,
    componentProps: {
      name: "laManagerName",
      label: "LA Manager Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "laManagerTelephone",
      label: "LA Manager Telephone",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 12,
    componentProps: {
      name: "laManagerEmail",
      label: "LA Manager Email",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 13,
    componentProps: {
      name: "areaTeam",
      label: "Area Team",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 14,
    componentProps: {
      name: "edtNumber",
      label: "EDT Number",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 15,
    componentProps: {
      name: "action",
      label: "Action",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 16,
    componentProps: {
      name: "behavioral",
      label: "Behavioral",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 17,
    componentProps: {
      name: "otherDetails",
      label: "Other Details",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 18,
    componentProps: {
      name: "priorPlacementAddress",
      label: "Prior Placement Address",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 19,
    componentProps: {
      name: "recommendedCarer",
      label: "Recommended Carer",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 20,
    componentProps: {
      name: "laPlacementPlan",
      label: "LA Placement Plan",
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 21,
    componentProps: {
      name: "laRiskAssessment",
      label: "LA Risk Assessment",
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 22,
    componentProps: {
      name: "carePlanPt1",
      label: "Care Plan Pt 1",
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 23,
    componentProps: {
      name: "carePlanPt2",
      label: "Care Plan Pt 2",
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 24,
    componentProps: {
      name: "furtherAction",
      label: "No Further Action (Move to Closed Referral)",
    },
    component: RHFCheckbox,
    md: 6,
  },
];

export const defaultValues = {
  childCode: "", //1
  referrerName: "", //2
  referralDate: new Date(), //3
  socialWorkerName: "", //4
  childGeography: "", //5
  childPlacingAuthority: "", //6
  dateLaNotified: null, //7
  localAuthority: "", //8
  laAddress: "", //9
  laManagerName: "", //10
  laManagerTelephone: "", //11
  laManagerEmail: "", //12
  areaTeam: "", //13
  edtNumber: "", //14
  action: "", //15
  behavioral: "", //16
  otherDetails: "", //17
  priorPlacementAddress: "", //18
  recommendedCarer: "", //19
  laPlacementPlan: false, //20
  laRiskAssessment: false, //21
  carePlanPt1: false, //22
  carePlanPt2: false, //23
  furtherAction: false, //24
};

export const validationSchema = Yup.object().shape({
  childCode: Yup.string().trim().required("Field is Required"),
  referrerName: Yup.string().trim().required("Field is Required"),
  referralDate: Yup.date().required("Field is Required"),
  socialWorkerName: Yup.string().trim().required("Field is Required"),
  childGeography: Yup.string().trim().required("Field is Required"),
  childPlacingAuthority: Yup.string().trim().required("Field is Required"),
  dateLaNotified: Yup.date().required("Field is Required"),
  localAuthority: Yup.string().trim().required("Field is Required"),
  laAddress: Yup.string().trim().required("Field is Required"),
  laManagerName: Yup.string().trim().required("Field is Required"),
  laManagerTelephone: Yup.string().trim().required("Field is Required"),
  laManagerEmail: Yup.string().email().required("Field is Required"),
  areaTeam: Yup.string().trim().required("Field is Required"),
  edtNumber: Yup.string().trim().required("Field is Required"),
  action: Yup.string().trim().required("Field is Required"),
  behavioral: Yup.string().trim().required("Field is Required"),
  otherDetails: Yup.string().trim().required("Field is Required"),
  priorPlacementAddress: Yup.string().trim().required("Field is Required"),
  recommendedCarer: Yup.string().trim().required("Field is Required"),
  laPlacementPlan: Yup.boolean(),
  laRiskAssessment: Yup.boolean(),
  carePlanPt1: Yup.boolean(),
  carePlanPt2: Yup.boolean(),
  furtherAction: Yup.boolean(),
});

export { default as LaDetails } from "./LaDetails";
