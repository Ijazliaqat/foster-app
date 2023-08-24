import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  CaseID: "",
  dateTimeOfOccurence: null,
  childName: "",
  allegationType: "",
  date: null,
  allegationDescription: "",
};

export const formSchema = Yup.object().shape({
  CaseID: Yup.string().required("Field is required."),
  dateTimeOfOccurence: Yup.string().required("Field is required."),
  childName: Yup.string().required("Field is required."),
  allegationType: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
  allegationDescription: Yup.string().required("Field is required."),
});

export const FRF1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Case ID",
      name: "CaseID",
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
      label: "Child Name",
      name: "childName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Allegation Type",
      name: "allegationType",
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
  {
    gridLength: 12,
    otherOptions: {
      label: "Allegation Description",
      name: "allegationDescription",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
];
