import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { PlacementSpecialNeedsformSchemaValidation, defaultValues ,  } from '.';

export const useFinalPlacementApprovalAddModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(PlacementSpecialNeedsformSchemaValidation),
        defaultValues: defaultValues  ,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;

  return {
    methods,
    handleSubmit

  }
}
