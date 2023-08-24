import * as Yup from "yup";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const ClaReviewFormData = [
  {
    id: 1,
    componentProps: {
      name: "dateOfReview",
      label: "Date of Review",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 2,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "reviewType",
      label: "Review Type",
      select: true,
    },
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
  },
  {
    id: 3,
    componentProps: {
      name: "dueDate",
      label: "Due Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "onFile",
      label: "On File",
      select: true,
    },
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
  },
  {
    id: 5,
    componentProps: {
      name: "updtaeCarePlan",
      label: "Does Child have upto Date Care Plan",
    },
    component: RHFCheckbox,
    md: 12,
  },
  {
    id: 6,
    componentProps: {
      name: "label",
      label: "Label",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 7,
    componentProps: {
      name: "addEditSiblingRecord",
      label: "Add / Edit Sibling Record",
    },
    component: RHFCheckbox,
    md: 12,
  },
];

export const defaultValues = {
  dateOfReview: new Date(),
  reviewType: "",
  dueDate: new Date(),
  onFile: "",
  updtaeCarePlan: false,
  label: "",
  addEditSiblingRecord: false,
};

export const ClaReviewFormSchema = Yup.object().shape({
  dateOfReview: Yup.date().required("Field is Required"),
  reviewType: Yup.string().trim().required("Field is Required"),
  dueDate: Yup.date().required("Field is Required"),
  onFile: Yup.string().trim().required("Field is Required"),
  updtaeCarePlan: Yup.boolean(),
  label: Yup.string().trim().required("Field is Required"),
  addEditSiblingRecord: Yup.boolean(),
});

export { default as ClaReviewForm } from "./ClaReviewForm";
