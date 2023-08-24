import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const initialValues = {
  faqFor: "",
  question: "",
  answer: "",
};

export const formSchema = Yup.object().shape({
  faqFor: Yup.string().required("Field is required"),
  question: Yup.string().required("Field is required"),
  answer: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    title: "Who is the FAQ for?",
    gridLength: 6,
    otherOptions: {
      name: "faqFor",
      select: true,
      options: [
        { value: "foster child", label: "Foster Child" },
        { value: "foster carer", label: "Foster Carer" },
        { value: "social worker", label: "Social Worker" },
        { value: "ifa", label: "IFA" },
      ],
    },
    component: RHFSelect,
  },
  {
    title: "Question",
    gridLength: 12,
    otherOptions: {
      name: "question",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Answer",
    gridLength: 12,
    otherOptions: {
      name: "answer",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
