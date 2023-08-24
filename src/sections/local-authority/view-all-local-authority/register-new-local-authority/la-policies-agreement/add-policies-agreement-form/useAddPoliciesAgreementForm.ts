import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {  LaPoliciesAgreementDefaultValues, LaPoliciesAgreementValidationSchema } from ".";

export const useAddPoliciesAgreementForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(LaPoliciesAgreementValidationSchema),
    defaultValues: LaPoliciesAgreementDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = () => {}

  return {
    methods,
    handleSubmit,
    reset,
    onSubmit,
  };
};
