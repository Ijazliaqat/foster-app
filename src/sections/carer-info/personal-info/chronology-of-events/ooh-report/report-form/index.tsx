import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const defaultValues = {
  reportDate: new Date(),
  emergencyPlacementRequired: null,
  natureOfCall: "",
  actionTaken: "",
  actionNeeded: "",
  personCompletingReport: "",
  addToChildRecord: "",
};

export const formSchema = Yup.object().shape({
  reportDate: Yup.date().required("required"),
  emergencyPlacementRequired: Yup.boolean().required("required"),
  natureOfCall: Yup.string().required("required"),
  actionTaken: Yup.string().required("required"),
  actionNeeded: Yup.string().required("required"),
  personCompletingReport: Yup.string().required("required"),
  addToChildRecord: Yup.string().required("required"),
});

export const reportData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "reportDate",
      label: "Report Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 2,
    otherOptions: {
      name: "emergencyPlacementRequired",
      label: "Emergency Placement Required?",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "natureOfCall",
      label: "Nature of Call/Reason:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    otherOptions: {
      name: "actionTaken",
      label: "Action Taken:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
  {
    id: 5,
    otherOptions: {
      name: "actionNeeded",
      label: "Action Needed:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "personCompletingReport",
      label: "Person Completing the OOH Report:",
    },
    component: RHFTextField,
  },
  {
    id: 7,
    otherOptions: {
      name: "addToChildRecord",
      label: "Add to Child Record",
      select: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
    ],
  },
];

export const formatters: any = {};

for (const formControl of reportData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}
export { default as ReportForm } from "./ReportForm";

export const personalDetails = [
  {
    id: 1,
    label: "Carer Code",
    name: "FCC-3",
  },
  {
    id: 2,
    label: "Carer Name",
    name: "Sangeetha Subramanian",
  },
  {
    id: 3,
    label: "Supervising Social Worker",
    name: "Not Assigned",
  },
  {
    id: 4,
    label: "Status",
    name: "Approved",
  },
];
