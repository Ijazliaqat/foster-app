import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as Yup from "yup";

export const usePageFourForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(Yup.object().shape({})),
    defaultValues: {},
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
    onSubmit,
  };
};
