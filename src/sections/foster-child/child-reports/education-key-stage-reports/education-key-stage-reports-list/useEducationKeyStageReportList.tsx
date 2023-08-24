import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import { columnsEducationKeyStageTable } from ".";
import { useRouter } from "next/router";
import { useGetEducationKeyStageReportListQuery } from "@root/services/foster-child/child-reports/education-key-stage-report/EducationKeyStageReportAPI";

const useEducationKeyStageReportList = () => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const fosterChildId = router.query.fosterChildId

  const {data,isLoading} = useGetEducationKeyStageReportListQuery({params,fosterChildId});  

  const columnsEducationKeyStageTableFuntion =
    columnsEducationKeyStageTable(router);
  return {
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    columnsEducationKeyStageTableFuntion,
    data,
    isLoading
  };
};

export default useEducationKeyStageReportList;
