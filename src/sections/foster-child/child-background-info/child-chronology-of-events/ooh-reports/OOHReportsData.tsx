import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import * as Yup from "yup";

export const oohReportsFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "reportDate",
      label: "Report Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "callStartTime",
      label: "Call Start Time",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTimePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "callEndTime",
      label: "Call End Time",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTimePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "callDuration",
      label: "Call Duration",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTimePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "emergencyPlacementRequired",
      label: "Emergency Placement Required ?",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "natureOfCall",
      label: "Nature of Call / Reason",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "actionTaken",
      label: "Action Taken",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "actionNeeded",
      label: "Action Needed",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "personCompletingReport",
      label: "Person Completing the OOH Report",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "updateSiblingRecord",
      label: "Add / Edit to Siblings Record",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
];
export const defaultValues = {
  reportDate: new Date(),
  callStartTime: null,
  callEndTime: null,
  callDuration: null,
  emergencyPlacementRequired: false,
  natureOfCall: "Nil",
  actionTaken: "Nil",
  actionNeeded: "Nil",
  personCompletingReport: null,
  updateSiblingRecord: false,
  // additionalEmailAddresses: null,
  // userToBeNotified: null,
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  reportDate: Yup.date().required("Required"),
  callStartTime: Yup.date().required("Required"),
  callEndTime: Yup.date().required("Required"),
  callDuration: Yup.date().required("Required"),
  natureOfCall: Yup.string().required("Required"),
  actionTaken: Yup.string().required("Required"),
  actionNeeded: Yup.string().required("Required"),
  personCompletingReport: Yup.string().required("Required"),
});
