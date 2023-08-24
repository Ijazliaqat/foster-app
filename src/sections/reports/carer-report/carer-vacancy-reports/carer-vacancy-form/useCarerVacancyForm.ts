import { useForm } from "react-hook-form";
import { CarerVacancyFormDefaultValues } from ".";
import { useRouter } from "next/router";

export const useCarerVacancyForm = () => {
  const methods: any = useForm({
    defaultValues: CarerVacancyFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/carer-vacancy');
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