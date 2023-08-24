import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  referenceType: Yup.string()
    .required("refType is required")
    .min(2, "Mininum 6 characters")
    .max(20, "Maximum 50 characters"),
  refereeName: Yup.string()
    .required("refname is required")
    .min(2, "Mininum 6 characters")
    .max(20, "Maximum 50 characters"),
  contactNo: Yup.string().required("refcontact is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  contactNow: Yup.boolean().required("canwereq is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "referenceType",
      label: "Reference Type",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "refereeName",
      label: "Full name of the referee",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "contactNo",
      label: "Contact number of the referee",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "email",
      label: "Email ID of the referee",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "contactNow",
      label: "Can we request reference from this contact now?",
      fieldHeader: null,
    },
  ],
];
