import { yupResolver } from "@hookform/resolvers/yup";
import {childBirthFather, childBirthFatherDataValues, childBirthFatherValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useChildBithFather = () => {
  const methods: any = useForm({
    resolver: yupResolver(childBirthFatherValidationSchema),
    defaultValues: childBirthFatherDataValues,
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
    childBirthFather
  };
};