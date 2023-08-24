import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { secureChildrenDataExchangeSchema, defaultValues } from ".";

export const useSecureChildrenDataExchange = () => {
  let theme = useTheme();
  const router = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(secureChildrenDataExchangeSchema),
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
  
  return {
    router,
    theme,
    handleSubmit,
    onSubmit,
    methods,
    isSubmitting,
  };
};
