import { yupResolver } from "@hookform/resolvers/yup";
import {ChildFamilyRelativesData, ChildFamilyRelativesDataValues, ChildFamilyRelativesValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useChildFamilyRelativesForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(ChildFamilyRelativesValidationSchema),
    defaultValues: ChildFamilyRelativesDataValues,
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
    ChildFamilyRelativesData
  };
};