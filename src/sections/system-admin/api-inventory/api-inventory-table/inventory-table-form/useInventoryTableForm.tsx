import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  FormData,
  FormDataValues,
  FormValidationSchema,
} from ".";

export const useInventoryTableForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(FormValidationSchema),
    defaultValues: FormDataValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };

  return {
    methods,
    FormData,
    handleSubmit,
    onSubmit,
  };
};