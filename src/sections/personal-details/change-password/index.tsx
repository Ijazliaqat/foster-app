import * as Yup from "yup";

export const defaultValues = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password is required"),
  newPassword: Yup.string().required("New Password is required"),
  confirmNewPassword: Yup.string()
    .required("Confirm New Password is required")
    .oneOf([Yup.ref("newPassword")], "Password Do not match"),
});

export { default as ReactHookForm } from "./ChangePasswordForm";
