import { yupResolver } from "@hookform/resolvers/yup";
import {BirthFatherParental, BirthFatherParentalDataValues, BirthFatherParentalValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useBirthFatherParentalResponsibility = () => {
  const methods: any = useForm({
    resolver: yupResolver(BirthFatherParentalValidationSchema),
    defaultValues: BirthFatherParentalDataValues,
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
    BirthFatherParental
  };
};