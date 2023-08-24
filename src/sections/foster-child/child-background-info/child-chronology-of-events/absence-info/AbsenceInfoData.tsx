import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const absenceInfoFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfAbsence",
      label: "Date of Absence",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "dateOfReturnFromAbsence",
      label: "Date of Return From Absence",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "schoolName",
      label: "School Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "reasonForAbsence",
      label: "Reason for Absence",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  dateOfAbsence: null,
  dateOfReturnFromAbsence: null,
  schoolName: "Nil",
  reasonForAbsence: "Nil",
  comments: "Nil",
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  dateOfAbsence: Yup.date().required("Required"),
  dateOfReturnFromAbsence: Yup.date().required("Required"),
  schoolName: Yup.string().required("Required"),
  reasonForAbsence: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});
