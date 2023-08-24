import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AFormValidationSchema } from ".";
import { enqueueSnackbar } from "notistack";

export const usePersonalInfo = ({ 
  onSubmitHandler,
  initialValueProps,
  message,
}: any) => {

  const navigate = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(AFormValidationSchema),
    defaultValues: initialValueProps,
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res: any = await onSubmitHandler(data).unwrap();
      enqueueSnackbar(
        res?.message ?? `Pet Questionnaire ${message} Successfully!`,
        {
          variant: "success",
        }
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  return {
    navigate,
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
  };
};
