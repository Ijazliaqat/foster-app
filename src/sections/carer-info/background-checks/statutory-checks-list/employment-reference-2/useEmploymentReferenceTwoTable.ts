import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteEmploymentOneListMutation,
  useEmploymentOneListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/employment-reference-1/employmentReference1Api";
import { useEmpReferenceTwoListQuery } from "@root/services/carer-info/background-checks/statutory-check-list/employment-reference-2/employmentReference2Api";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useEmploymentReferenceTwoTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Employment Reference Two List
  const {
    data: employmentReferenceTwoList,
    isError: employmentReferenceTwoError,
    isLoading: employmentReferenceTwoIsloading,
    isFetching: employmentReferenceTwoIsfetching,
    isSuccess: employmentReferenceTwoIsSuccess,
  }: any = useEmpReferenceTwoListQuery({ search: search, ...params });

  //Getting API data and Meta
  const employmentReferenceTwoData =
    employmentReferenceTwoList?.data?.employment_reference_2;
  const meta = employmentReferenceTwoList?.data?.meta;

  const [deleteList] = useDeleteEmploymentOneListMutation();

  //DELETE API For Employment Reference Two List
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
    employmentReferenceTwoData,
    employmentReferenceTwoError,
    employmentReferenceTwoIsloading,
    employmentReferenceTwoIsfetching,
    employmentReferenceTwoIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
