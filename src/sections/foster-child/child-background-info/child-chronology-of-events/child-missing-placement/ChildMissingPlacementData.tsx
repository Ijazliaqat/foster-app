import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const ChildMissingPlacementFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "reportDate",
      label: "Report Date To Agency",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "childMissingDate",
      label: "Child Missing Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "childReturnDate",
      label: "Child Return Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "childMissingReason",
      label: "Child Missing Reason",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "agencySocialWorkerInvolved",
      label: "Agency Social Worker Involved",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "returnInterviewConducted",
      label: "Was Return Interview Conducted",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "closureDate",
      label: "Closure Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "personNotifiedName",
      label: "Name of the Person Who Notified",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "personCompletingReportName",
      label: "Name of the Person Completing Report ",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "missingDetails",
      label: "Missing Details",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "actionTakenByAgency",
      label: "Action Taken by Agency",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "actionTakenByCarer",
      label: "Action Taken by Carer",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      name: "outcomeOfMissing",
      label: "Outcome of Missing",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 12,
    otherOptions: {
      name: "actionTakenToPrevent",
      label: "Action to be taken Prevent Reoccurence",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  reportDate: new Date(),
  childMissingDate: new Date(),
  childReturnDate: new Date(),
  childMissingReason: null,
  agencySocialWorkerInvolved: null,
  returnInterviewConducted: false,
  closureDate: new Date(),
  personNotifiedName: "Nil",
  personCompletingReportName: "Nil",
  missingDetails: "Nil",
  actionTakenByAgency: "Nil",
  actionTakenByCarer: "Nil",
  outcomeOfMissing: "Nil",
  actionTakenToPrevent: "Nil",
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  reportDate: Yup.date().required("Required"),
  childMissingDate: Yup.date().required("Required"),
  childReturnDate: Yup.date().required("Required"),
  childMissingReason: Yup.string().required("Required"),
  agencySocialWorkerInvolved: Yup.string().required("Required"),
  closureDate: Yup.date().required("Required"),
  personNotifiedName: Yup.string().required("Required"),
  personCompletingReportName: Yup.string().required("Required"),
  missingDetails: Yup.string().required("Required"),
  actionTakenByAgency: Yup.string().required("Required"),
  actionTakenByCarer: Yup.string().required("Required"),
  outcomeOfMissing: Yup.string().required("Required"),
  actionTakenToPrevent: Yup.string().required("Required"),
});
