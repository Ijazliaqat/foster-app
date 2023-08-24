import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { additionalInformation, ChecklistAdditionalFormSchema, defaultValues } from ".";
import { useState } from "react";

export const useChecklistAdditionalForm = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const methods: any = useForm({
    resolver: yupResolver(ChecklistAdditionalFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (values: any) => {
    setIsAddModalOpen(false);
    additionalInformation.push(values);
    reset();
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isValid,
    isAddModalOpen,
    setIsAddModalOpen,
  };
};
