import { useForm } from "react-hook-form";
import { CarerPlacementDefaultValues } from ".";
import { useRouter } from "next/router";

export const usePermanentFosteringForm = () => {
  const methods: any = useForm({
    defaultValues: CarerPlacementDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/carer-placement');
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