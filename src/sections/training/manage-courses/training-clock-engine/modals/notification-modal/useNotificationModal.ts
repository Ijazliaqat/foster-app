import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { NotificationSettingsFormSchema, NotificationSettingsInitialValues } from '.';

export const useNotificationModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(NotificationSettingsFormSchema),
        defaultValues:  NotificationSettingsInitialValues,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;

  const onSubmit = (data: any) => {
  console.log("Form data:", data);
};

  return {
    methods,
    onSubmit,
    handleSubmit

  }
}
