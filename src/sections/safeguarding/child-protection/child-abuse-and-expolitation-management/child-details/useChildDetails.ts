import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { formSchema, initialValues } from ".";

export const useChildDetails = () => {

  const theme = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return {
    theme,
    methods,
    handleSubmit,
    onSubmit
  }
}