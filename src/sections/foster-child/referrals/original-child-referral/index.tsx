import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import dayjs from "dayjs";
import * as Yup from "yup";

export const OriginalChildReferralData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "First Name",
      name: "firstName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Middle Name",
      name: "middleName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Last Name",
      name: "lastName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "dob",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      label: "Gender",
      name: "gender",
      fullWidth: true,
    },
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Ethnicity",
      name: "ethnicity",
      fullWidth: true,
    },
    options: [
      { value: "hispanicorlatino", label: "Hispanic or Latino" },
      { value: "nothispanicorlatino", label: "Not Hispanic or Latino" },
    ],
    component: RHFSelect,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      label: "Ofstead Ethnicity",
      name: "ofsteadEthnicity",
      fullWidth: true,
    },
    options: [
      { value: "hispanicorlatino", label: "Hispanic or Latino" },
      { value: "nothispanicorlatino", label: "Not Hispanic or Latino" },
    ],
    component: RHFSelect,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      label: "Religion",
      name: "religion",
      fullWidth: true,
    },
    options: [{ value: "Islam", label: "Islam" }],
    component: RHFSelect,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      label: "Nationality",
      name: "nationality",
      fullWidth: true,
    },
    options: [{ value: "pakistani", label: "Pakistani" }],
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      label: "Immigration Status",
      name: "immigrationStatus",
      fullWidth: true,
    },
    options: [{ value: "refugee", label: "Refugee" }],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      label: "Language",
      name: "language",
      fullWidth: true,
    },
    options: [{ value: "english", label: "English" }],
    component: RHFSelect,
  },

  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      label: "Sibling",
      name: "sibling",
      fullWidth: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      label: "Adoption Consideration",
      name: "adoptionConsideration",
      fullWidth: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 13,
    otherOptions: {
      label: "Child Mental Health Status",
      name: "mentalHealthStatus",
      options: ["Yes", "No"],
      sx: { mb: 1 },
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 17,
    otherOptions: {
      name: "mentalHealthDescription",
      label: "Details Here",
      multiline: true,
      rows: 3,
      fullWidth: true,
      sx: { mb: 4 },
    },
    toShowKey: "mentalHealthStatus",
    toShow: "Yes",
    component: RHFTextField,
    md: 12,
  },
  {
    id: 12,
    otherOptions: {
      label: "Child Physical Disability",
      name: "childPhysicalDisability",
      options: ["Yes", "No"],
      sx: { mb: 1 },
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 18,
    otherOptions: {
      name: "physicalDisabilityDescription",
      label: "Details Here",
      multiline: true,
      rows: 3,
      fullWidth: true,
      sx: { mb: 4 },
    },
    toShowKey: "childPhysicalDisability",
    toShow: "Yes",
    component: RHFTextField,
    md: 12,
  },
];

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  dob: new Date(todayDate),
  gender: "",
  ethnicity: "",
  ofsteadEthnicity: "",
  religion: "",
  nationality: "",
  immigrationStatus: "",
  language: "",
  childPhysicalDisability: "No",
  physicalDisabilityDescription:"",
  mentalHealthStatus: "No",
  mentalHealthDescription: "",
  sibling: "",
  adoptionConsideration: "",
};

export const viewOriginalChild = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  middleName: Yup.string(),
  lastName: Yup.string().required("Required"),
  dob: Yup.date().required("Required"),
  gender: Yup.string().required("Required"),
  ethnicity: Yup.string().required("Required"),
  ofsteadEthnicity: Yup.string().required("Required"),
  religion: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  immigrationStatus: Yup.string().required("Required"),
  language: Yup.string().required("Required"),
  childPhysicalDisability: Yup.string().required("Required"),
  mentalHealthStatus: Yup.string().required("Required"),
  sibling: Yup.string().required("Required"),
  adoptionConsideration: Yup.string().required("Required"),
});
