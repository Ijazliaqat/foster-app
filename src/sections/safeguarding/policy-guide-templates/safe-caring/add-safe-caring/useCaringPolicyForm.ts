import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AForm, AFormDefaultValues, AFormValidationSchema } from ".";
import { useRouter } from "next/router";

export const useCaringPolicyForm = () => {
    const methods: any = useForm({
        resolver: yupResolver(AFormValidationSchema),
        defaultValues: AFormDefaultValues,
      });
    
      const { handleSubmit } = methods;
    
      const onSubmit = (data: any) => {
        console.log(data, "submitted data");
      };
      const { query } = useRouter();
      console.log(query.action);
    return {
        methods,
        handleSubmit,
        onSubmit,
        query
    //   showPassword,
    //   methods,
    //   handleShowPassword,
    //   handleSubmit,
    //   onSubmit,
    //   isSubmitting,
    //   isValid,
    };
  };