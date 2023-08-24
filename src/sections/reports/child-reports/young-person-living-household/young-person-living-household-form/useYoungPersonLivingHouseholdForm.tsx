import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema, initialValues } from ".";
import { useRouter } from "next/router";

export const useYoungPersonLivingHouseholdForm = () => {
  const router = useRouter();

  const handleBack = () => router.push('/reports/child-reports/young-person-living-household');


  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

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