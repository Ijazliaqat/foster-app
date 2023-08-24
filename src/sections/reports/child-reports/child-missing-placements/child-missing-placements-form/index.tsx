import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  nameOfChild: "",
  MissingDate: new Date(),
  duration: "",
  notification: "",
  missingType: "",
  date: null,
};

export const formSchema = Yup.object().shape({
  nameOfChild: Yup.string().required("Field is required."),
  MissingDate: Yup.date().required("Field is required."),
  duration: Yup.string().required("Field is required."),
  notification: Yup.string().required("Field is required."),
  missingType: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
});

export const FRF1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of child",
      name: "nameOfChild",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Missing Date",
      name: "MissingDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Duration",
      name: "duration",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Notification",
      name: "notification",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Missing Type",
      name: "missingType",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
