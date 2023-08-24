import { useTableParams } from "@root/hooks/useTableParams";
import {
  useGetChildChronologyOfEventsAbsenceInfoListQuery,
  useDeleteChildChronologyOfEventsAbsenceInfoByIdMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/AbsenceInfoAPI";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useAbsenceInfoTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data, isError, isLoading, isFetching, isSuccess }: any = useGetChildChronologyOfEventsAbsenceInfoListQuery({
    search: search,
  });
  const { pageChangeHandler, sortChangeHandler } = useTableParams();

  const [deleteList] = useDeleteChildChronologyOfEventsAbsenceInfoByIdMutation();
  //DELETE API For Allegation List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        console.log(id, res);
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
