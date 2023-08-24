import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const DayLogFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "classStudying",
      label: "Class Studying (School)",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "1th Grade", label: "1th Grade" },
      { value: "2th Grade", label: "2th Grade" },
      { value: "3th Grade", label: "3th Grade" },
      { value: "4th Grade", label: "4th Grade" },
      { value: "5th Grade", label: "5th Grade" },
     
    ],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "typeOfExclusion",
      label: "Type of Exclusion",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },

  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "exclusionDate",
      label: "Date of Exclusion",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "returnDate",
      label: "Date of Return",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "exclusionDetails",
      label: "Exclusion Details",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "actionTaken",
      label: "Action Taken",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "outcome",
      label: "Outcome",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  classStudying: null,
  typeOfExclusion: null,
  exclusionDate: new Date(),
  returnDate: new Date(),
  exclusionDetails: "Nil",
  actionTaken: "Nil",
  outcome: "Nil",
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  classStudying: Yup.string().required("Required"),
  typeOfExclusion: Yup.string().required("Required"),
  exclusionDate: Yup.date().required("Required"),
  returnDate: Yup.date().required("Required"),
  actionTaken: Yup.string().required("Required"),
  exclusionDetails: Yup.string().required("Required"),
  outcome: Yup.string().required("Required"),
});
