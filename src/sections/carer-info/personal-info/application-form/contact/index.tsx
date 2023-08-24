import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import { COUNTYDROPDOWN } from "@root/dropdown-data/county";
import * as Yup from "yup";

export const defaultValues = {
  address: "",
  addressLine2: "",
  town: "",
  telephone: "",
  county: "",
  country: "",
  postalCode: "",
};

export const FormSchema = Yup.object().shape({
  address: Yup.string()
    .required("Address is required")
    .min(6, "Mininum 6 characters"),
  town: Yup.string()
    .required("City is required")
    .min(2, "Mininum 2 characters")
    .max(20, "Maximum 20 characters"),
  telephone: Yup.string()
    .required("Telephone is required")
    .min(4, "Mininum 4 characters")
    .max(35, "Maximum 35 characters"),
  county: Yup.string().trim().required("County is required"),
  country: Yup.string().trim().required("Country is required"),
  postalCode: Yup.string()
    .required("Postal Code is required")
    .min(2, "Mininum 2 characters")
    .max(20, "Maximum 20 characters"),
});
export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "addressLine2",
      label: "Address Line 2",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "town", label: "Town/City", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "telephone", label: "Telephone", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "county",
      label: "County",
      fullWidth: true,
      select: true,
    },
    options: COUNTYDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "country",
      label: "Country",
      fullWidth: true,
      select: true,
    },
    options: COUNTRIESDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: { name: "postalCode", label: "Postal Code", fullWidth: true },
    component: RHFTextField,
  },
];
export { default as ContactForm } from "./ContactForm";
