import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MandatoryformSchemaValidation, defaultValues ,  } from '.';

export const useMandatoryModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(MandatoryformSchemaValidation),
        defaultValues: defaultValues  ,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;

  return {
    methods,
    handleSubmit

  }
}
