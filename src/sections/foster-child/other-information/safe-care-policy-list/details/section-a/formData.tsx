import * as Yup from "yup";

export const defaultValues = {
  childRecord: "",
  inspectionDate: new Date(),
  nextInspectionDate: new Date(),
};

export const FormSchema = Yup.object().shape({
  childRecord: Yup.string().required("fname is required"),
  inspectionDate: Yup.date()
    .typeError("date is required")
    .required("date is required"),
  nextInspectionDate: Yup.date()
    .typeError("date is required")
    .required("date is required"),
});

export const fieldsInfo = [
  [
    {
      type: "SELECT",
      name: "childRecord",
      label: "Add to Child Record",
      fieldHeader: null,
      options: ["Value1", "Value2"],
    },
    {
      type: null,
      name: "",
      label: "",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "DATE_PICKER",
      name: "nextInspectionDate",
      label: "Next Inspection Date",
      fieldHeader: null,
    },
    {
      type: "DATE_PICKER",
      name: "inspectionDate",
      label: " Inspection Date",
      fieldHeader: null,
    },
  ],
];
