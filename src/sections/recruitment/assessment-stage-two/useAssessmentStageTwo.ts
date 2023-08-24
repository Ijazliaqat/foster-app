import { useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { ASSESSMENTSTAGETWODATA } from ".";
import { useGetStageTwoStatusQuery } from "@root/services/recruitment/assessment-stage-two/assessmentStageTwoApi";
import { useRouter } from "next/router";

export const useAssessmentStageTwo = () => {
  const route = useRouter()
  const {fosterCarerId} = route.query
  const ASSESSMENTSTAGETWODATAFUNCTION = ASSESSMENTSTAGETWODATA(fosterCarerId);
  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const theme: any = useTheme();
  const [assessmentStageTwoData, setAssessmentStageTwoData] =
    React.useState<any>(ASSESSMENTSTAGETWODATAFUNCTION);
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetStageTwoStatusQuery(id);
  const assessmentStageTwoApiData = data?.data;

  useEffect(() => {
    setAssessmentStageTwoData(
      ASSESSMENTSTAGETWODATAFUNCTION?.map((item: any) => ({
        ...item,
        status: assessmentStageTwoApiData?.[item?.textForApi],
      }))
    );
  }, [assessmentStageTwoApiData]);
  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    assessmentStageTwoData,
    setAssessmentStageTwoData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    assessmentStageTwoApiData,
  };
};
