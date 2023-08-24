import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  childName: "",
  carerNameFrom: "",
  carerNameTo: "",
  dateOfTransfer: new Date(),
  transferReport: "",
  approvedBy: "",
  localAuthority: "",
  localAuthoritySw: "",
  status: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  carerNameFrom: Yup.string().required("Field is required"),
  carerNameTo: Yup.string().required("Field is required"),
  dateOfTransfer: Yup.date().required("Field is required"),
  transferReport: Yup.string().required("Field is required"),
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
      label: "Carer Name(from)",
      name: "carerNameFrom",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Carer Name(Transferred To)",
      name: "carerNameTo",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Transfer",
      name: "dateOfTransfer",
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Transfer Report",
      name: "transferReport",
    },
    requireFileUpload: true,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Approved by(Role)",
      name: "approvedBy",
    },
    component: RHFTextField,
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
