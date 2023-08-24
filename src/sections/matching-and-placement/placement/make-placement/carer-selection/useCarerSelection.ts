import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { carerSelectionSchema } from ".";
import { useState } from "react";

export const useCarerSelection = () => {
  const theme = useTheme();
  const [isSelectedTable, setIsSelectedTable] = useState(false)
 

  const methods: any = useForm({
    resolver: yupResolver(carerSelectionSchema),
    defaultValues: { selectCarer: "" },
  });

  const { handleSubmit } = methods;
  

  const onSubmit = () => {
    setIsSelectedTable(true)
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    theme,
    isSelectedTable
  };
};
