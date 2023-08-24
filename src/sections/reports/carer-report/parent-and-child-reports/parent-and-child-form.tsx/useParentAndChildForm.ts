import { useForm } from "react-hook-form";
import { ParentAndChildFormDefaultValues } from ".";
import { useRouter } from "next/router";

export const useParentAndChildForm = () => {
  const methods: any = useForm({
    defaultValues: ParentAndChildFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/parent-and-child');
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