import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetCarerFamilyTableApiQuery } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import {
  useDeleteLeisureActivityMutation,
  useGetLeisureActivitiesListQuery,
} from "@root/services/foster-child/education-records/leisure-activities-hobby/LeisureActivitiesHobby";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useRef } from "react";

export const useLeisureActivitiesTable = ({ id }: any) => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetLeisureActivitiesListQuery({ params, id });
  const [deleteLeisureActivity] = useDeleteLeisureActivityMutation();

  const leisureActivity = data?.data;
  const meta = data?.meta;

  const listDeleteHandler = (id: any) => {
    deleteLeisureActivity(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Record Deleted Successfully", {
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
    leisureActivity,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    meta,
  };
};
