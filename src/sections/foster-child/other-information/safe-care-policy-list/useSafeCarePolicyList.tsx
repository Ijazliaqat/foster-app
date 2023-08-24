import { useRef, useState } from "react";
import { getColumns } from "./columnsInfo";
import { useRouter } from "next/router";
import {
  useDelTherapyDetailsListDataMutation,
  useGetAlltherapyDetailsListDataQuery,
} from "@root/services/foster-child/health-medical-history/therapy-info/therapyInfoListApi";
import { enqueueSnackbar } from "notistack";
import { displaySuccessMessage } from "@root/utils/mixedUtil";
import {
  useDelSatsExamGradeListDataMutation,
  useGetSatsExamGradeListDataQuery,
} from "@root/services/foster-child/education-records/sats-exam-grade/satsExamGradeListApi";
import {
  useDelSafeCarePolicyListDataMutation,
  useGetSafeCarePolicyDocsListDataQuery,
  useGetSafeCarePolicyListDataQuery,
} from "@root/services/foster-child/other-information/safe-care-policy/safeCarePolicyApi";

export const useSafeCarePolicyList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const [safeCarePolicyCon, setsafeCarePolicyCon] = useState({
    someAsyncAction: false,
  });
  const params = {
    search: searchValue,
    offset: page,
    limit: 10,
  };
  const tableHeaderRef = useRef<any>();

  const apiDataParameter = { params, id: query.fosterChildId };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetSafeCarePolicyListDataQuery(apiDataParameter);
  // console.log("Data", data);
  const [delSafeCarePolicyListData] = useDelSafeCarePolicyListDataMutation();

  const handleDeleteDocs = async (id: string) => {
    try {
      setsafeCarePolicyCon((pre) => ({ ...pre, someAsyncAction: true }));
      const data = await delSafeCarePolicyListData({ id });
      displaySuccessMessage(data, enqueueSnackbar);
      setsafeCarePolicyCon((pre) => ({ ...pre, someAsyncAction: false }));
      return true;
    } catch (error) {
      displaySuccessMessage(error, enqueueSnackbar);
      return false;
    }
  };

  const columns = getColumns({ router, handleDeleteDocs });

  return {
    tableHeaderRef,
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    setPage,
    page,
    safeCarePolicyCon,
  };
};
