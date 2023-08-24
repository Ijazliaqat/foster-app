
import React from "react";
import { useRouter } from "next/router";
import { useClaDocumentationListQuery, useDeleteClaDocumentationListMutation } from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";

export const useDocumentationTable = () => {

  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } = useClaDocumentationListQuery<any>({ params });

  const [deleteList] = useDeleteClaDocumentationListMutation();
  
  //DELETE API For Cla Documentation List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return { router, headerChangeHandler, pageChangeHandler, sortChangeHandler, data, isError, isLoading, isSuccess, isFetching, listDeleteHandler };
};
