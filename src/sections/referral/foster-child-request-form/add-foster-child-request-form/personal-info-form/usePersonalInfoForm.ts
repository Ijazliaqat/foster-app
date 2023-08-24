import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PersonalInfoFormValidationSchema, PersonalInfoFormValues } from ".";

export const usePersonalInfoForm = ({handleNextBtn }: any) => {
  const methods: any = useForm({
    resolver: yupResolver(PersonalInfoFormValidationSchema),
    defaultValues: PersonalInfoFormValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
  console.log(data, "submitted data");
  handleNextBtn() ;
}

  return {
    methods,
    handleSubmit,
    onSubmit,
  };
};
