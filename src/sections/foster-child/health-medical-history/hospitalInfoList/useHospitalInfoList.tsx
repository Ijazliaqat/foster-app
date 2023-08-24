import { useTableParams } from "@root/hooks/useTableParams";
import { useGetHospitalInfoListQuery } from "@root/services/foster-child/health-medical-history/hospital-info-list/HospitalInfoList";

import React, { useState } from "react";

const useHospitalInfoList = (props: any) => {
  const { fosterChildId, hospitalinfoId } = props;
  const [search, setSearch] = useState("");

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data: hospitalInfolistdata,
    isError: hospitalInfolistIserror,
    isLoading: hospitalInfolistisLoading,
    isFetching: hospitalInfolistisFetching,
    isSuccess: hospitalInfolistisSuccess,
  } = useGetHospitalInfoListQuery({
    params: {
      ...params,
      search: search,
      fosterCarerId: fosterChildId,
    },
  });

  return {
    hospitalInfolistdata,
    hospitalInfolistIserror,
    hospitalInfolistisLoading,
    hospitalInfolistisFetching,
    hospitalInfolistisSuccess,

    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  };
};

export default useHospitalInfoList;
