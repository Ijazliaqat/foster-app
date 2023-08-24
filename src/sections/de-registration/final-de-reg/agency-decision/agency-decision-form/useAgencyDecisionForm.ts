import { useForm } from "react-hook-form";
import { ActiveCarersContactFormDefaultValues } from ".";
import { useRouter } from "next/router";

export const useAgencyDecisionForm = () => {
  const methods: any = useForm({
    defaultValues: ActiveCarersContactFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/de-registration/deregister-foster-carer/agency-decision/')
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    methods,
    handleSubmit,
    handleBack,
    onSubmit
  }
}