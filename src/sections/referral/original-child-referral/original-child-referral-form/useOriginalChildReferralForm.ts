import { defaultValues } from ".";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

// ===================================================

export const useOriginalChildReferralForm = () => {
  let theme = useTheme();
  const router = useRouter();
  const methods: any = useForm({
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

  return { theme, router, handleSubmit, onSubmit, methods };
};
