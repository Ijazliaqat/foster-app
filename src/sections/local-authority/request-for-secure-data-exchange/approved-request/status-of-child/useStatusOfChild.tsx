import { yupResolver } from "@hookform/resolvers/yup";
import {StatusOfChildData, StatusOfChildDataValues, StatusOfChildValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useStatusOfChild = () => {
  const methods: any = useForm({
    resolver: yupResolver(StatusOfChildValidationSchema),
    defaultValues: StatusOfChildDataValues,
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
    StatusOfChildData
  };
};