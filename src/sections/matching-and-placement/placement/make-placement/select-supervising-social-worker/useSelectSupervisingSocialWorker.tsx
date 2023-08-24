import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SelectSupervisingSocialWorkerDefaultValues, SelectSupervisingSocialWorkerValidationSchema } from ".";
import { useTheme } from "@mui/material";

const useSelectSupervisingSocialWorker = (handleIncreamentStep: any) => {
  const methods: any = useForm({
    resolver: yupResolver(SelectSupervisingSocialWorkerValidationSchema),
    defaultValues: SelectSupervisingSocialWorkerDefaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    handleIncreamentStep();
  };
  const theme = useTheme();
  return {
    methods,
    handleSubmit,
    onSubmit,
    theme,
  };
};

export default useSelectSupervisingSocialWorker;
