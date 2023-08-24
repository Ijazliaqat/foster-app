import * as Yup from "yup";

export const defaultValues = {
  schoolYear: "",
  formName: "",
  term: "",
  subject: "",
  teacher: "",
  target: "",
  currentLevel: "",
};

export const FormSchema = Yup.object().shape({
  schoolYear: Yup.string(),
  formName: Yup.string(),
  term: Yup.string(),
  subject: Yup.string(),
  teacher: Yup.string(),
  target: Yup.string(),
  currentLevel: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "schoolYear",
      label: "School Year",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "formName",
      label: "Form Name",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "term",
      label: "Term",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "subject",
      label: "Subject",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "teacher",
      label: "Teacher",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "target",
      label: "Target",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "currentLevel",
      label: "Current Level",
      fieldHeader: null,
    },
    {
      type: null,
      name: "",
      label: "",
      fieldHeader: null,
    },
  ],
];
