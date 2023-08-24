import {  RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const ImmunisationInfoFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfImmunisation",
      label: "Date Of Immunisation",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },

  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "immunisationType",
      label: "Immunisation Type",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "dueDate",
      label: "Due Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
export const defaultValues = {
  dateOfImmunisation: null,
  immunisationType: "Nil",
  dueDate: new Date(),
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  dateOfImmunisation: Yup.date().required("Required"),
  immunisationType: Yup.string().required("Required"),
  dueDate: Yup.date().required("Required"),
});
