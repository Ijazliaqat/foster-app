import { useTableParams } from "@root/hooks/useTableParams";
import {
  useCarInsuranceListQuery,
  useDeleteCarInsuranceListMutation,
} from "@root/services/carer-info/background-checks/statutory-check-list/car-insurance/carInsuranceApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useCarInsuranceTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Car Insurance List
  const {
    data: carInsuranceList,
    isError: carInsuranceListError,
    isLoading: carInsuranceListIsloading,
    isFetching: carInsuranceListIsfetching,
    isSuccess: carInsuranceListIsSuccess,
  }: any = useCarInsuranceListQuery({ search: search, ...params });

  //Getting API data and Meta
  const carInsuranceData = carInsuranceList?.data?.car_insurance;
  const meta = carInsuranceList?.data?.meta;

  const [deleteList] = useDeleteCarInsuranceListMutation();
  //DELETE API For Allegation List
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

  return {
    router,
    tableHeaderRefTwo,
    carInsuranceListIsloading,
    carInsuranceData,
    carInsuranceListIsfetching,
    carInsuranceListError,
    carInsuranceListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
