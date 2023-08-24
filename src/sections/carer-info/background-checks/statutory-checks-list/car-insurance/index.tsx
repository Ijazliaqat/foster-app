import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const carInsuranceData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "registrationNumber",
      label: "Registration Number",
      multiline: false,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "insurerName",
      label: "Insurer Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "policyNumber",
      label: "Policy Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "validToDate",
      label: "Valid to Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const formatters: any = {};

for (const formControl of carInsuranceData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  registrationNumber: "",
  insurerName: "",
  policyNumber: "",
  validToDate: new Date(),
  comments: "",
};
export const formSchema = Yup.object().shape({
  registrationNumber: Yup.string().required("Required"),
  insurerName: Yup.string().required("Required"),
  policyNumber: Yup.string().required("Required"),
  validToDate: Yup.date().required("Required"),
  comments: Yup.string().required("Required"),
});
