import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ReferralListFormDefaultValues, ReferralListFormSchema } from ".";

export const useReferralListForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(ReferralListFormSchema),
    defaultValues: ReferralListFormDefaultValues,
  });

  const { handleSubmit, setValue, reset } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    methods,
    onSubmit,
    handleSubmit,
    reset,
    setValue
  }

}