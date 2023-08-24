import { Grid } from "@mui/material";
import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const LADetailsFormFormData = [
    {
        id: 1,
        componentProps: {
          name: "childCode",
          label: "Child Code",
          fullWidth: true,
          sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
      },
  {
    id: 2,
    componentProps: {
      name: "referrerName",
      label: "Referrer Name",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: { name: "referralDate",  label: "Referral Date",  fullWidth: true, sx: { mb: 4 }, },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "lASocialWorkerName",
      label: "LA Social Worker Name",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Hayes", label: "Hayes" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "childGeography",
      label: "Child Geography",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Hayes", label: "Hayes" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "childPlacingAuthority",
      label: "Child Placing Authority",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Hayes", label: "Hayes" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 7,
    gridLength: 6,
    componentProps: { name: "dateLANotified", label: "Date LA Notified", fullWidth: true, sx: { mb: 4 }, },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 8,
    componentProps: {
      name: "localAuthority",
      label: "Local Authority",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
        { value: "Redbridge", label: "Redbridge" },
        { value: "Redbridge", label: "Redbridge" },

      ],
      component: RHFSelect,
    md: 6,
  },


  {
    id: 9,
    componentProps: {
      name: "lAAddress",
      label: "LA Address",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 10,
    componentProps: {
      name: "lAManagerName",
      label: "LA Manager Name",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "lAManagerTelephone",
      label: "LA Manager Telephone",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 12,
    componentProps: {
      name: "lAManagerEmail",
      label: "LA Manager Email",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 13,
    componentProps: {
      name: "areaTeam",
      label: 'Area Team',
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 14,
    componentProps: {
      name: "editNumber",
      label: 'Edit Number',
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 15,
    title: "",
    componentProps: {
      sx: { mb: 4 },
    },
    component: Grid,
    md: 6,
   
  },
  {
    id: 16,
    componentProps: {
      name: "behavioural",
      label: 'Behavioural',
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 17,
    componentProps: {
      name: "otherDetails",
      label: 'Other Details',
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 18,
    componentProps: {
      name: "priorPlacementDetails",
      label: 'Prior Placement Details',
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 19,
    componentProps: {
      name: "recommendedCarer",
      label: 'Recommended Carer',
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },

  {
    id: 20,
    gridLength: 6,
    componentProps: {
      name: "lAPlacementPlan",
      label: "LA Placement Plan",
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 21,
    gridLength: 6,
    componentProps: {
      name: "lARiskAssessment",
      label: "LA Risk Assessment",
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 22,
    gridLength: 6,
    componentProps: {
      name: "carePlanPtOne ",
      label: "Care Plan Pt 1",
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 23,
    gridLength: 6,
    componentProps: {
        name: "carePlanPtTwo ",
        label: "Care Plan Pt 2",
        sx: { mb: 4 },
      },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 24,
    gridLength: 6,
    componentProps: {
        name: "noFurtherAction",
        label: "No Further Action (Move to Closed Referral)",
        sx: { mb: 4 },
      },
    component: RHFCheckbox,
    md: 6,
  },
]

export const LADetailsFormFormValues = {
    childCode: "",
    referrerName: "",
    referralDate: new Date(),
    lASocialWorkerName: "",
    childGeography: "",
    childPlacingAuthority:"",
    dateLANotified: '',
    localAuthority: "",
    lAAddress: "",
    lAManagerName: "",
    lAManagerTelephone: "",
    lAManagerEmail:"",
    areaTeam: "",
    editNumber: "",
    behavioural: "",
    otherDetails: "",
    priorPlacementDetails: "",
    recommendedCarer: "",
    lAPlacementPlan: "",
    lARiskAssessment: "",
    carePlanPtOne: "",
    carePlanPtTwo: "",
    noFurtherAction: "",
   
  
};

export const LADetailsFormValidationSchema = Yup.object().shape({
    childCode: Yup.string().trim().required("Field is Required"),
    referrerName: Yup.string().trim().required("Field is Required"),
    referralDate: Yup.date().required("Field is Required"),
    lASocialWorkerName: Yup.string().trim().required("Field is Required"),
    childGeography: Yup.string().trim().required("Field is Required"),
    childPlacingAuthority:Yup.string().trim().required("Field is Required"),
    dateLANotified: Yup.string().trim().required("Field is Required"),
    localAuthority: Yup.string().trim().required("Field is Required"),
    lAAddress: Yup.string().trim().required("Field is Required"),
    lAManagerName: Yup.string().trim().required("Field is Required"),
    lAManagerTelephone: Yup.string().trim().required("Field is Required"),
    lAManagerEmail:Yup.string().trim().required("Field is Required"),
    areaTeam: Yup.string().trim().required("Field is Required"),
    editNumber: Yup.string().trim().required("Field is Required"),
    behavioural: Yup.string().trim().required("Field is Required"),
    otherDetails: Yup.string().trim().required("Field is Required"),
    priorPlacementDetails: Yup.string().trim().required("Field is Required"),
    recommendedCarer: Yup.string().trim().required("Field is Required"),
    lAPlacementPlan: Yup.string().trim().required("Field is Required"),
    lARiskAssessment: Yup.string().trim().required("Field is Required"),
    carePlanPtOne: Yup.string().trim().required("Field is Required"),
    carePlanPtTwo: Yup.string().trim().required("Field is Required"),
    noFurtherAction: Yup.string().trim().required("Field is Required"),
   
});

export { default as ApprovedDetailsForm } from "./LADetailsForm";