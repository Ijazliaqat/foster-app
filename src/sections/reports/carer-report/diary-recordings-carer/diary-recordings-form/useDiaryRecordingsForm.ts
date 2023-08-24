import { useForm } from "react-hook-form";
import { DiaryRecordingFormDefaultValues } from ".";
import { useRouter } from "next/router";

export const useDiaryRecordingsForm = () => {
  const methods: any = useForm({
    defaultValues: DiaryRecordingFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/diary-recordings-carer');
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