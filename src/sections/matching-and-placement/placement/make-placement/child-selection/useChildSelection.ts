import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { childSelectionSchema } from ".";
import { useState } from "react";

export const useChildSelection = () => {
  const theme = useTheme();
  const [isSelectedTable, setIsSelectedTable] = useState(false)
 

  const methods: any = useForm({
    resolver: yupResolver(childSelectionSchema),
    defaultValues: { selectFosterCarerPendingPayment: "" },
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
    isSelectedTable,
  };
};
