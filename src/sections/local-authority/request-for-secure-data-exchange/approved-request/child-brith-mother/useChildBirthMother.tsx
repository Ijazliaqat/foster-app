import { yupResolver } from "@hookform/resolvers/yup";
import {childBirthMother, childBirthMotherDataValues, childBirthMotherValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useChildBirthMother = () => {
  const methods: any = useForm({
    resolver: yupResolver(childBirthMotherValidationSchema),
    defaultValues: childBirthMotherDataValues,
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
    childBirthMother
  };
};