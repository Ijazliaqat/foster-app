import { useBehaviorInfoListQuery } from "@root/services/foster-child/health-medical-history/behaviorInfoListApi/BehaviorInfoListApi";
import React from "react";

const useBehavioralInfoTable = (props: any) => {
  const { fosterChildId } = props;
  const {
    data: BehaviorInfoList,
    isLoading: BehaviorInfoListisLoading,
    isSuccess: BehaviorInfoListisSuccess,
    isError: BehaviorInfoListisError,
    isFetching: BehaviorInfoListisFetching,
  } = useBehaviorInfoListQuery({ fosterChildId: fosterChildId });

  return {
    BehaviorInfoList,
    BehaviorInfoListisLoading,
    BehaviorInfoListisSuccess,
    BehaviorInfoListisError,
    BehaviorInfoListisFetching,
  };
};

export default useBehavioralInfoTable;
