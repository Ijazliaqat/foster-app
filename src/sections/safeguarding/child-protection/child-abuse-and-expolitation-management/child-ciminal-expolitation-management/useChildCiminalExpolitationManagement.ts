import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema, initialValues } from '.';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';

export const useChildCiminalExpolitationManagement = () => {
  const theme = useTheme();
  const router = useRouter();

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


  const onSubmit = async (data: any) => {
  };

  return {
    theme,
    router,
    methods,
    handleSubmit,
    onSubmit
  }
}