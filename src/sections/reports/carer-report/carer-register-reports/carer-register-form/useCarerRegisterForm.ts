import { useForm } from "react-hook-form";
import { CarerRegisterFormDefaultValues} from ".";
import { useRouter } from "next/router";

export const useCarerRegisterForm = () => {
  const methods: any = useForm({
    defaultValues: CarerRegisterFormDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/carer-register');
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