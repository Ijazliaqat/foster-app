import { useTableParams } from "@root/hooks/useTableParams";
import { useGetChildChronologyOfEventsAllegationsInfoListQuery, useDeleteChildChronologyOfEventsAllegationsInfoByIdMutation } from "@root/services/foster-child/child-background-info/child-chronology-of-events/AllegationsInfoAPI";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useAllegationsInfoTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data, isError, isLoading, isFetching, isSuccess }: any = useGetChildChronologyOfEventsAllegationsInfoListQuery({
    search: search,
  });
  const { pageChangeHandler, sortChangeHandler } = useTableParams();

  const [deleteList] = useDeleteChildChronologyOfEventsAllegationsInfoByIdMutation();
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
