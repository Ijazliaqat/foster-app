import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import {
  CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT,
  childDaylogEventsReportInfoTableColumnsFunction,
} from ".";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteChildDaylogEventsReportInfoDataMutation,
  useGetAllChildDaylogEventsReportListDataQuery,
} from "@root/services/foster-child/child-records/child-day-log-events-reports/childDayLogEventsReportsInfo";

export const useChildDaylogEventsReportList = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);

  const [
    deleteChildDaylogEventsReportInfoDataTrigger,
    deleteChildDaylogEventsReportInfoDataStatus,
  ] = useDeleteChildDaylogEventsReportInfoDataMutation();

  const queryParams = {
    search: searchValue,
    offset: page,
    limit: CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT,
    ...(router?.query?.fosterChildId && {
      fosterChildId: router?.query?.fosterChildId,
    }),
  };
  const apiDataParameter = { queryParams };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllChildDaylogEventsReportListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const onDeleteConfirm = async (data: any) => {
    const pathParams = {
      id: deleteData,
    };
    const apiDataParameter = { pathParams };
    try {
      const res: any = await deleteChildDaylogEventsReportInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      setIsRecordSetForDelete(false);

      enqueueSnackbar(res?.message || `Deleted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };
  const prepareRecordForDelete = (data: any) => {
    setIsRecordSetForDelete(true);
    setDeleteData(data);
  };
  const childDaylogEventsReportInfoTableColumns =
    childDaylogEventsReportInfoTableColumnsFunction(
      router,
      prepareRecordForDelete,
      theme
    );

  return {
    childDaylogEventsReportInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    setPage,
    CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    onDeleteConfirm,
  };
};
