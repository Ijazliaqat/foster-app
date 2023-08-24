import { yupResolver } from "@hookform/resolvers/yup";
import {BirthMotherViews, BirthMotherViewsDataValues, BirthMotherViewsValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useBirthMotherViews = () => {
  const methods: any = useForm({
    resolver: yupResolver(BirthMotherViewsValidationSchema),
    defaultValues: BirthMotherViewsDataValues,
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
    BirthMotherViews
  };
};