import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { initailValue, validationSchema } from ".";

export const useModal = () => {

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initailValue,
  });

  const onSubmit = (data: any) => {
    console.log(data);

  };

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods

  return {
    methods,
    onSubmit,
    handleSubmit,
  }
}