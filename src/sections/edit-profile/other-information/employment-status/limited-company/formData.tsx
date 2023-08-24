import * as Yup from "yup";

export const defaultValues = {
  companyName: "Orcalo Holdings",
  companyNo: "XYZ",
  taxCode: "ZOTI4AX",
  incuranceNo: "4J5KI",
};

export const FormSchema = Yup.object().shape({
  companyName: Yup.string(),
  companyNo: Yup.string(),
  taxCode: Yup.string(),
  incuranceNo: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "companyName",
      label: "Company Name*",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "companyNo",
      label: "Company No*",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "taxCode",
      label: "Pay Tax Code*",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "incuranceNo",
      label: "National Insurance No.*",
      fieldHeader: null,
    },
  ],
];
