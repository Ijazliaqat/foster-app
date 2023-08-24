import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteAbsenceInfoMutation,
  useGetAbsenceInfoQuery,
} from "@root/services/foster-child/education-records/absence-info/AbsenceInfoAPI";
import { enqueueSnackbar } from "notistack";

export const useAbsenceInfoListTable = () => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetAbsenceInfoQuery<any>({ params });

  const [deleteList] = useDeleteAbsenceInfoMutation();

  // DELETE API Absence Info
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
    data,
    headerChangeHandler,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
