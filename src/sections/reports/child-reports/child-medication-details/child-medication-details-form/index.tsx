import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  nameOfChild: "",
  dateTimeOfOccurence: null,
  createdBy: "",
  nameOfFosterCarer: "",
  date: null,
};

export const formSchema = Yup.object().shape({
  nameOfChild: Yup.string().required("Field is required."),
  dateTimeOfOccurence: Yup.string().required("Field is required."),
  createdBy: Yup.string().required("Field is required."),
  nameOfFosterCarer: Yup.string().required("Field is required."),
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
      label: "Date/Time Of Occurence",
      name: "dateTimeOfOccurence",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Created By",
      name: "createdBy",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Medication Name",
      name: "nameOfFosterCarer",
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
