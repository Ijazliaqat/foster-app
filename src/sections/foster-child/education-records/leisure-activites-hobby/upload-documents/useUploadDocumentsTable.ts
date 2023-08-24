import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";

import {
  useDeleteLeisureActivityDocumentMutation,
  useGetLeisureActivityDocumentsListQuery,
} from "@root/services/foster-child/education-records/leisure-activities-hobby/LeisureActivityDocuments";

import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef, useState } from "react";

export const useUploadDocumentsTable = ({ leisureActivityId }: any) => {
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
    useGetLeisureActivityDocumentsListQuery({ params, id: leisureActivityId });
  const meta = data?.data?.meta;

  const [deleteLeisureActivityDocument] =
    useDeleteLeisureActivityDocumentMutation();

  const listDeleteHandler = (id: any) => {
    deleteLeisureActivityDocument(id)
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
    meta,
  };
};
