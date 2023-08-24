import { yupResolver } from "@hookform/resolvers/yup";
import {BirthWithoutFatherParental, BirthWithoutFatherParentalDataValues, BirthWithoutFatherParentalValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useWithoutParentalResponsibility = () => {
  const methods: any = useForm({
    resolver: yupResolver(BirthWithoutFatherParentalValidationSchema),
    defaultValues: BirthWithoutFatherParentalDataValues,
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
    BirthWithoutFatherParental
  };
};