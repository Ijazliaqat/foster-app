import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteEmployerMutation,
  useGetEmployerDetailsQuery,
} from "@root/services/carer-info/personal-info/application-form/EmployersApi";
import {
  useDeleteimmunisationMutation,
  useGetImmunisationListQuery,
} from "@root/services/foster-child/health-medical-history/immunisation/ImmunisationApi";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const useImmunisationTable = (fosterChildId: any) => {
  const tableHeaderRef = useRef<any>();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const theme: any = useTheme();

  const { data, isLoading, isError, isFetching, isSuccess }: any =
    useGetImmunisationListQuery({
      id: fosterChildId,
      params,
    });
  const meta = data?.data?.meta;
  const [deleteImmunisation] = useDeleteimmunisationMutation(fosterChildId);

  const listDeleteHandler = (id: any) => {
    deleteImmunisation(id)
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
    theme,
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
