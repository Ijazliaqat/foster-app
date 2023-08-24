import { yupResolver } from "@hookform/resolvers/yup";
import {personalInfo, personalInfoDataValues, personalInfoValidationSchema} from "."
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";


export const usePersonalInfo = () => {
  const theme = useTheme()
  const methods: any = useForm({
    resolver: yupResolver(personalInfoValidationSchema),
    defaultValues: personalInfoDataValues,
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
    personalInfo,
    theme
  };
};
