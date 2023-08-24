import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";

export const useSignOffApprovalForm = (globallyDisabled: any, data: any) => {
  const theme: any = useTheme();
  let router: any = useRouter();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: globallyDisabled ? data : defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(
      JSON.stringify(
        {
          ...data,
          startDate: data.startDate && fTimestamp(data.startDate),
          endDate: data.endDate && fTimestamp(data.endDate),
        },
        null,
        2
      )
    );
    reset();
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
  };
};
