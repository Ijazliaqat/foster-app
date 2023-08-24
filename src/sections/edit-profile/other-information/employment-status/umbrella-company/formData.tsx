import * as Yup from "yup";

export const defaultValues = {
  companyName: "Orcalo Holdings",
  companyPhone: "XYZ",
  companyEmail: "creative@test.com",
};

export const FormSchema = Yup.object().shape({
  companyName: Yup.string(),
  companyPhone: Yup.string(),
  companyEmail: Yup.string()
    .required("Email is required")
    .email("Invalid Email"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "companyName",
      label: "Umbrella Company Name*",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "companyPhone",
      label: "Umbrella Company Phone*",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "companyEmail",
      label: "Umbrella Company Email*",
      fieldHeader: null,
    },
    {
      type: null,
      name: "nationalInsNum",
      label: "National Insurance No.*",
      fieldHeader: null,
    },
  ],
];
