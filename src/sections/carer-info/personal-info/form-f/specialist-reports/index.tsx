import { RHFBooleanRadioGroup } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  parentChildReport: true,
  shortbreakFosteringReport: true,
  permanentFosteringReport: true,
  remandForestingReport: true,
  otherSpecialistReport: true,
};

export const FormSchema = Yup.object().shape({
  parentChildReport: Yup.boolean().required("Required"),
  shortbreakFosteringReport: Yup.boolean().required("Required"),
  permanentFosteringReport: Yup.boolean().required("Required"),
  otherSpecialistReport: Yup.boolean().required("Required"),
  remandForestingReport: Yup.boolean().required("Required"),
});
export const SPECIALISTREPORTSFORMDATA = [
  {
    id: 1,
    gridLength: 6,
    heading: "Parent and child report",
    otherOptions: {
      name: "parentChildReport",
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    component: RHFBooleanRadioGroup,
  },
  {
    id: 2,
    gridLength: 6,
    heading: "Short break fostering report",
    otherOptions: {
      name: "shortbreakFosteringReport",
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    component: RHFBooleanRadioGroup,
  },
  {
    id: 3,
    heading: "Permanent fostering report",
    gridLength: 6,
    otherOptions: {
      name: "permanentFosteringReport",
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    component: RHFBooleanRadioGroup,
  },
  {
    id: 4,
    heading: "Remind fostering report",
    gridLength: 6,
    otherOptions: {
      name: "remandForestingReport",
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    component: RHFBooleanRadioGroup,
  },
  {
    id: 5,
    heading: "Other specialist scheme report",
    otherOptions: {
      name: "otherSpecialistReport",
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    gridLength: 6,
    component: RHFBooleanRadioGroup,
  },
];

export { default as SpecialistReportsForm } from "./SpecialistReportsForm";
