import { yupResolver } from "@hookform/resolvers/yup";
import {BirthFatherPartnerData, BirthFatherPartnerDataValues, BirthFatherPartnerValidationSchema} from "."
import { useForm } from "react-hook-form";


export const useBirthFatherPartner = () => {
  const methods: any = useForm({
    resolver: yupResolver(BirthFatherPartnerValidationSchema),
    defaultValues: BirthFatherPartnerDataValues,
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
    BirthFatherPartnerData
  };
};