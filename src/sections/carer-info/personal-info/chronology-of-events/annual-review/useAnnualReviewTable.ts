import { useTableParams } from "@root/hooks/useTableParams";
import {
  useAnnualReviewListQuery,
  useDeleteAnnualReviewListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/annual-review-api/annualReviewApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useAnnualReviewTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Annual Review List
  const {
    data: annualReviewlist,
    isError: annualReviewListError,
    isLoading: annualReviewListIsloading,
    isFetching: annualReviewlistIsfetching,
    isSuccess: annualReviewListIsSuccess,
  }: any = useAnnualReviewListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });
  const annualReviewList = annualReviewlist?.data?.annual_review;
  const meta = annualReviewlist?.data?.meta;
  const [deleteList] = useDeleteAnnualReviewListMutation();
  //DELETE API For Allegation List
  console.log("annualReviewList", annualReviewList);

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
    annualReviewList,
    annualReviewListIsloading,
    annualReviewlistIsfetching,
    annualReviewListError,
    annualReviewListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    listDeleteHandler,
    setSearch,
    fosterCarerId,
  };
};
