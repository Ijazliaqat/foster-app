import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormalReviewInitialValues, FormalReviewValidationSchema } from '.';

const useFormalReviewMeetingAddModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(FormalReviewValidationSchema),
        defaultValues:  FormalReviewInitialValues,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;

   
    
  return {
    methods,
    handleSubmit,

  }

}
export default useFormalReviewMeetingAddModal
