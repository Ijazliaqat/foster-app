import * as Yup from "yup";

export const assesmentFormValues = {
  familyBackground: "",
  theFamilyHouse: "",
  pets: "",
  finance: "",
  assesment: "",
  outcome: "",
  managerComments: "",
  managerRecommendation: "",
};

export const defaultValuesAssesmentForm = (data = assesmentFormValues) => {
  return {
    familyBackground: data.familyBackground,
    theFamilyHouse: data.theFamilyHouse,
    pets: data.pets,
    finance: data.finance,
    assesment: data.assesment,
    outcome: data.outcome,
    managerComments: data.managerComments,
    managerRecommendation: data.managerRecommendation,
  };
};
export const assessmentFormSchema = Yup.object().shape({
  familyBackground: Yup.string()
    .trim()
    .required("Family background is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  theFamilyHouse: Yup.string()
    .trim()
    .required("Family house is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  pets: Yup.string()
    .trim()
    .required("Pets is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  finance: Yup.string()
    .trim()
    .required("Finance is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  assesment: Yup.string()
    .trim()
    .required("Assesment is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  outcome: Yup.string()
    .trim()
    .required("Outcome is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  managerComments: Yup.string()
    .trim()
    .required("Manager comments is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  managerRecommendation: Yup.string()
    .trim()
    .required("Manager recommendation is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
});

export const assesmentFormFieldsInfoFunction = (isFieldDisable = false) => [
  {
    type: "textarea",
    fullWidth: true,
    name: "familyBackground",
    label: "",
    title: "Family background",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "theFamilyHouse",
    label: "",
    title: "The family Home (is the accomodation suitable for fostering?):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "pets",
    label: "",
    title:
      "Pets (Do the Applicant/s have any dogs that are currently included on the Dangerous Dogs Act List? Do the Applicant/s keep any other animals at the home?):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "finance",
    label: "",
    title:
      "Finance (Are there any outstanding debts? Are accounts kept up to date or are there any arrears?):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "assesment",
    label: "",
    title: "Assesment (By the officer undertaking the initial visit):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "outcome",
    label: "",
    title:
      "Outcome/Recommendation (State with reasons weather or not the agency should proceed to Stage 1 / Skills to Foster Training):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "managerComments",
    label: "",
    title: "Manager Comment",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "managerRecommendation",
    label: "",
    title: "Manager Recommendation",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
];
