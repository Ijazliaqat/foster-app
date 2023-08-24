import { RHFSwitch, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const placementReferenceData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "placementReference",
      label: "Mention any specific placement preference",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    title: "Select Criteria For Child Placement",
    gridLength: 3,
    otherOptions: {
      name: "ethinicity",
      label: "Ethinicity",
    },
    component: RHFSwitch,
  },
  {
    id: 3,
    gridLength: 3,
    otherOptions: {
      name: "placementWithSiblings",
      label: "Placement with Siblings",
    },
    component: RHFSwitch,
  },
  {
    id: 4,
    gridLength: 3,
    otherOptions: {
      name: "fosterCarerAvailabilty",
      label: "Foster Careres Availability",
    },
    component: RHFSwitch,
  },
  {
    id: 5,
    gridLength: 3,
    otherOptions: {
      name: "specialRequirements",
      label: "Special Requirements",
    },
    component: RHFSwitch,
  },
  {
    id: 6,
    gridLength: 3,
    otherOptions: {
      name: "language",
      label: "Language",
    },
    component: RHFSwitch,
  },
  {
    id: 7,
    gridLength: 3,
    otherOptions: {
      name: "connectedPerson",
      label: "Connected Person",
    },
    component: RHFSwitch,
  },
  {
    id: 8,
    gridLength: 3,
    otherOptions: {
      name: "childFamilyHistory",
      label: "Child Family History",
    },
    component: RHFSwitch,
  },
  {
    id: 9,
    gridLength: 3,
    otherOptions: {
      name: "childPhysicalHealth",
      label: "Child Physical Health",
    },
    component: RHFSwitch,
  },
  {
    id: 10,
    gridLength: 3,
    otherOptions: {
      name: "religion",
      label: "Religion",
    },
    component: RHFSwitch,
  },
  {
    id: 11,
    gridLength: 3,
    otherOptions: {
      name: "adoptionConsideration",
      label: "Adoption Consideration",
    },
    component: RHFSwitch,
  },
  {
    id: 12,
    gridLength: 3,
    otherOptions: {
      name: "childFamilyLifeStory",
      label: "Child Family Left Story",
    },
    component: RHFSwitch,
  },
  {
    id: 13,
    gridLength: 3,
    otherOptions: {
      name: "childMentalHealth",
      label: "Child Mental Health",
    },
    component: RHFSwitch,
  },
  {
    id: 14,
    gridLength: 3,
    otherOptions: {
      name: "locality",
      label: "Locality",
    },
    component: RHFSwitch,
  },
  {
    id: 15,
    gridLength: 3,
    otherOptions: {
      name: "ageOfChild",
      label: "Age of the Child",
    },
    component: RHFSwitch,
  },
  {
    id: 16,
    gridLength: 3,
    otherOptions: {
      name: "childDevelopmentalNeeds",
      label: "Child Development Needs",
    },
    component: RHFSwitch,
  },
  {
    id: 17,
    gridLength: 3,
    otherOptions: {
      name: "respite",
      label: "Temporary Arrangements / Respite",
    },
    component: RHFSwitch,
  },
  {
    id: 18,
    gridLength: 3,
    otherOptions: {
      name: "preferenceOfChild",
      label: "Preference of the Child",
    },
    component: RHFSwitch,
  },
  {
    id: 19,
    gridLength: 3,
    otherOptions: {
      name: "preferenceOfCarer",
      label: "Preference of the Carer",
    },
    component: RHFSwitch,
  },
];

export const defaultValues = {
  placementReference: "",
  ethinicity: null,
  placementWithSiblings: null,
  fosterCarerAvailabilty: null,
  specialRequirements: null,
  language: null,
  connectedPerson: null,
  childFamilyHistory: null,
  childPhysicalHealth: null,
  religion: null,
  adoptionConsideration: null,
  childFamilyLifeStory: null,
  childMentalHealth: null,
  locality: null,
  ageOfChild: null,
  childDevelopmentalNeeds: null,
  respite: null,
  preferenceOfChild: null,
  preferenceOfCarer: null,
};

export const formSchema = Yup.object().shape({
  placementReference: Yup.string().required(),
  ethinicity: Yup.boolean().required(),
  placementWithSiblings: Yup.boolean().required(),
  fosterCarerAvailabilty: Yup.boolean().required(),
  specialRequirements: Yup.boolean().required(),
  language: Yup.boolean().required(),
  connectedPerson: Yup.boolean().required(),
  childFamilyHistory: Yup.boolean().required(),
  childPhysicalHealth: Yup.boolean().required(),
  religion: Yup.boolean().required(),
  adoptionConsideration: Yup.boolean().required(),
  childFamilyLifeStory: Yup.boolean().required(),
  childMentalHealth: Yup.boolean().required(),
  locality: Yup.boolean().required(),
  ageOfChild: Yup.boolean().required(),
  childDevelopmentalNeeds: Yup.boolean().required(),
  respite: Yup.boolean(),
  preferenceOfChild: Yup.boolean().required(),
  preferenceOfCarer: Yup.boolean().required(),
});
