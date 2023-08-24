import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteEmployerMutation,
  useGetEmployerDetailsQuery,
} from "@root/services/carer-info/personal-info/application-form/EmployersApi";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useEmployerTable = (applicationFormid: any, role: any) => {
  let [viewData, setViewData] = useState(null);
  let [employerData, setEmployerData] = useState(null);
  const tableHeaderRef = useRef<any>();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const changeView = (val: any) => {
    setViewData(val);
  };

  const theme: any = useTheme();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetEmployerDetailsQuery({ id: applicationFormid, params });
  const meta = data?.data;
  const [deleteEmployer] = useDeleteEmployerMutation(applicationFormid);

  const listDeleteHandler = (id: any) => {
    deleteEmployer(id)
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
    changeView,
    viewData,
    setViewData,
    theme,
    employerData,
    setEmployerData,
    data,
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
