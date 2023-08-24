import * as Yup from "yup";
import { RHFTextField, RHFRadioGroup } from "@root/components/hook-form";

export const defaultValues = {
  financailAssessmentCompleted: "Yes",
  detailsOfApplicantsIncome: "Yes",
  petQuestionnaireCompleted: "Yes",
  detailsOfAnyPetAndAnimal: "Yes",
};

export const FormSchema = Yup.object().shape({
  financailAssessmentCompleted: Yup.string().required("Required"),
  detailsOfApplicantsIncome: Yup.string().required("Required"),
  petQuestionnaireCompleted: Yup.string().required("Required"),
  detailsOfAnyPetAndAnimal: Yup.string().required("Required"),
});
export const HOUSEHOLDFINANCEPETSANIMALSFORMDATA = [
  {
    id: 1,
    gridLength: 12,
    heading:
      "Has a financial assessment form been completed ? (If yes, this may be included in Section C)",
    otherOptions: {
      name: "financailAssessmentCompleted",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      label:
        "Provide details of the applicant(s) income and expenditure. Describe how this has been verified and note any impliations for fostering.",
      name: "detailsOfApplicantsIncome",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2.5,
    heading: "Pet and Animals",
    variant: "subtitle2",
  },
  {
    id: 3,
    gridLength: 12,
    heading:
      "Has a pet questionnaire or checklist been completed ? (If yes, this may be included in section C)",
    otherOptions: {
      name: "petQuestionnaireCompleted",
      options: ["Yes", "No"],
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      label:
        "Provide brief details of any pets or animal in the household includeing species, number and age. Describe the relevance of the pets or animals in relation to fostering.",
      name: "detailsOfAnyPetAndAnimal",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as HouseholdFinancePetsAnimalsForm } from "./HouseholdFinancePetsAnimalsForm";
