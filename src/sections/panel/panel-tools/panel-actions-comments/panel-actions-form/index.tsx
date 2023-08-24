import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";

// =====================================================
export const defaultValues = {
  panelDate: new Date(),
  timeSelection: '',
  caseSelection: "",
  carerSelection: "",
  socailWorker: "",
  comments: "",
  assignee: "",
  dueDate: new Date(),
  actions: "",
};

// ======================================================
export const FormSchema = Yup.object().shape({
  panelDate: Yup.date().required("Field is required"),
  timeSelection: Yup.string().required("Field is required"),
  caseSelection: Yup.string().required("Field is required"),
  carerSelection: Yup.string().required("Field is required"),
  socailWorker: Yup.string().required("Field is required"),
  comments: Yup.string().required("Field is required"),
  assignee: Yup.string().required("Field is required"),
  dueDate: Yup.date().required("Field is required"),
  actions: Yup.string().required("Field is required"),
});

// =========================================================
export const panelActionData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Panel Date",
      name: "panelDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  { gridLength: 6, otherOptions: { fullWidth: true, name: "timeSelection", label: "Time Selection" }, component: RHFTimePicker },
  {
    gridLength: 6,
    otherOptions: {
      name: "carerSelection",
      label: "Case Selection",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "carerSelection",
      label: "Carer Selection",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "socailWorker",
      label: "socail Worker",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

  {
    gridLength: 6,
    otherOptions: {
      label: "Assignee",
      name: "assignee",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      placeholder: "01/01/2010",
      label: "Due Date",
      name: "dueDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "actions",
      label: "Actions",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];