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

export const useSatsExamGradeList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const [therapInfoCon, setTherapInfo] = useState({
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
    useGetSatsExamGradeListDataQuery(apiDataParameter);
  // console.log("Data", data);
  const [delStasEcamGradeListData] = useDelSatsExamGradeListDataMutation();

  const handleDeleteSats = async (id: string) => {
    try {
      setTherapInfo((pre) => ({ ...pre, someAsyncAction: true }));
      const data = await delStasEcamGradeListData({ id });
      displaySuccessMessage(data, enqueueSnackbar);
      setTherapInfo((pre) => ({ ...pre, someAsyncAction: false }));
      return true;
    } catch (error) {
      displaySuccessMessage(error, enqueueSnackbar);
      return false;
    }
  };

  const columns = getColumns({ router, handleDeleteSats });

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
    therapInfoCon,
  };
};
