import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { defaultValues, formSchema } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  usePostLeisureActivityDocumentMutation,
  useUpdateLeisureActivityDocumentMutation,
} from "@root/services/foster-child/education-records/leisure-activities-hobby/LeisureActivityDocuments";
import dayjs from "dayjs";

export const useUploadDocumentsModal = ({
  view,
  docData,
  changeView,
  leisureActivityId,
  setOpen,
}: any) => {
  let theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(formSchema),
    defaultValues:
      view == "add"
        ? defaultValues
        : { ...docData, date: new Date(docData.date) },
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  let [postLeisureActivityDocument, { isLoading }] =
    usePostLeisureActivityDocumentMutation();
  let [updateLeisureActivity] = useUpdateLeisureActivityDocumentMutation();

  const onSubmit = async (data: any) => {
    let { date, docType, password, media, id } = data;
    var formData = new FormData();
    formData.append("date", dayjs(date).format("DD/MM/YYYY"));
    formData.append("docType", docType);
    formData.append("password", password);
    formData.append("media", media);
    if (view == "add") {
      try {
        const res: any = await postLeisureActivityDocument({
          id: leisureActivityId,
          formData,
        }).unwrap();
        if (res.data) {
          setOpen(false);
          enqueueSnackbar("Record added Successfully", {
            variant: "success",
          });
        }
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    } else if (view == "edit") {
      try {
        const res: any = await updateLeisureActivity({
          id: id,
          formData,
        }).unwrap();
        if (res.data) {
          enqueueSnackbar("Record Updated Successfully", {
            variant: "success",
          });
        }
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    }
  };
  return { methods, handleSubmit, onSubmit, isSubmitting, isDirty, theme };
};
