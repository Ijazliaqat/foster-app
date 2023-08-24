import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UploadDocoment, UploadDocomentValues, UploadDocomentValidationSchema } from ".";

export const useUploadDocumentForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(UploadDocomentValidationSchema),
    defaultValues: UploadDocomentValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };
  return {
    UploadDocoment,
    methods,
    handleSubmit,
    onSubmit
  }
}