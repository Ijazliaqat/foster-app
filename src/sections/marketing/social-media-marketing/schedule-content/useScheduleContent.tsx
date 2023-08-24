import React, { useRef, useState } from "react";
import TableAction from "@root/components/TableAction";
import { useTableParams } from "@root/hooks/useTableParams";
import { defaultValues } from ".";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useUploadImage from "@root/hooks/useUploadImage";

export const useScheduleContent = () => {
  const [tableData, setTableDate] = useState<any>(null);
  const methods: any = useForm({
    defaultValues,
  });

  const { uploadImage } = useUploadImage();

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    getValues,
    setValue,
  } = methods;

  const onClear = () => {
    setTableDate(null);
  };

  const onSubmit = async (data: any) => {
    setTableDate(JSON.stringify(data));
  };
  return {
    methods,
    handleSubmit,
    getValues,
    setValue,
    isValid,
    onSubmit,
    isSubmitting,
    tableData,
    onClear,
    uploadImage,
  };
};
