import React from 'react'
import { ChildrenListFormValidationSchema, defaultValues } from '.';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const useChildrenListForm = () => {
    const methods: any = useForm({
        resolver: yupResolver(ChildrenListFormValidationSchema),
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;
    const onSubmit = (data: any) => {
        console.log(data, "submitted data");
    };

    return { methods, handleSubmit, onSubmit }
}
