import * as Yup from "yup";

export const defaultValues = {
  incuranceNo: "Orcalo Holdings",
  UTR: "XYZ",
};

export const FormSchema = Yup.object().shape({
  iNum: Yup.string(),
  utr: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "incuranceNo",
      label: "National Insurance No.",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "UTR",
      label: "UTR",
      fieldHeader: null,
    },
  ],
];
