import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { initailValue, validationSchema } from ".";

export const useSocialAndLeisureActivities = () => {

  const router = useRouter();
  const { query } = router;

  const disabled = query.action === 'view' ? true : false;

  const handleBack = () => router.push({ pathname: '/placement/placement-plan/placement-plan-details', query })

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initailValue,
  });

  const onSubmit = (data: any) => {
    console.log(data);

  };

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods

  return {
    methods,
    onSubmit,
    handleSubmit,
    disabled,
    handleBack
  }
}