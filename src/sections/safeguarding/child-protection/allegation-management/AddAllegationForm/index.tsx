import {
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
  name: "",
  agency: "",
  jobTitle: "",
  telNo: "",
  email: "",
  nameRole: "",
  familyName: "",
  givenName: "",
  homeAddress: "",
  allegationTelNo: "",
  allegationEmail: "",
  allegationJobTitle: "",
  ethnicity: "",
  allegationGender: "",
  workplaceAddress: "",
  employingAddress: "",
  childrenNameOne: "",
  childrenDateOne: new Date(),
  childrenNameTwo: "",
  childrenDateTwo: new Date(),
  childrenNameThree: "",
  childrenDateThree: new Date(),
  redaringPerson: "",
  datesOutcome: "",
  personHomeAddress: "",
  personGivenName: "",
  dateOfBirth: new Date(),
  personFamilyName: "",
  personGender: "",
  dateOfIncident: new Date(),
  timeOfIncident: new Date(),
  incidentAndAllegation: "",
  referralInformation: "",
  nameOfPotential: "",
  personTelNo: "",
  personEmail: "",
  refferedFamilyName: "",
  refferedTelNo: "",
  refferedEmail: "",
  immediateSafeguarding: "",
  advise: "",
};

export const AddAllegationFormSchema = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  agency: Yup.string().required("Field is required"),
  jobTitle: Yup.string().required("Field is required"),
  telNo: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  nameRole: Yup.string().required("Field is required"),
  familyName: Yup.string().required("Field is required"),
  givenName: Yup.string().required("Field is required"),
  homeAddress: Yup.string().required("Field is required"),
  allegationTelNo: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  allegationEmail: Yup.string()
    .required("Email is required")
    .email("Invalid Email"),
  allegationJobTitle: Yup.string().required("Field is required"),
  ethnicity: Yup.string().required("Field is required"),
  allegationGender: Yup.string().required("Field is required"),
  workplaceAddress: Yup.string().required("Field is required"),
  employingAddress: Yup.string().required("Field is required"),
  childrenNameOne: Yup.string().required("Field is required"),
  childrenDateOne: Yup.date().required("Field is required"),
  childrenNameTwo: Yup.string(),
  childrenDateTwo: Yup.date(),
  childrenNameThree: Yup.string(),
  childrenDateThree: Yup.date(),
  redaringPerson: Yup.string().required("Field is required"),
  datesOutcome: Yup.string().required("Field is required"),
  personFamilyName: Yup.string().required("Field is required"),
  personGivenName: Yup.string().required("Field is required"),
  dateOfBirth: Yup.date().required("Field is required"),
  personGender: Yup.string().required("Field is required"),
  personHomeAddress: Yup.string().required("Field is required"),
  dateOfIncident: Yup.date().required("Field is required"),
  timeOfIncident: Yup.date().required("Field is required"),
  incidentAndAllegation: Yup.string().required("Field is required"),
  referralInformation: Yup.string(),
  nameOfPotential: Yup.string().required("Field is required"),
  personTelNo: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  personEmail: Yup.string()
    .required("Email is required")
    .email("Invalid Email"),
  refferedFamilyName: Yup.string().required("Field is required"),
  refferedTelNo: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  refferedEmail: Yup.string()
    .required("Email is required")
    .email("Invalid Email"),
  immediateSafeguarding: Yup.string().required("Field is required"),
  advise: Yup.string().required("Field is required"),
});

// Name of Refferer And Agency
export const addAllegationFormData = [
  {
    gridLength: 12,
    head: "Name of Refferer And Agency",
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Name",
      name: "name",
      fullWidth: true,
      sx: { width: { lg: "48.6%", md: "100%", xs: "100%" }, clear: "both" },
    },

    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Agency", name: "agency", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Job Title / Role",
      name: "jobTitle",
      fullWidth: true,
    },

    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Tel No", name: "telNo", fullWidth: true },

    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Email", name: "email", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Who is Risk? Name and Role",
      name: "nameRole",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  // Name of Reffered Person
  {
    gridLength: 12,
    head: "Name of Reffered Person",
  },
  {
    gridLength: 6,
    otherOptions: { label: "Family Name", name: "familyName", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Given Name", name: "givenName", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Home Address",
      name: "homeAddress",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Tel No", name: "allegationTelNo", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Email", name: "allegationEmail", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Job Title / Role",
      name: "allegationJobTitle",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Ethnicity", name: "ethnicity", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Gender",
      name: "allegationGender",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Workplace Address",
      name: "workplaceAddress",
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
      label: "Employing Address",
      name: "employingAddress",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

  // own children
  // Children One
  {
    gridLength: 12,
    head: "Own Children",
  },
  {
    gridLength: 6,
    otherOptions: { label: "Name", name: "childrenNameOne", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "childrenDateOne",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  // Children Two
  {
    gridLength: 6,
    otherOptions: { label: "Name", name: "childrenNameTwo", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "childrenDateTwo",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  // Children Three
  {
    gridLength: 6,
    otherOptions: { label: "Name", name: "childrenNameThree", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "childrenDateThree",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  // switch

  {
    gridLength: 12,
    title: "Have There been any prior concerns regarding this person / persons",
    otherOptions: {
      defaultValue: "Yes",
      name: "redaringPerson",
      options: ["Yes", "No"],
      fullWidth: true,
      sx: { marginLeft: "0 !important" },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "If yes please give details, dates and outcome",
    otherOptions: {
      name: "datesOutcome",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

  // Details of Child(ren) or Young Person
  {
    gridLength: 12,
    head: "Details of Child(ren) or Young Person",
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Family Name",
      name: "personFamilyName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Given Name",
      name: "personGivenName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "dateOfBirth",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Home Address",
      name: "personHomeAddress",
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
      label: "Gender",
      name: "personGender",
      fullWidth: true,
      select: true,
      sx: { width: { lg: "48.6%", md: "100%", xs: "100%" }, clear: "both" },
    },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    component: RHFSelect,
  },

  // Second Form => Name of Reffered Person
  {
    gridLength: 12,
    head: "Name of Reffered Person",
  },
  {
    gridLength: 6,
    otherOptions: { name: "dateOfIncident", fullWidth: true },
    title: "Date of incident / Allegation",
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: { name: "timeOfIncident", fullWidth: true },
    title: "Time of incident / Allegation",
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Location of incident / Allegation",
      name: "incidentAndAllegation",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "REFERRAL INFORMATION: Include details if any injuries / harm",
    otherOptions: {
      name: "referralInformation",
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
      label: "Name of Potential Witness(es)",
      name: "nameOfPotential",
      fullWidth: true,
      sx: { width: { lg: "48.6%", md: "100%", xs: "100%" }, clear: "both" },
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Tel No", name: "personTelNo", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Email", name: "personEmail", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Family Name",
      name: "refferedFamilyName",
      fullWidth: true,
      sx: { width: { lg: "48.6%", md: "100%", xs: "100%" }, clear: "both" },
    },

    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Tel No", name: "refferedTelNo", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { label: "Email", name: "refferedEmail", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Have any immediate safeguarding concerns been addressed",
    otherOptions: {
      defaultValue: "Yes",
      name: "immediateSafeguarding",
      options: ["Yes", "No"],
      fullWidth: true,
      sx: { marginLeft: "0 !important" },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      title: "If yes please advise",
      name: "advise",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];
