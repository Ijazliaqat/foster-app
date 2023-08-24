import { useForm } from "react-hook-form";
import { CarerImmunisationDetailDefaultValues } from ".";
import { useRouter } from "next/router";

export const useCarerImmunisationDetailForm = () => {
  const methods: any = useForm({
    defaultValues: CarerImmunisationDetailDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/carer-immunisation-detail');
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