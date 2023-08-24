import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
export * from "./behavioralInfoTable";
export const DummyData = [
  {
    id: 1,
    overallBehavious: 8,
    summary: "Child Behaviour info Summary text",
  },
];
export const BehaviouralInfoFromData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "wasPhysicallyAbused",
      label: "Child was phsically Abused",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "wasSexuallyAbused",
      label: "Child was Sexually Abused",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "isDiagnosedHyperactive",
      label: "Child is Diagnosed Hyperactive",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "wetsTheBed",
      label: "Child wets the Bed",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "hasViolentTendencies",
      label: "Child has violent tendencies",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "isSeverelyWithDrawn",
      label: "Child is Severely Withdrawn",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "isDiagnosedWithAIDS",
      label: "Child is Diagnosed with AIDS",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "exibitsInAppropriateSexualBehaviour",
      label: "Exhibits inappropriate Sexual Behaviour",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "exibitsCrueltyToAnimals",
      label: "Exhibits cruelty to Animals",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "selfInflectedInjuries",
      label: "Self inflected Injuries",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "habitOfStealingLying",
      label: "Habits of Stealing / Lying",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "habitOfSmokingDrugs",
      label: "Habits of Smoking / Drugs",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "habitOfConsumingAlcohol",
      label: "Habits of Consuming Alcohol",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "isDiagnosedWithADHD",
      label: "Child is Diagnosed ADHD",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "overallBehaviour",
      label: "Overall Behaviour (in scale of 1 to 10)",
      multiline: false,
      type: "number",
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "summary",
      label: "Summary",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const BehaviouralInfoDefultValue = {
  wasPhysicallyAbused: true,
  isDiagnosedHyperactive: false,
  hasViolentTendencies: false,
  isDiagnosedWithAIDS: false,
  exibitsCrueltyToAnimals: false,
  habitOfStealingLying: false,
  habitOfConsumingAlcohol: false,
  wasSexuallyAbused: false,
  wetsTheBed: false,
  isSeverelyWithDrawn: false,
  exibitsInAppropriateSexualBehaviour: false,
  selfInflectedInjuries: false,
  habitOfSmokingDrugs: false,
  isDiagnosedWithADHD: false,
  overallBehaviour: null,
  summary: "",
};
export const FormSchema = Yup.object().shape({
  wasPhysicallyAbused: Yup.boolean().required("required"),
  isDiagnosedHyperactive: Yup.boolean().required("required"),
  hasViolentTendencies: Yup.boolean().required("required"),
  isDiagnosedWithAIDS: Yup.boolean().required("required"),
  exibitsCrueltyToAnimals: Yup.boolean().required("required"),
  habitOfStealingLying: Yup.boolean().required("required"),
  habitOfConsumingAlcohol: Yup.boolean().required("required"),
  wasSexuallyAbused: Yup.boolean().required("required"),
  wetsTheBed: Yup.boolean().required("required"),
  isSeverelyWithDrawn: Yup.boolean().required("required"),
  exibitsInAppropriateSexualBehaviour: Yup.boolean().required("required"),
  selfInflectedInjuries: Yup.boolean().required("required"),
  habitOfSmokingDrugs: Yup.boolean().required("required"),
  isDiagnosedWithADHD: Yup.boolean().required("required"),
  overallBehaviour: Yup.number()
    .required("required")
    .positive("must be positive")
    .lessThan(11, "Overall Behaviour must not be less than 10"),
  summary: Yup.string().required("required"),
});
