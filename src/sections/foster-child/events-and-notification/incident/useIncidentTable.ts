import { useTableParams } from "@root/hooks/useTableParams";
import {
  useGetChildChronologyOfEventsIncidentsInfoListQuery,
  useDeleteChildChronologyOfEventsIncidentsInfoByIdMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/IncidentsInfoAPI";
// import { useDeleteChildIncidentMutation, useGetChildIncidentQuery } from "@root/services/foster-child/event-and-notification/incident/IncidentApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useIncidentTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterChildId } = router.query;
  const [search, setSearch] = useState("");
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    // useGetChildIncidentQuery({
    useGetChildChronologyOfEventsIncidentsInfoListQuery({
      search: search,
      fosterChildId: fosterChildId,
    });
  console.log("🚀 ~ file: useIncidentTable.ts:16 ~ data:", fosterChildId);

  const { pageChangeHandler, sortChangeHandler, headerChangeHandler } =
    useTableParams();

  const [deleteList] =
    // useDeleteChildIncidentMutation();
    useDeleteChildChronologyOfEventsIncidentsInfoByIdMutation();

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
  };
};
