import { useState } from "react";
import { useForm } from "react-hook-form";
import { LaSocialMediaDefaultValues, LaSocialMediaValidationSchema } from "./add-la-social-media";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

export const useLaSocialMedia = () => {
  const [isAddSocialMediaIcon, setIsAddSocialMediaIcon] = useState<boolean>(false);
  const route = useRouter()

  const methods: any = useForm({
    resolver: yupResolver(LaSocialMediaValidationSchema),
    defaultValues: LaSocialMediaDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
      reset();
      setIsAddSocialMediaIcon(false); 
  };

  return {
    methods,
    handleSubmit,
    reset,
    onSubmit,
    isAddSocialMediaIcon,
    setIsAddSocialMediaIcon,
    route
  };
};
