import * as Yup from "yup";
import { RHFRadioGroup } from "@root/components/hook-form";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const defaultValues = {
  applicationInvolve: "",
  nameOfCourt: "",
  dateOfCourt: new Date(),
  typeOfOrder: "",
  nameOfChildern: "",
  alternativeNote: "",
};

export const FormSchema = Yup.object().shape({
  applicationInvolve: Yup.string().required("Required"),
  nameOfCourt: Yup.string().required("Required"),
  dateOfCourt: Yup.date().required("Required"),
  typeOfOrder: Yup.string().required("Required"),
  nameOfChildern: Yup.string().required("Required"),
  alternativeNote: Yup.string().required("Required"),
});
export const COURTPROCEEDINGSFORMDATA = [
  {
    id: 1,
    heading:
      "Has the applicant been involved in any family court proceedings or in any proceedings about children and/or family?",
    otherOptions: {
      name: "applicationInvolve",
      options: ["Yes", "No"],
    },
    gridLength: 12,
    component: RHFRadioGroup,
  },
  {
    id: 1.5,
    heading: "If yes, give details:",
    variant: "subtitle2",
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Name of court",
      name: "nameOfCourt",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Date of court",
      name: "dateOfCourt",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Type of Order",
      name: "typeOfOrder",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      label: "Names of Children",
      name: "nameOfChildern",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      label:
        "Alternatively, note briefly and cross-reference to the relevant section in the assessment report.",
      name: "alternativeNote",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as CourtProceedingsForm } from "./CourtProceedingsForm";
