import { useForm } from "react-hook-form";
import { CarerTrainingFormDefaultValues } from ".";
import { useRouter } from "next/router";

export const useCarerTrainingForm = () => {
  const methods: any = useForm({
    defaultValues: CarerTrainingFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/carer-training');
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