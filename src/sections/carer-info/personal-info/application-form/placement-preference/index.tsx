import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { IMMIGRATIONSTATUS } from "@root/dropdown-data/immigrationStatus";
import { NATIONALITYDROPDOWN } from "@root/dropdown-data/nationality";
import { PLACEMENTTYPE } from "@root/dropdown-data/placementType";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import * as Yup from "yup";

export const defaultValues = {
  ageRange: "",
  placementType: "",
  noOfChildren: "",
  gender: "",
  siblingGroupAcceptable: "",
  ethnicity: "",
  nationality: "",
  religion: "",
  immigrationStatus: "",
  disability: "",
  stateIntrestedInFostering: "",
  childBehaviour: "",
  houseHoldDescription: "",
};

export const FormSchema = Yup.object().shape({
  ageRange: Yup.string().trim().required("Age Range is required"),
  placementType: Yup.string().trim().required("Placement Type is required"),
  noOfChildren: Yup.string().trim().required("Number Children is required"),
  gender: Yup.string().trim().required("Gender is required"),
  siblingGroupAcceptable: Yup.string()
    .trim()
    .required("Sibling Group Acceptable is required"),
  ethnicity: Yup.string().trim().required("Ethnicity is required"),
  nationality: Yup.string().trim().required("Nationality is required"),
  religion: Yup.string().trim().required("Religion is required"),
  immigrationStatus: Yup.string()
    .trim()
    .required("Immigration Status is required"),
  stateIntrestedInFostering: Yup.string()
    .required("Field is Required")
    .min(2, "Mininum 2 characters")
    .max(100, "Maximum 100 characters"),
  childBehviourWouldNotAccept: Yup.string()
    .required("Required")
    .min(2, "Mininum 2 characters")
    .max(100, "Maximum 100 characters"),
  houseHoldDescription: Yup.string()
    .required("Describe your householding is Required")
    .min(2, "Mininum 2 characters")
    .max(100, "Maximum 100 characters"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "ageRange",
      label: "Age Range",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "0 - 10", label: "0 - 10" },
      { value: "11 - 20", label: "11 - 20" },
      { value: "21 - 30", label: "21 - 30" },
      { value: "31 - 40", label: "31 - 40" },
      { value: "41 - 50", label: "41 - 50" },
      { value: "51 - 60", label: "51 - 60" },
      { value: "61 - 70", label: "61 - 70" },
      { value: "71 - 80", label: "71 - 80" },
      { value: "81 - 90", label: "81 - 90" },
      { value: "91 - 100", label: "91 - 100" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "placementType",
      label: "Placement Type",
      fullWidth: true,
      select: true,
    },
    options: PLACEMENTTYPE,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "noOfChildren",
      label: "Number of Children",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "gender",
      label: "Gender",
      fullWidth: true,
      select: true,
    },
    options: GENDERDROPDOWNDATA,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "siblingGroupAcceptable",
      label: "Sibling Group acceptable",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "ethnicity",
      label: "Ethnicity",
      fullWidth: true,
      select: true,
    },
    options: ETHNICITYDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "nationality",
      label: "Nationality",
      fullWidth: true,
      select: true,
    },
    options: NATIONALITYDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "religion",
      label: "Religion",
      fullWidth: true,
      select: true,
    },
    options: RELIGIONDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "immigrationStatus",
      label: "Immigration Status",
      fullWidth: true,
      select: true,
    },
    options: IMMIGRATIONSTATUS,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "disability",
      label: "Disability",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Asylum Seeker", label: "Asylum Seeker" },
      { value: "Blindness", label: "Blindness" },
      { value: "Low-vision", label: "Low-vision" },
      { value: "Leprosy Cured Persons", label: "Leprosy Cured Persons" },
      { value: "Hearing Impairment", label: "Hearing Impairment" },
      { value: "Locomotor Disability", label: "Locomotor Disability" },
      { value: "Dwarfism", label: "Dwarfism" },
      { value: "Intellectual Disability", label: "Intellectual Disability" },
      { value: "Mental Illness", label: "Mental Illness" },
      { value: "Autism Spectrum Disorder", label: "Autism Spectrum Disorder" },
      { value: "Cerebral Palsy", label: "Cerebral Palsy" },
      { value: "Muscular Dystrophy", label: "Muscular Dystrophy" },
      {
        value: "Chronic Neurological Conditions",
        label: "Chronic Neurological Conditions",
      },
      {
        value: "Specific Learning Disabilities",
        label: "Specific Learning Disabilities",
      },
      { value: "Multiple Sclerosis", label: "Multiple Sclerosis" },
      { value: "Hemophilia", label: "Hemophilia" },
      { value: "Chromosomes Abnormality", label: "Chromosomes Abnormality" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "stateIntrestedInFostering",
      label: "Please state why you are interested in fostering",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "childBehviourWouldNotAccept",
      label:
        "Please tell us of any child behaviour you would not accept ( Example: Stealing)",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "houseHoldDescription",
      label:
        "Please describe your householding your own words (i.e Details of children at home or elsewhere who are likely to be  visiting your home regularly)",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as PlacementPreferenceForm } from "./PlacementPreferenceForm";
