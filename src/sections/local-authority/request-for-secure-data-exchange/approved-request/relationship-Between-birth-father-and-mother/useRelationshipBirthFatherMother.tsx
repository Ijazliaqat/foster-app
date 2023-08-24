import { yupResolver } from "@hookform/resolvers/yup";
import {relationshiMotherFatherData, relationshiMotherFatherDataValues, relationshiMotherFatherDataValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useRelationshipBirthFatherMother = () => {
  const methods: any = useForm({
    resolver: yupResolver(relationshiMotherFatherDataValidationSchema),
    defaultValues: relationshiMotherFatherDataValues,
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
    relationshiMotherFatherData
  };
};