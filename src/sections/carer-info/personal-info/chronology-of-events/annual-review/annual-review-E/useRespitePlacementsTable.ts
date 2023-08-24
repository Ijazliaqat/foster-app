import { useTableParams } from "@root/hooks/useTableParams";
import {
  useAnnualReviewListQuery,
  useDeleteAnnualReviewListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/annual-review-api/annualReviewApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useRespitePlacementsTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Car Insurance List
  const {
    data: annualReviewList,
    isError: annualReviewListError,
    isLoading: annualReviewListIsloading,
    isFetching: annualReviewListIsfetching,
    isSuccess: annualReviewListIsSuccess,
  }: any = useAnnualReviewListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });

  //Getting API data and Meta
  const annualReviewData =
    annualReviewList?.data?.annual_review?.annualReviewE?.respitePlacements;
  const meta = annualReviewList?.data?.meta;

  const [deleteList] = useDeleteAnnualReviewListMutation();
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
    annualReviewListIsloading,
    annualReviewData,
    annualReviewListIsfetching,
    annualReviewListError,
    annualReviewListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
