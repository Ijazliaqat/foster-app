import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { defaultValues } from '.';
import { useRouter } from 'next/router';

export const useResultsTable = () => {
    const [tableData, setTableDate] = useState<any>(null);
    const methods: any = useForm({
      defaultValues,
    });
    const router = useRouter()
  
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
  
    const route = router.query.action;
  
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
      route,
    };
}

