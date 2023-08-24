import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteMedicalAdvisorListMutation,
  useMedicalAdvisorListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/medical-advisor/medicalAdvisorApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useMedicalAdvisorTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Medical Advisor List

  const {
    data: medicalAdvisorList,
    isError: medicalAdvisorError,
    isLoading: medicalAdvisorIsloading,
    isFetching: medicalAdvisorIsfetching,
    isSuccess: medicalAdvisorIsSuccess,
  }: any = useMedicalAdvisorListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });

  //Getting API data and Meta
  const medicalAdvisorData = medicalAdvisorList?.data?.medical_advisor;
  const meta = medicalAdvisorList?.data?.meta;

  const [deleteList] = useDeleteMedicalAdvisorListMutation();

  //DELETE API For Medical Advisor List
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
    medicalAdvisorData,
    medicalAdvisorError,
    medicalAdvisorIsloading,
    medicalAdvisorIsfetching,
    medicalAdvisorIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
