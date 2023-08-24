import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SelectPlacementDefaultValues, SelectPlacementValidationSchema } from ".";
import { useTheme } from '@mui/material';

const useSelectPlacementType = (handleIncreamentStep: any) => {
  const methods: any = useForm({
    resolver: yupResolver(SelectPlacementValidationSchema),
    defaultValues: SelectPlacementDefaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    handleIncreamentStep()
    console.log(data, "submitted data");
  }
  const theme = useTheme()
  return {
    methods,
    handleSubmit,
    onSubmit,
    theme
  };
}

export default useSelectPlacementType
