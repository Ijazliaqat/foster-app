import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import { COUNTYDROPDOWN } from "@root/dropdown-data/county";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { MARITALSTATUSDROPDOWN } from "@root/dropdown-data/maritalStatus";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import dayjs from "dayjs";

import * as Yup from "yup";

const todayDate = dayjs().format("MM/DD/YYYY");
const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");

export const primaryCarerFormValues = {
  dateOfVisit: todayDate,
  nameOfAgencyWorkingVisiting: "",
  title: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: ageOf18Years,
  gender: "",
  address: "",
  addressLine2: "",
  city: "",
  mobilePhone: "",
  email: "",
  county: "",
  country: "",
  postalCode: "",
  maritalStatus: "",
  ethnicity: "",
  offSetEthnicity: "",
  nationalInsuranceNo: "",
  religion: "",
  practising: "No",
  countryWhereBorn: "",
  howLongLiveInLocalArea: "",
  detailsOfPreviousMarriages: "",
  convictedOfAnyCriminal: "No",
};

export const defaultValuesPrimaryCarer = (data = primaryCarerFormValues) => {
  // const p = data?.practising === "true" ? true : false;
  return {
    dateOfVisit: new Date(data?.dateOfVisit),
    nameOfAgencyWorkingVisiting: data?.nameOfAgencyWorkingVisiting,
    title: data?.title,
    firstName: data?.firstName,
    middleName: data?.middleName,
    lastName: data?.lastName,
    dateOfBirth: new Date(data?.dateOfBirth),
    gender: data?.gender,
    address: data?.address,
    addressLine2: data?.addressLine2,
    city: data?.city,
    mobilePhone: data?.mobilePhone,
    email: data?.email,
    county: data?.county,
    country: data?.country,
    postalCode: data?.postalCode,
    maritalStatus: data?.maritalStatus,
    ethnicity: data?.ethnicity,
    offSetEthnicity: data?.offSetEthnicity,
    nationalInsuranceNo: data?.nationalInsuranceNo,
    religion: data?.religion,
    // practising: data?.practising === "true" ? "Yes" : "No",
    practising: data?.practising === "true",
    // practising: data?.practising,

    countryWhereBorn: data?.countryWhereBorn,
    howLongLiveInLocalArea: data?.howLongLiveInLocalArea,
    detailsOfPreviousMarriages: data?.detailsOfPreviousMarriages,
    convictedOfAnyCriminal: data?.convictedOfAnyCriminal === "true",
  };
};

export const primaryCarerFormSchema = Yup.object().shape({
  dateOfVisit: Yup.date()
    .typeError("Date of visit is required")
    .required("Date of visit is required"),
  nameOfAgencyWorkingVisiting: Yup.string()
    .trim()
    .required("Agency is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  title: Yup.string().required("title is required"),
  firstName: Yup.string()
    .trim()
    .required("First name is required")
    .min(2, "Mininum 2 characters")
    .max(50, "Maximum 50 characters"),
  middleName: Yup.string()
    .trim()
    .required("Middle name is required")
    .min(2, "Mininum 2 characters")
    .max(50, "Maximum 50 characters"),
  lastName: Yup.string()
    .trim()
    .required("Last name is required")
    .min(2, "Mininum 2 characters")
    .max(50, "Maximum 50 characters"),
  dateOfBirth: Yup.date()
    .typeError("Date of birth is required")
    .required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string()
    .trim()
    .required("Address line 1 is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  addressLine2: Yup.string()
    .trim()
    .required("Address line 2 is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  city: Yup.string()
    .trim()
    .required("town is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  mobilePhone: Yup.string()
    .trim()
    .required("mobile is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  county: Yup.string().required("County is required"),
  country: Yup.string().required("Country is required"),
  postalCode: Yup.string()
    .trim()
    .required("Postal code is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  maritalStatus: Yup.string().required("Marital status is required"),
  ethnicity: Yup.string().required("Ethnicity is required"),
  offSetEthnicity: Yup.string().required("Offset ethnicity is required"),
  religion: Yup.string().required("Religion is required"),
  nationalInsuranceNo: Yup.string()
    .trim()
    .required("National insurance no is required"),
  // practising: Yup.string().required("Practising is required"),
  // convictedOfAnyCriminal: Yup.string().required(
  //   "Conviction knowledge is required"
  // ),
  countryWhereBorn: Yup.string().required("Country where born is required"),
  howLongLiveInLocalArea: Yup.string()
    .trim()
    .required("Local area life span is required"),
  detailsOfPreviousMarriages: Yup.string()
    .trim()
    .required("Previous marriages knowledge is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
});

export const primaryCarerFieldsInfoFunction = (isFieldDisable = false) => [
  {
    type: "date",
    fullWidth: true,
    name: "dateOfVisit",
    label: "Date Of Visit",
    disabled: isFieldDisable,
  },
  {
    type: "text",
    fullWidth: true,
    name: "nameOfAgencyWorkingVisiting",
    label: "Name of Agency working visitng",
    disabled: isFieldDisable,
  },
  {
    heading: "Personal Details",
  },
  {
    type: "select",
    fullWidth: true,
    name: "title",
    label: "Title",
    select: true,
    disabled: isFieldDisable,
    options: [
      {
        value: "Mr",
        label: "Mr",
      },
      { value: "Mrs", label: "Mrs" },
      { value: "Miss", label: "Miss" },
      { value: "Ms", label: "Ms" },
      { value: "Dr", label: "Dr" },
      { value: "Dame", label: "Dame" },
    ],
  },
  {
    type: "text",
    fullWidth: true,
    name: "firstName",
    label: "First Name",
    disabled: isFieldDisable,
  },
  {
    type: "text",
    fullWidth: true,
    name: "middleName",
    label: "Middle Name",
    disabled: isFieldDisable,
  },
  {
    type: "text",
    fullWidth: true,
    name: "lastName",
    label: "Last Name",
    disabled: isFieldDisable,
  },
  {
    type: "date",
    fullWidth: true,
    name: "dateOfBirth",
    label: "Date Of Birth",
    disableFuture: true,
    maxDate: new Date(ageOf18Years),
    disabled: isFieldDisable,
  },
  {
    type: "select",

    fullWidth: true,
    name: "gender",
    label: "Gender",
    select: true,
    disabled: isFieldDisable,
    options: GENDERDROPDOWNDATA,
  },
  {
    heading: "Contact Details",
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "address",
    label: "Address",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "addressLine2",
    label: "Address Line 2",
    disabled: isFieldDisable,
    gridSize: { xs: 12 },
  },
  {
    type: "text",
    fullWidth: true,
    name: "city",
    label: "Town/City",
    disabled: isFieldDisable,
  },
  {
    type: "text",
    fullWidth: true,
    name: "mobilePhone",
    label: "Mobile Phone",
    disabled: isFieldDisable,
  },
  {
    type: "email",
    fullWidth: true,
    name: "email",
    label: "Email",
    disabled: isFieldDisable,
  },
  {
    type: "select",
    fullWidth: true,
    name: "county",
    label: "County",
    disabled: isFieldDisable,
    select: true,
    options: COUNTYDROPDOWN,
  },
  {
    type: "select",
    fullWidth: true,
    name: "country",
    label: "Country",
    disabled: isFieldDisable,
    select: true,
    options: COUNTRIESDROPDOWN,
  },
  {
    type: "text",
    fullWidth: true,
    name: "postalCode",
    label: "Postal Code",
    disabled: isFieldDisable,
  },
  {
    type: "select",
    fullWidth: true,
    name: "maritalStatus",
    label: "Marital Status",
    disabled: isFieldDisable,
    select: true,
    options: MARITALSTATUSDROPDOWN,
  },
  {
    type: "select",
    fullWidth: true,
    name: "ethnicity",
    label: "Ethnicity",
    disabled: isFieldDisable,
    select: true,
    options: ETHNICITYDROPDOWN,
  },
  {
    type: "select",
    fullWidth: true,
    name: "offSetEthnicity",
    label: "Offset Ethnicity",
    disabled: isFieldDisable,
    select: true,
    options: ETHNICITYDROPDOWN,
  },
  {
    type: "select",
    fullWidth: true,
    name: "religion",
    label: "Religion",
    select: true,
    options: RELIGIONDROPDOWN,
    disabled: isFieldDisable,
  },
  {
    type: "text",
    fullWidth: true,
    name: "nationalInsuranceNo",
    label: "National Insurance NO",
    disabled: isFieldDisable,
  },
  {
    type: "radio",
    name: "practising",
    label: "Practising",
    options: [true, false],
    // options: ["Yes", "No"],
    getOptionLabel: ["Yes", "No"],
    disabled: isFieldDisable,
  },
  {
    type: "select",
    fullWidth: true,
    name: "countryWhereBorn",
    label: "What Country was Primary Carer Born in?",
    select: true,
    disabled: isFieldDisable,
    options: COUNTRIESDROPDOWN,
  },
  {
    type: "text",
    fullWidth: true,
    name: "howLongLiveInLocalArea",
    label: "How Long have they lived in the local area?",
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "detailsOfPreviousMarriages",
    label:
      "Detail of previous marriages/civil partnerships/relationships where you have lives together?",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "radio",
    name: "convictedOfAnyCriminal",
    label:
      "Have you ever been convicted of any criminal or civil offense? Have you got any cautions or outstanding court orders?",
    options: [true, false],
    getOptionLabel: ["Yes", "No"],
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
];
