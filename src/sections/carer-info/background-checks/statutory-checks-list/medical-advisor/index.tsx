import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const medicalAdvisorData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "medicalAppoinmentDate",
      label: "Medical Appoinment Date",
      multiline: false,
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "receivedFromGPDate",
      label: "Received From GP Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "renewDate",
      label: "Renew Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "sendToMedicalAdvisorDate",
      label: "Sent To Medical Advisor Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },

  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "receivedFromMedicalAdvisorDate",
      label: "Received From Medical Advisor Date",
      multiline: false,
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 6,
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

for (const formControl of medicalAdvisorData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  medicalAppoinmentDate: new Date(),
  receivedFromGPDate: new Date(),
  renewDate: new Date(),
  sendToMedicalAdvisorDate: new Date(),
  receivedFromMedicalAdvisorDate: new Date(),
  validDate: new Date(),
  comments: "",
};
export const formSchema = Yup.object().shape({
  medicalAppoinmentDate: Yup.date().required("Required"),
  receivedFromGPDate: Yup.date().required("Required"),
  renewDate: Yup.date().required("Required"),
  sendToMedicalAdvisorDate: Yup.date().required("Required"),
  receivedFromMedicalAdvisorDate: Yup.date().required("Required"),
  comments: Yup.string().required("Required"),
});
