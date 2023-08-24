import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from "./index";
import { yupResolver } from "@hookform/resolvers/yup";

export const useDeregisterInitialRequestForm = () => {
  let theme = useTheme();
  const router = useRouter();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log("data", data);
    reset();
  };

  const handleBack = () => router.push('/de-registration/deregister-foster-carer');

  return {
    methods,
    onSubmit,
    handleSubmit,
    handleBack
  }
}