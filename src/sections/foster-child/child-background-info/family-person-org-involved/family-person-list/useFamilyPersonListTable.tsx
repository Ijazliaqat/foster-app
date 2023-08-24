import {
  useDeleteFamilyPersonListMutation,
  useGetFamilyPersonListQuery,
} from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";

export const useFamilyPersonListTable = () => {
  
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetFamilyPersonListQuery<any>({ params });
    console.log("pagination", params)

  const [deleteList] = useDeleteFamilyPersonListMutation();

  // DELETE API For Family Person List
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
