import * as Yup from "yup";

export const defaultValues = {
  email: "super_admin@yopmail.com",
  password: "IFApp$$786",
  remember: false,
};

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be of minimum 6 characters length"),
  remember: Yup.boolean().oneOf([true, false], "Remember login?"),
});

export { default as ReactHookForm } from "./LoginForm";
