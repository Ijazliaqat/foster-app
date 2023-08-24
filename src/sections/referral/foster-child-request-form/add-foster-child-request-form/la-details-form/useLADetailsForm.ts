import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LADetailsFormFormValues, LADetailsFormValidationSchema } from ".";
export const useLADetailsForm = () => {
    const methods: any = useForm({
        resolver: yupResolver(LADetailsFormValidationSchema),
        defaultValues: LADetailsFormFormValues,
      });
      const { handleSubmit } = methods;
      const onSubmit = (data: any) => {
        console.log(data, "submitted data");
      };
  return {
    methods,
    handleSubmit,
    onSubmit
  }
}
