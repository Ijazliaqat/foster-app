import * as Yup from "yup";

export const defaultValues = {
  password:"",
  confirmPassword: "",  
  };


export const ResetPasswordFormSchema = Yup.object().shape({
  password: Yup.string().required("New Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm New Password is required")
    .oneOf([Yup.ref("password")], "Password Do not match"),
});

export { default as ReactHookForm } from "./ResetPasswordForm";
