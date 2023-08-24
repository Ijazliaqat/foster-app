import * as Yup from "yup";

export const defaultValues = {
  fname: "Ali",
  lname: "Khan",
  email: "iamemial@email.com",
  phone: "+9230164028524",
  relationship: "Pakistani",
};

export const FormSchema = Yup.object().shape({
  fname: Yup.string()
    .required("fname is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  lname: Yup.string()
    .required("lname is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  phone: Yup.string().required("phone is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  relationship: Yup.string().required("nationality is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "fname",
      label: "First Name",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "lname",
      label: "Last Name",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "email",
      label: "Email",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "phone",
      label: "Phone Number",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SELECT",
      name: "gender",
      label: "Gender",
      fieldHeader: null,
      options: ["Single", "Double"],
    },
    {
      type: null,
      name: "email",
      label: "Email",
      fieldHeader: null,
    },
  ],
];
