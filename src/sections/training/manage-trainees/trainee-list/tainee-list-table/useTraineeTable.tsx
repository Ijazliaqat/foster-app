import React, { useRef, useState } from "react";
import TableAction from "@root/components/TableAction";
import { useTableParams } from "@root/hooks/useTableParams";
import { defaultValues } from ".";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

export const useTraineeTable = () => {
  const [tableData, setTableDate] = useState<any>(null);
  const [shareModal, setShareModal] = useState(false);
  const methods: any = useForm({
    defaultValues,
  });

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

  const handleShare = () => {
    setShareModal(!shareModal)
  }

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
    shareModal,
    setShareModal,
    handleShare
  };
};
