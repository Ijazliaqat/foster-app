import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteEmploymentOneListMutation,
  useEmploymentOneListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/employment-reference-1/employmentReference1Api";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useEmployementReferenceOneTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Employment Reference List
  const {
    data: employmentReferenceList,
    isError: employmentReferenceError,
    isLoading: employmentReferenceIsloading,
    isFetching: employmentReferenceIsfetching,
    isSuccess: employmentReferenceIsSuccess,
  }: any = useEmploymentOneListQuery({ search: search, ...params });

  //Getting API data and Meta
  const employmentReferenceData =
    employmentReferenceList?.data?.employment_reference_1;
  const meta = employmentReferenceList?.data?.meta;

  const [deleteList] = useDeleteEmploymentOneListMutation();

  //DELETE API For Employment Reference List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    router,
    tableHeaderRefTwo,
    employmentReferenceError,
    employmentReferenceData,
    employmentReferenceIsloading,
    employmentReferenceIsfetching,
    employmentReferenceIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
