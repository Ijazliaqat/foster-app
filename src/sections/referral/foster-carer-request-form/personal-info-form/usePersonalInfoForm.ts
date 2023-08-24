import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  PersonalInfoFormData,
  PersonalInfoFormValues,
  PersonalInfoFormValidationSchema,
} from ".";
import { useRouter } from "next/router";

export const usePersonalInfoForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(PersonalInfoFormValidationSchema),
    defaultValues: PersonalInfoFormValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };

  const router = useRouter()
  return {
    PersonalInfoFormData,
    onSubmit,
    handleSubmit,
    methods,
    router
  }
}