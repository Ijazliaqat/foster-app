import React from 'react'
import { useForm } from 'react-hook-form';
import { IncidentManagementFormDefaultValues, IncidentManagementFormValidationSchema } from '.';
import { yupResolver } from '@hookform/resolvers/yup';

export const useIncidentManagementForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(IncidentManagementFormValidationSchema),
    defaultValues: IncidentManagementFormDefaultValues,
  });
  const { handleSubmit, setValue, reset } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const HandlerClear = (item: any) => {
    if (item === "signDateAuther") {
      setValue("signDateAuther", "");
    } else {
      setValue("signDateApprover", "");
    }
  };
  return {
    HandlerClear,
    methods,
    onSubmit,
    handleSubmit,
    reset
  }
}

