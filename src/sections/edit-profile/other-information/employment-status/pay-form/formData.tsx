import * as Yup from "yup";

export const defaultValues = {
  taxCode: "Yes",
  insuranceNo: "Essex",
  previousEmployer: "Yes",
  studentLaon: "Yes",
  completeOrLeave: "Yes",
  repayingByDebit: "No",
  postgraduateLoan: "No",
  a: false,
  b: false,
  c: false,
  planA: true,
  planB: true,
};

export const FormSchema = Yup.object().shape({
  taxCode: Yup.string(),
  insuranceNo: Yup.string(),
  previousEmployer: Yup.string(),
  studentLaon: Yup.string(),
  completeOrLeave: Yup.string(),
  repayingByDebit: Yup.string(),
  postgraduateLoan: Yup.string(),
  a: Yup.boolean(),
  b: Yup.boolean(),
  c: Yup.boolean(),
  planA: Yup.boolean(),
  planB: Yup.boolean(),
});
