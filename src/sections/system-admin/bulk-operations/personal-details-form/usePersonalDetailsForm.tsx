import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { initialValues, formSchema } from ".";
import { useRouter } from "next/router";

export const usePersonalDetailsForm = () => {
  const router = useRouter();

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

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    methods,
    handleSubmit,
    router,
    onSubmit,
  };
};
