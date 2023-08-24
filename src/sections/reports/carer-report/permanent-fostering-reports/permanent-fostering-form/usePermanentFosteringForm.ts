import { useForm } from "react-hook-form";
import { PermanentFosteringFormDefaultValues } from ".";
import { useRouter } from "next/router";

export const usePermanentFosteringForm = () => {
  const methods: any = useForm({
    defaultValues: PermanentFosteringFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/permanent-fostering');
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