import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  formDataFeildData,
  formDataValues,
  formValidationSchema,
} from ".";

export const useTerminationInfoForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: formDataValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };

  return {
    methods,
    formDataFeildData,
    handleSubmit,
    onSubmit,
  };
};