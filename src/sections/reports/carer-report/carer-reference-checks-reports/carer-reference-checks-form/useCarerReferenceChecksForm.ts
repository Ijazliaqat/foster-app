import { useForm } from "react-hook-form";
import { CarerReferenceCheckDefaultValues } from ".";
import { useRouter } from "next/router";

export const useCarerReferenceChecksForm = () => {
  const methods: any = useForm({
    defaultValues: CarerReferenceCheckDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/carer-reference-checks');
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