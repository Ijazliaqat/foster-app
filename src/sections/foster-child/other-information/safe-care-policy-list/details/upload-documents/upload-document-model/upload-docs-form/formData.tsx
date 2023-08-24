import * as Yup from "yup";

export const defaultValues = {
  docType: "PDF",
  date: new Date(),
  password: "",
};

export const FormSchema = Yup.object().shape({
  docType: Yup.string().required("docsType is required"),
  date: Yup.date().typeError("date is required").required("date is required"),
  password: Yup.string().required("password is required"),
});

export const fieldsInfo = [
  [
    {
      type: "SELECT",
      name: "docType",
      label: "Document Type",
      fieldHeader: null,
      options: ["PDF", "DOC", "DOCX"],
    },
  ],

  [
    {
      type: "DATE_PICKER",
      name: "date",
      label: "Document Date ",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "password",
      label: "Password to Open Document",
      fieldHeader: null,
    },
  ],
];
