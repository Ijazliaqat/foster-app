import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { defaultValues, formSchema } from "./index";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  usePostDocumentDetailMutation,
  useUpdateDocumentDetailMutation,
} from "@root/services/carer-info/personal-info/application-form/Documents";

export const useUploadDocumentsModal = ({
  view,
  docData,
  changeView,
  applicationFormid,
  setOpen,
}: any) => {
  let theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(formSchema),
    defaultValues: view == "add" ? defaultValues : {...docData,documentDate:new Date(docData.documentDate)},
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
  let [postDocumentDetail, { isLoading }] = usePostDocumentDetailMutation();
  let [updateDocumentDetail] = useUpdateDocumentDetailMutation();

  const onSubmit = async (data: any) => {
    let { documentDate, documentType, password, documentName, id } = data;
    var formData = new FormData();
    formData.append("documentDate", documentDate);
    formData.append("documentType", documentType);
    formData.append("password", password);
    formData.append("file", documentName);
    if (view == "add") {
      try {
        const res: any = await postDocumentDetail({
          id: applicationFormid,
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
        const res: any = await updateDocumentDetail({
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
