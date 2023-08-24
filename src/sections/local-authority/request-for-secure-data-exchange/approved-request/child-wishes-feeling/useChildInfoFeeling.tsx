import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import {
  wishesData,
  wishesDataDataValues,
  wishesDataValidationSchema,
} from ".";

export const useChildInfoFeeling = () => {
  const theme = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(wishesDataValidationSchema),
    defaultValues: wishesDataDataValues,
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
    wishesData,
    theme
  };
};
