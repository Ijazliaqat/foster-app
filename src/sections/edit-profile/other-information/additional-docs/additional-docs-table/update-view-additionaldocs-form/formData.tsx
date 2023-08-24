import * as Yup from "yup";

export const defaultValues = {
  documentName: "",
};

export const FormSchema = Yup.object().shape({
  documentName: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "documentName",
      label: "Documents Name",
      fieldHeader: null,
    },
    {
      type: null,
      name: "docName",
      label: "Documents Name",
      fieldHeader: null,
    },
  ],
];
