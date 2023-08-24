import * as Yup from "yup";

export const defaultValues = {
  userName: "",
  bankName: "",
  sortCode: "",
  accountNumber: "",
  accountType: "",
  accountPreference: "",
};

export const FormSchema = Yup.object().shape({
  userName: Yup.string(),
  bankName: Yup.string(),
  sortCode: Yup.string(),
  accountNumber: Yup.string(),
  accountType: Yup.string(),
  accountPreference: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "userName",
      label: "Account User Name",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "bankName",
      label: "Name of the Bank",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "sortCode",
      label: "Sort Code",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "accountNumber",
      label: "Account Number",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "accountType",
      label: "Account Type",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "accountPreference",
      label: "Account Preference",
      fieldHeader: null,
    },
  ],
];
