import useAuth from "@root/hooks/useAuth";
import { useLoginMutation } from "@root/services/authApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormSchema, defaultValues } from ".";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const { login } = useAuth();

  const methods: any = useForm({
    resolver: yupResolver(LoginFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const onSubmit = async (credentials: any) => {
    try {
      const res: any = await loginTrigger(credentials).unwrap();

      login(res);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isValid,
  };
};
