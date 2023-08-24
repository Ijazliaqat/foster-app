import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeletePartnerReferenceListMutation,
  usePartnerReferenceListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/partner-reference/partnerReferenceApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const usePartnerReferenceTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Partner Reference List
  const {
    data: partnerReferenceList,
    isError: partnerReferenceError,
    isLoading: partnerReferenceIsloading,
    isFetching: partnerReferenceIsfetching,
    isSuccess: partnerReferenceIsSuccess,
  }: any = usePartnerReferenceListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });
  //Getting API data and Meta
  const partnerReferenceData =
    partnerReferenceList?.data?.former_partner_references;
  const meta = partnerReferenceList?.data?.meta;

  const [deleteList] = useDeletePartnerReferenceListMutation();

  //DELETE API For Partner Reference List
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
    partnerReferenceData,
    partnerReferenceError,
    partnerReferenceIsloading,
    partnerReferenceIsfetching,
    partnerReferenceIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
