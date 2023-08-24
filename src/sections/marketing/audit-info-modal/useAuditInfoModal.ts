import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { formSchema, initialValues } from '.';

export const useAuditInfoModal = () => {

  const [editForm, setEditForm] = useState(false);
  const [disabled, setdisabled] = useState(true);
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty , reset },
  } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };


  return {
    editForm,
    setEditForm,
    disabled,
    setdisabled,
    handleSubmit,
    methods,
    onSubmit,
    reset
  }
}
