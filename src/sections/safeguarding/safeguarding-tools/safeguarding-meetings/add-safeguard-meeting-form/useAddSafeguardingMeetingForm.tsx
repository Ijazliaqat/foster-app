import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddSafeguardingMeetingFormValidationSchema, defaultValues } from ".";


export const useAddSafeguardingMeetingForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(AddSafeguardingMeetingFormValidationSchema),
    defaultValues
  });
  const {
    handleSubmit,
    formState: {  },
  } = methods;
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log(data);
  };


  return {
    methods,
    handleSubmit,
    router,
    onSubmit,

  }
}
