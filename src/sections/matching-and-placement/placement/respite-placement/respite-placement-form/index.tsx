import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  childName: "",
  primaryCarer: "",
  respiteCarerName: "",
  startDate: new Date(),
  endDate: new Date(),
  respitePlan: "",
  approvedBy: "",
  localAuthority: "",
  localAuthoritySw: "",
  status: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  primaryCarer: Yup.string().required("Field is required"),
  respiteCarerName: Yup.string().required("Field is required"),
  startDate: Yup.date().required("Field is required"),
  endDate: Yup.date().required("Field is required"),
  respitePlan: Yup.string().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
  localAuthoritySw: Yup.string().required("Field is required"),
  status: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Child Name",
      name: "childName",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Primary Carer",
      name: "primaryCarer",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
    label: "Respite Carer Name",
      name: "respiteCarerName",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Respite(Start Date)",
      name: "startDate",
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Respite(End Date)",
      name: "endDate",
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Respite Plan",
      name: "respitePlan",
    },
    requireFileUpload: true,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Approved by(Role)",
      name: "approvedBy",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Local Authority",
      name: "localAuthority",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Local Authority SW",
      name: "localAuthoritySw",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Status",
      name: "status",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
];
