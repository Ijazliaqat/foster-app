import { yupResolver } from "@hookform/resolvers/yup";
import {BirthMotherPrtner, BirthMotherPrtnerDataValues, BirthMotherPrtnerValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useBirthMotherPartner = () => {
  const methods: any = useForm({
    resolver: yupResolver(BirthMotherPrtnerValidationSchema),
    defaultValues: BirthMotherPrtnerDataValues,
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
    BirthMotherPrtner
  };
};