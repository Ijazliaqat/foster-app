import * as Yup from "yup";

export const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  relationShip: "",
};

export const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("fname is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  lastName: Yup.string()
    .required("lname is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  phoneNo: Yup.string().required("phone is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  relationShip: Yup.string().required("nationality is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "firstName",
      label: "First Name",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "lastName",
      label: "Last Name",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "email",
      label: "Email Address",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "phoneNo",
      label: "Phone Number",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SELECT",
      name: "relationShip",
      label: "Relationship",
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
