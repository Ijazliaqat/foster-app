import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

// ======================================================

export const useCarerAdvocate = () => {

  let theme = useTheme();
  const router = useRouter();
  const methods: any = useForm({
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
    theme,
    router,
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting
  }
};