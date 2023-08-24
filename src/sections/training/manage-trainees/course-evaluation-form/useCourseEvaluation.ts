import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema, initialValues } from ".";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";

export const useCourseEvaluation = () => {
  const theme = useTheme();
  const router = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    theme,
    router,
    methods,
    handleSubmit,
    onSubmit,
  };
};
