import { useTableParams } from "@root/hooks/useTableParams";
import {
  useGetChildChronologyOfEventsComplaintsInfoListQuery,
  useDeleteChildChronologyOfEventsComplaintsInfoByIdMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/ComplaintsInfoAPI";
import { useGetChildIncidentsListQuery } from "@root/services/foster-child/child-records/ChildIncidentsReportsAPI";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useChildIncidentsReportList = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterChildId } = router.query;
  
  const [search, setSearch] = useState("");
  const { data, isError, isLoading, isFetching, isSuccess }: any = useGetChildIncidentsListQuery({
    search,
    fosterChildId,
    offset: 0,
    limit: 10,
  });
  console.log(
    "🚀 ~ file: useChildIncidentsReportList.tsx:22 ~ useChildIncidentsReportList ~ data:",
    data
  );
  const { pageChangeHandler, sortChangeHandler } = useTableParams();

  const [deleteList] = useDeleteChildChronologyOfEventsComplaintsInfoByIdMutation();
  //DELETE API For Allegation List
  const listDeleteHandler = (id: any) => {
    deleteList({ id: id })
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
    tableHeaderRefTwo,
    router,
    setSearch,
    data,
    sortChangeHandler,
    pageChangeHandler,
    isSuccess,
    isFetching,
    isError,
    isLoading,
    listDeleteHandler,
    fosterChildId,
  };
};
