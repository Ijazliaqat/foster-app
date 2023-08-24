import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checklistFormSchema, defaultValues } from ".";
import { useRouter } from "next/router";

export const useEditPanelChecklist = () => {
  const route = useRouter();
  const methods: any = useForm({
    resolver: yupResolver(checklistFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (values: any) => {
    
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isValid,
    route
  };
};
