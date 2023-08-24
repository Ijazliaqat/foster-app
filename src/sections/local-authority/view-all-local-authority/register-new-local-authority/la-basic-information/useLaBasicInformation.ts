import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { laBasicInformationSchema, defaultValues } from ".";

export const useLaBasicInformation = ({ handleNextTab }: any) => {
    let theme = useTheme();
    const router = useRouter();
  
    const methods: any = useForm({
      resolver: yupResolver(laBasicInformationSchema),
      defaultValues,
    });
  
    const {
      reset,
      handleSubmit,
      formState: { isSubmitting },
    } = methods;
  
    const onSubmit = async (data: any) => {
      handleNextTab()
    };
  return {
    router,
    theme,
    handleSubmit,
    onSubmit,
    methods,
    isSubmitting
  };
};
