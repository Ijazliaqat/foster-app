import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { defaultValues } from ".";
import { useForm } from "react-hook-form";

export const useBcpHistory = () => {
  const tableHeaderRefTwo = useRef<any>();
  const [IsDeleteModal, setIsDeleteModal] = useState(false);
  const router = useRouter();
  const theme: any = useTheme();

  const methods: any = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    getValues,
    setValue,
  } = methods;

  const onClear = () => {};

  const onSubmit = async (data: any) => {};

  return {
    tableHeaderRefTwo,
    router,
    theme,
    onClear,
    onSubmit,
    methods,
    handleSubmit,
  };
};
