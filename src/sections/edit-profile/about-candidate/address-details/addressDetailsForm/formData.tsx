import * as Yup from "yup";

export const defaultValues = {
  adressFirstLine: "123 Sr#32  Affleck road",
  adressSecondLine: "Rawalpindi 6th road",
  town: "Colchester",
  county: "Essex",
  country: "Pakistan",
  postCode: "C04 3xR",
  from: new Date(),
  to: new Date(),
  curentAddress: false,
};

export const FormSchema = Yup.object().shape({
  adressFirstLine: Yup.string()
    .required("addressFirstLine is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  adressSecondLine: Yup.string()
    .required("addressSecondLine is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  town: Yup.string().required("town is required"),
  county: Yup.string()
    .required("county is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 25 characters"),
  country: Yup.string().required("country is required"),
  postCode: Yup.string().required("postcode is required"),
  from: Yup.string().required("From is required"),
  to: Yup.string().required("to is required"),
  currentAddress: Yup.boolean().required("Current Address is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "adressFirstLine",
      label: "Address First Line",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "adressSecondLine",
      label: "Address Second Line",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "town",
      label: "Town/City",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "county",
      label: "County",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "country",
      label: "Country Name",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "postCode",
      label: "Post Code",
      fieldHeader: null,
    },
  ],
];
