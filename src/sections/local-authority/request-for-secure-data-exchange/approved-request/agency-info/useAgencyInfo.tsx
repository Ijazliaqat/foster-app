import { yupResolver } from "@hookform/resolvers/yup";
import {agencyInfoData, agencyInfoDataValues, agencyInfoValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useAgencyInfo = () => {
  const methods: any = useForm({
    resolver: yupResolver(agencyInfoValidationSchema),
    defaultValues: agencyInfoDataValues,
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
    agencyInfoData
  };
};