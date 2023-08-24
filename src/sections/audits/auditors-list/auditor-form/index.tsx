import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import * as Yup from "yup";

export const initialValues = {
  name: "",
  gender: "",
  areaOffice: "",
  role: "",
  auditType: "",
  assigneeType: "",
  assignee: "",
  dueDate: new Date(),
};

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  gender: Yup.string().required("Field is required"),
  areaOffice: Yup.string().required("Field is required"),
  role: Yup.string().required("Field is required"),
  auditType: Yup.string().required("Field is required"),
  assigneeType: Yup.string().required("Field is required"),
  assignee: Yup.string().required("Field is required"),
  dueDate: Yup.date().required("Field is required"),
});

export const setupFormData = [
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "name",
      label: "Name",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "gender",
      label: "Gender",
      select: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "areaOffice",
      label: "Area Office",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "role",
      label: "Role",
      select: true,
      options: [
        { value: "all", label: "All" },
        { value: "chile", label: "Child" },
        { value: "carer", label: "Carer" },
        { value: "social worker", label: "Social Worker" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "auditType",
      label: "Audit Type",
      select: true,
      options: [
        { value: "annual review", label: "Annual Review" },
        { value: "monthly progress report", label: "Monthly Progress Report" },
        { value: "risk assessment", label: "Risk Assessment" },
        { value: "complaints", label: "Complaints" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    divider: true,
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "assigneeType",
      label: "Select Assignee Type",
      select: true,
      options: [{ value: "select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "assignee",
      label: "Select Assignee",
      select: true,
      options: [{ value: "select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: "dueDate",
      label: "Due Date",
    },
    component: RHFDatePicker,
  },
];
