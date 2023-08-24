////
import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const annualReviewBData = [
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "reviewDate",
      label: "Review Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },

  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "haveAnyCurrentMedicalIssues",
      label:
        "Do the carers have any current medical issues that have not been noted since the last Review/Medical?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as AnnualReviewB } from "./AnnualReviewB";

export const formatters: any = {};

for (const formControl of annualReviewBData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  reviewDate: new Date(),
  haveAnyCurrentMedicalIssues: "",
};

export const formSchema = Yup.object().shape({
  reviewDate: Yup.date().required("required"),
  haveAnyCurrentMedicalIssues: Yup.string().required("required"),
});
