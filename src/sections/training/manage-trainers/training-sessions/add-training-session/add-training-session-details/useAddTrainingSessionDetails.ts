import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BFormValidationSchema } from ".";
import { enqueueSnackbar } from "notistack";

export const useAddTrainingSessionDetails = ({
  disabled,
  onSubmitHandler,
  initialValueProps,
  message,
}: any) => {

  const methods: any = useForm({
    resolver: yupResolver(BFormValidationSchema),
    defaultValues: initialValueProps,
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;

  const { registeredAVet } = watch({ name: "registeredAVet" });

  const onSubmit = async (data: any) => {
    try {
      const updatedData = {
        ...data,
        registeredAVet: registeredAVet === "Yes" ? true : false,
      };
      const res: any = await onSubmitHandler(updatedData).unwrap();
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
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
  };
};
