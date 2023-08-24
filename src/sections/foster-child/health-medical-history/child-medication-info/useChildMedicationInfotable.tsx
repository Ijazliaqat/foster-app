import { useTableParams } from "@root/hooks/useTableParams";
import { useGetChildMedicationInfoQuery } from "@root/services/foster-child/health-medical-history/child-medication-info/ChildMedicationInfo";
import React, { useState } from "react";

const useChildMedicationInfotable = (props: any) => {
  const { fosterChildId, ChildMedicationInfoId } = props;
  const [search, setSearch] = useState("");

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data: childMedicationInfotabledata,
    isError: childMedicationInfotableIserror,
    isLoading: childMedicationInfotableisLoading,
    isFetching: childMedicationInfotableisFetching,
    isSuccess: childMedicationInfotableSuccess,
  } = useGetChildMedicationInfoQuery({
    params: {
      fosterChildId: fosterChildId,
      ...params,
      search: search,
    },
  });

  return {
    childMedicationInfotabledata,
    childMedicationInfotableIserror,
    childMedicationInfotableisLoading,
    childMedicationInfotableisFetching,
    childMedicationInfotableSuccess,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  };
};

export default useChildMedicationInfotable;
