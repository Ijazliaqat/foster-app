import { useTableParams } from "@root/hooks/useTableParams";
import {
  useGetChildChronologyOfEventsOohReportsListQuery,
  useDeleteChildChronologyOfEventsOohReportsByIdMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/OOHReportsAPI";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useOOHReportsTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useGetChildChronologyOfEventsOohReportsListQuery({
      search: search,
    });
  // const dataLogData = dayLogList?.data?.child_chronology_of_events;
  // const meta = dayLogList?.data?.meta;
  const { pageChangeHandler, sortChangeHandler } = useTableParams();

  const [deleteList] = useDeleteChildChronologyOfEventsOohReportsByIdMutation();
  //DELETE API For Allegation List
  const listDeleteHandler = (id: any) => {
    deleteList({id:id})
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
  };
};
