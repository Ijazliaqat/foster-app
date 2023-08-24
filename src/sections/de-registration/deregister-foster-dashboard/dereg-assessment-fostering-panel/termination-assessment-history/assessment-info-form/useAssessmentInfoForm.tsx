import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formDataFeild, formDataValues, formValidationSchema } from ".";

export const useAssessmentInfoForm = () => {
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
    formDataFeild,
    handleSubmit,
    onSubmit,
  };
};
