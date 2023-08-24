import { useTheme } from "@mui/material";
import {
  useDeleteHealthAndSafetyListDataMutation,
  useGetHealthAndSafetyListDataQuery,
} from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { columns } from ".";
import usePath from "@root/hooks/usePath";

export const useHealthAndSafetyTable = () => {
  const { makePath } = usePath()

  const [healthAndSafetyId, setHealthAndSafetyId] = React.useState<any>(null);
  const { data, isLoading, isError, isSuccess } =
    useGetHealthAndSafetyListDataQuery({});
  const healthAndSafetyApiData = data?.data;

  const [deleteListItem] = useDeleteHealthAndSafetyListDataMutation({});

  const deleteList = async () => {
    const res: any = deleteListItem(healthAndSafetyId)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Training Profile deleted  Successfully", {
          variant: "success",
        });
        setHealthAndSafetyId(null);
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const router = useRouter();
  const tableHeaderRef = useRef<any>();
  const openDeleteModel = (id: any) => {
    setHealthAndSafetyId(id);
  };

  const columnsFunction = columns({
    openDeleteModel,
    makePath,
    router
  });
  return {
    deleteList,
    router,
    tableHeaderRef,
    healthAndSafetyApiData,
    isLoading,
    isError,
    columnsFunction,
    isSuccess,
    healthAndSafetyId,
    setHealthAndSafetyId,
  };
};
