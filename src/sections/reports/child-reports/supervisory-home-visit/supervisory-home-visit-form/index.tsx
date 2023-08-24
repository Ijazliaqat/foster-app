import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  supervisingSocialWorker: "",
  dateOfVisit: null,
  visitType: "",
  visitStatus: "",
  category: "",
  date: null,
  createdBy: "",
};

export const formSchema = Yup.object().shape({
  supervisingSocialWorker: Yup.string().required("Field is required."),
  dateOfVisit: Yup.string().required("Field is required."),
  visitType: Yup.string().required("Field is required."),
  visitStatus: Yup.string().required("Field is required."),
  category: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
  createdBy: Yup.string().required("Field is required."),
});

export const FRF1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Supervising Social Worker",
      name: "supervisingSocialWorker",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of visit",
      name: "dateOfVisit",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Visit Type",
      name: "visitType",
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
      label: "Visit Status",
      name: "visitStatus",
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
      label: "Category",
      name: "category",
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
    gridLength: 6,
    otherOptions: {
      label: "Created By",
      name: "createdBy",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
