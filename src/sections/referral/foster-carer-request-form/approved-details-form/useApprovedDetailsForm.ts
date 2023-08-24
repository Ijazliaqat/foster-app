import { useForm } from "react-hook-form";
import {
  ApprovedDetailsFormData,
  ApprovedDetailsFormValues,
  ApprovedDetailsFormValidationSchema,
} from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

export const useApprovedDetailsForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(ApprovedDetailsFormValidationSchema),
    defaultValues: ApprovedDetailsFormValues,
  });

  const { handleSubmit } = methods;
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };
  return {
    onSubmit,
    handleSubmit,
    ApprovedDetailsFormData,
    methods,
    router,
  };
};
