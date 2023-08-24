
import React, { useState } from 'react'
import { defaultValues } from ".";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export const useReferenceDataManagement = () => {
  const [tableData, setTableDate] = useState<any>(null);
  const route = useRouter()

  const methods: any = useForm({
    defaultValues,
  });


  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    getValues,
    setValue,
  } = methods;

  const onClear = () => {
    setTableDate(null);
  };

  const onSubmit = async (data: any) => {
    setTableDate(JSON.stringify(data));
  };

  const handlerAddRow = (row: any) => route.push({ pathname: `/system-admin/reference-data-managment/add-reference-management`, query: { name: row?.original?.refDataName } }) 

  return {
    methods,
    handleSubmit,
    getValues,
    setValue,
    isValid,
    onSubmit,
    isSubmitting,
    tableData,
    onClear,
    handlerAddRow
  }
}
