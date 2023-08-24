import { useForm } from "react-hook-form";
import { DaylogEventsFormDefaultValues } from ".";
import { useRouter } from "next/router";

export const useDaylogEventsForm = () => {
  const methods: any = useForm({
    defaultValues: DaylogEventsFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push("/reports/carer-reports/day-log-events");
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
    onSubmit,
  };
};
