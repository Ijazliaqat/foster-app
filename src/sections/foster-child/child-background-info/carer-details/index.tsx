import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import dayjs from "dayjs";
import * as Yup from "yup";

export const ageOf18Years = dayjs().subtract(18, "year");

export const CarerDetailsFormData = [
  {
    id: 0,
    heading: "Carer Details",
    componentProps: {
      variant: "body1",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 1,
    componentProps: {
      name: "fullName",
      label: "Full Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "address",
      label: "Address",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "mobile",
      label: "Mobile",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "telephone",
      label: "Telephone",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "postalCode",
      label: "PostalCode",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "dateOfBirth",
      label: "DOB",
      fullWidth: true,
      maxDate: ageOf18Years.valueOf(),
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 8,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "gender",
      label: "Gender",
      select: true,
    },
    options: GENDERDROPDOWNDATA,
  },
  {
    id: 9,
    componentProps: {
      name: "office",
      label: "Office",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 9,
    componentProps: {
      name: "job",
      label: "Job",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 10,
    componentProps: {
      name: "email",
      label: "Email",
    },
    component: RHFTextField,
    md: 6,
  },
];

export const defaultValues = {
  fullName: "",
  address: "",
  mobile: "",
  telephone: "",
  postalCode: "",
  dateOfBirth: new Date(ageOf18Years.format("MM/DD/YYYY")),
  gender: "",
  office: "",
  job: "",
  email: "",
};

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().trim().required("Field is Required"),
  address: Yup.string().trim().required("Field is Required"),
  mobile: Yup.string()
    .typeError("Must be a number")
    .min(10, "Invalid Mobile Number")
    .matches(/^\+44\d{10}$/, "Invalid Mobile Number")
    .required("Field is Required"),
  telephone: Yup.string()
    .typeError("Must be a number")
    .min(10, "Invalid Telephone Number")
    .matches(/^\+44\d{10}$/, "Invalid Telephone Number")
    .required("Field is Required"),
  dateOfBirth: Yup.date().required("Date is Required"),
  gender: Yup.string().trim().required("Field is Required"),
  office: Yup.string().trim().required("Field is Required"),
  job: Yup.string().trim().required("Field is Required"),
  email: Yup.string().trim().required("Field is Required"),
});

export { default as CarerDetailsForm } from "./CarerDetailsForm";
