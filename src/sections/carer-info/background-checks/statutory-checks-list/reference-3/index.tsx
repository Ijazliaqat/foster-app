import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const referenceThreeData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "name",
      label: "Name",
      multiline: false,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "sendDate",
      label: "Sent Date",
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
      name: "receivedDate",
      label: "Received Date",
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
      name: "verifiedDate",
      label: "Verified Date",
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

for (const formControl of referenceThreeData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  name: "",
  sendDate: new Date(),
  receivedDate: new Date(),
  verifiedDate: new Date(),
  comments: "",
};
export const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  sendDate: Yup.date().required("Required"),
  receivedDate: Yup.date().required("Required"),
  verifiedDate: Yup.date().required("Required"),
  comments: Yup.string().required("Required"),
});
