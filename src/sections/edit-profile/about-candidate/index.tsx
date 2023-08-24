import * as Yup from "yup";

export const defaultValues = {
  fullName: "",
  email: "",
  age: 3,
  terms: false,
  areaOffice: 3,
  areaOffice2: 2,
};

export const FormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(6, "Mininum 6 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  age: Yup.number()
    .typeError("Age is required")
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer()
    .moreThan(18, "Age must be greater than or equal to 18")
    .lessThan(120, "Age must be less than or equal to 120"),
});

export { default as ReactHookForm } from "./AboutCandidate";
