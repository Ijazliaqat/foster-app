import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteDocumentMutation,
  useGetDocumentsQuery,
} from "@root/services/carer-info/personal-info/application-form/Documents";
import {
  usePostAllegationDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef, useState } from "react";

export const useUploadDocumentsTable = ({ applicationFormid }: any) => {
  const router = useRouter();
  let theme: any = useTheme();
  const tableHeaderRef = useRef<any>();
  const [view, setView] = useState("");
  const [open, setOpen] = useState(false);
  const [docData, setDocData] = useState(null);

  const changeView = (name: any) => {
    setView(name);
  };

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetDocumentsQuery({ params, id: applicationFormid });
  const meta = data?.data?.meta;

  const [deleteDocument] = useDeleteDocumentMutation();

  const listDeleteHandler = (id: any) => {
    deleteDocument({ id })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Record Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return {
    data,
    theme,
    tableHeaderRef,
    view,
    open,
    setOpen,
    changeView,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    docData,
    setDocData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    meta
  };
};
