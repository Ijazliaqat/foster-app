import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { SwotAnalysisFormDefaultValues, formSchema } from ".";
import { yupResolver } from "@hookform/resolvers/yup";

export const useSwotAnalysisForm = () => {
  const methods: any = useForm({
    defaultValues: SwotAnalysisFormDefaultValues  ,
    resolver: yupResolver(formSchema),
  });
  const router = useRouter();
  const handleBack = () => router.push('/marketing/swot-analysis')
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