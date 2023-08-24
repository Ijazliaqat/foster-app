import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { PlacementMeetingformSchemaValidation, defaultValues ,  } from '.';

export const usePlacementMeetingAddModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(PlacementMeetingformSchemaValidation),
        defaultValues: defaultValues  ,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;

  return {
    methods,
    handleSubmit

  }
}
