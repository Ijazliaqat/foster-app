import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const examGradeInfoFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "schoolYear",
      label: "School Year",
      fullWidth: true,
      type: "number",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "formName",
      label: "Form Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "term",
      label: "Term",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "subject",
      label: "Subject",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "teacher",
      label: "Teacher",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "target",
      label: "Target",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "currentLevel",
      label: "Current Level",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  schoolYear: null,
  formName: "Nil",
  term: "Nil",
  subject: "Nil",
  teacher: "Nil",
  target: "Nil",
  currentLevel: "Nil",
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  schoolYear: Yup.string().required("Required"),
  formName: Yup.string().required("Required"),
  term: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  teacher: Yup.string().required("Required"),
  target: Yup.string().required("Required"),
  currentLevel: Yup.string().required("Required"),
});
