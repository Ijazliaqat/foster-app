import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { uploadDocDefaultValues, uploadDocFormSchema } from "..";
import { yupResolver } from "@hookform/resolvers/yup";

import { usePostImmunisationDocumentMutation, useUpdateImmunisationDocumentMutation } from "@root/services/foster-child/health-medical-history/immunisation/DocumentsApi";

export const useUploadDocumentsModal = ({
  view,
  docData,
  changeView,
  immunisationId,
  setOpen,
}: any) => {
  let theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(uploadDocFormSchema),
    defaultValues: view == "add" ? uploadDocDefaultValues : {...docData,documentDate:new Date(docData.documentDate)},
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
  let [postImmunisationDocument, { isLoading }] = usePostImmunisationDocumentMutation();
  let [updateImmunisationDocument] = useUpdateImmunisationDocumentMutation();

  const onSubmit = async (data: any) => {
    let { documentDate, type, password, documentName, id } = data;
    var formData = new FormData();
    formData.append("documentDate", documentDate);
    formData.append("type", type);
    formData.append("password", password);
    formData.append("file", documentName);
    formData.append("immunisationId", immunisationId);
    if (view == "add") {
      try {
        const res: any = await postImmunisationDocument({
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
     }
    else if (view == "edit") {
      try {
        const res: any = await updateImmunisationDocument({
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
