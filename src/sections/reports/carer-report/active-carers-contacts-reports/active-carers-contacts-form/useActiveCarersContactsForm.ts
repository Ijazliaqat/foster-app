import { useForm } from "react-hook-form";
import { ActiveCarersContactFormDefaultValues } from ".";
import { useRouter } from "next/router";

export const useActiveCarersContactsForm = () => {
  const methods: any = useForm({
    defaultValues: ActiveCarersContactFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/active-carers-contacts')
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