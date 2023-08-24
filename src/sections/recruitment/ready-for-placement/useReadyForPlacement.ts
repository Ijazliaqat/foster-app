import { useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { READYFORPLACEMENT } from ".";
import { useGetReadyForPlacementStatusQuery } from "@root/services/recruitment/ready-for-placement/readyForPlacementApi";
import { useRouter } from "next/router";

export const useReadyForPlacement = () => {
  const theme: any = useTheme();
  const route = useRouter();
  const { fosterCarerId } = route.query;
  const READYFORPLACEMENTFUNCTION = READYFORPLACEMENT(fosterCarerId);
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [readyForPlacementData, setReadyForPlacementData] = React.useState<any>(
    READYFORPLACEMENTFUNCTION
  );
  const [formDialogId, setFormDialogId] = React.useState<any>();
  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetReadyForPlacementStatusQuery(id);
  const readyForPlacementApiData = data?.data;
  useEffect(() => {
    setReadyForPlacementData(
      READYFORPLACEMENTFUNCTION.map((item) => ({
        ...item,
        status: readyForPlacementApiData?.[item.textForApi],
      }))
    );
  }, [readyForPlacementApiData]);
  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    readyForPlacementData,
    setReadyForPlacementData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  };
};
