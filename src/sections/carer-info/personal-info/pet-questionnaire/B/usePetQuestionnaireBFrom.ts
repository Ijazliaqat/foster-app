import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BFormValidationSchema } from "./";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import usePath from "@root/hooks/usePath";

export const usePetQuestionnaireBFrom = ({
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

  // Get id from url
  const router = useRouter();
  const { petId } = router.query;

  const { makePath } = usePath();

  const onSubmit = async (data: any) => {
    try {
      const updatedData = {
        ...data,
        petId,
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
    handleSubmit,
    isSubmitting,
    onSubmit,
    registeredAVet,
    router,
    makePath,
  };
};
