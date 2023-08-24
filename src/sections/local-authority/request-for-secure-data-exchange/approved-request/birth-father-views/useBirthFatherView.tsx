import { yupResolver } from "@hookform/resolvers/yup";
import {BirthFatherViewsData, BirthFatherViewssDataValues, BirthFatherViewsValidationSchema} from "."
import { useForm } from "react-hook-form";

export const useBirthFatherView = () => {
  const methods: any = useForm({
    resolver: yupResolver(BirthFatherViewsValidationSchema),
    defaultValues: BirthFatherViewssDataValues,
  });

  const { handleSubmit, setValue, reset } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    methods,
    onSubmit,
    handleSubmit,
    reset,
    setValue,
    BirthFatherViewsData
  };
};