export * from "./nextOFKin";
export * from "./nextOfKinForm";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import * as Yup from "yup";
export const DummyData = [
  {
    personName: "abid",
    contactNo: "+9574554556",
    relationship: "xyz",
    data: "xyz",
  },
  {
    personName: "abid",
    contactNo: "+9574554556",
    relationship: "xyz",
    data: "xyz",
  },
];
///FORMDATA
export const NextofkinFromData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "firstName",
      label: "FirstName",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "lastName",
      label: "lastName",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "telephone",
      label: "Telephone",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "mobile",
      label: "Mobile",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "nINumber",
      label: "N.I.Number",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 7,
    gridLength: 12,
    label: "Doctor Details",
    component: "label",
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "doctorName",
      label: "Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "doctorTelephone",
      label: "Telephone",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "doctorAddress",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    label: "Next of Kin",
    component: "label",
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "nkName",
      label: "Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "nkRelation",
      label: "Relationship",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      name: "nkAddress",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      name: "nkTelephone",
      label: "Telephone",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      name: "date",
      label: "date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 16,
    gridLength: 6,
    otherOptions: {
      name: "signature",
      label: "Signature",
    },
    component: SignaturePad,
  },
];
export const formatters: any = {};

for (const formControl of NextofkinFromData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}
export const nextofkinFormValues = {
  firstName: "",
  lastName: "",
  address: "",
  telephone: "",
  mobile: "",
  nINumber: "",
  doctorName: "",
  doctorTelephone: "",
  doctorAddress: "",
  nkName: "",
  nkRelation: "",
  nkAddress: "",
  nkTelephone: "",
  date: new Date(),
  signature: null,
};

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  address: Yup.string().required("required"),
  telephone: Yup.string().required("required"),
  mobile: Yup.string().required("required"),
  nINumber: Yup.string().required("required"),
  doctorName: Yup.string().required("required"),
  doctorTelephone: Yup.string().required("required"),
  doctorAddress: Yup.string().required("required"),
  nkName: Yup.string().required("required"),
  nkRelation: Yup.string().required("required"),
  nkAddress: Yup.string().required("required"),
  nkTelephone: Yup.string().required("required"),
  date: Yup.date().required("required"),
  signature: Yup.mixed().nullable().required("Signature is required"),
});
