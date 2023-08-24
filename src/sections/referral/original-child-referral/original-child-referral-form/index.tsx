import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

// ====================================================================================

export const defaultValues = {
  uploadDate: new Date(),
  referralDate: new Date(),
  dateNotified: new Date(),
};

// ======================================================================================

export const originalChildFormData = [
  {
    gridLength: 6,
    otherOptions: { name: "parentAndChild", label: "Child Or Parent & Child", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "Area Office", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "firstName", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "lastName", label: "Last Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Age", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "gender", label: "Gender", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "ethnicity", label: "Ethnicity", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "ofsteadEthnicity", label: "Ofstead Ethnicity", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "specialNeeds", label: "Special Needs", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "nationality", label: "Nationality", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "language", label: "Language", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "religion", label: "Religion", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "legalStatus", label: "Legal Status", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "immigrationStatus", label: "Immigration Status", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "behaviour", label: "Behaviour", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "childEducation", label: "Is the Child Currently in Education?", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "sibling", label: "Are there any other Sibling?", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    head: "Referral Details",
  },
  {
    gridLength: 6,
    otherOptions: { name: "referralName", label: "Referral Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Referral Date",
      name: "referralDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "reason",
      label: "Reason",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "childAuthority",
      label: "Child Placing Authority",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: { name: "workerName", label: "LA  Worker Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "localAuthority",
      label: "Local Authority",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date LA Notified",
      name: "dateNotified",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "How he/She become a foster child?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "otherDetails",
      label: "Other Details",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];
