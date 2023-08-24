import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ContextualFormData,
  ContextualFormDataValues,
  ContextualFormValidationSchema,
} from ".";

export const useContextualSafeguardingForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(ContextualFormValidationSchema),
    defaultValues: ContextualFormDataValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };

  return {
    methods,
    ContextualFormData,
    handleSubmit,
    onSubmit,
  };
};
