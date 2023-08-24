import * as Yup from "yup";

export const defaultValues = {
  documentType: "PDF",
  documentDate: new Date(),
  documentPassword: "",
};

export const FormSchema = Yup.object().shape({
  documentType: Yup.string().required("docsType is required"),
  documentDate: Yup.date()
    .typeError("date is required")
    .required("date is required"),
  documentPassword: Yup.string().required("docsPass is required"),
});

export const fieldsInfo = [
  [
    {
      type: "SELECT",
      name: "documentType",
      label: "Document Type",
      fieldHeader: null,
      options: ["PDF", "DOC", "DOCX"],
    },
  ],

  [
    {
      type: "DATE_PICKER",
      name: "documentDate",
      label: "Document Date ",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "documentPassword",
      label: "Password to Open Document",
      fieldHeader: null,
    },
  ],
];
