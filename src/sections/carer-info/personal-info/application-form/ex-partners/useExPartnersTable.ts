import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteExPartnerMutation,
  useGetExPartnerDetailsQuery,
} from "@root/services/carer-info/personal-info/application-form/ExPartnersApi";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useExPartnersTable = (applicationFormid: any, role: any) => {
  let [viewData, setViewData] = useState(null);
  let [exPartnerData, setExPartnerData] = useState(null);
  const tableHeaderRef = useRef<any>();

  const changeView = (val: any) => {
    setViewData(val);
  };
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const theme: any = useTheme();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetExPartnerDetailsQuery({ id: applicationFormid, params });
  const meta = data?.data?.meta;

  const [deleteExPartner] = useDeleteExPartnerMutation();
  const listDeleteHandler = (id: any) => {
    deleteExPartner(id)
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
    exPartnerData,
    setExPartnerData,
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    tableHeaderRef,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
