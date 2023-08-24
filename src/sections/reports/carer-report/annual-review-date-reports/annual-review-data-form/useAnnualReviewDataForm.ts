import { useForm } from "react-hook-form";
import { AnnualReviewDefaultValues } from ".";
import { useRouter } from "next/router";

export const useAnnualReviewDataForm = () => {
  const methods: any = useForm({
    defaultValues: AnnualReviewDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/annual-review-date');
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