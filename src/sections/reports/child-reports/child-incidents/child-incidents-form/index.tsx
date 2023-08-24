import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  caseId: "",
  dateTimeOfOccurence: null,
  childName: "",
  incidentType: "",
  date: null,
  incidentDescription: "",
};

export const formSchema = Yup.object().shape({
  caseId: Yup.string().required("Field is required."),
  dateTimeOfOccurence: Yup.string().required("Field is required."),
  childName: Yup.string().required("Field is required."),
  incidentType: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
  incidentDescription: Yup.string().required("Field is required."),
});

export const FRF1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Case ID",
      name: "caseId",
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
      label: "Incident Type",
      name: "incidentType",
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
      label: "Incident Description",
      name: "incidentDescription",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
];
