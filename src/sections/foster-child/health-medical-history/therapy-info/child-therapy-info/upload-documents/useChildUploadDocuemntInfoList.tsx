import { useRef, useState } from "react";
import { getColumns } from "./columnsInfo";
import { useRouter } from "next/router";
import {
  useDelTherapyDetailsDocsListDataMutation,
  useDelTherapyDetailsListDataMutation,
  useGetAlltherapyDetailsListDataQuery,
  useGetTherapyDetailsDocsListDataQuery,
} from "@root/services/foster-child/health-medical-history/therapy-info/therapyInfoListApi";
import { enqueueSnackbar } from "notistack";
import { displaySuccessMessage } from "@root/utils/mixedUtil";

export const useChildUploadDocuemntInfoList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [page, setPage] = useState(0);

  const [searchValue, setSearchValue] = useState(undefined);
  const [therapInfoCon, setTherapInfo] = useState({
    someAsyncAction: false,
    docsAddModel: false,
    updateViewModel: false,
    updateViewModelDisabled: true,
    uploadFormDataHolder: null,
  });
  const params = {
    search: searchValue,
    offset: page,
    limit: 10,
  };
  const tableHeaderRef = useRef<any>();

  const apiDataParameter = { params, id: query?.therapyInfoId };

  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetTherapyDetailsDocsListDataQuery(apiDataParameter);

  const [delTherapyDetailsDocsListData] =
    useDelTherapyDetailsDocsListDataMutation();

  const handleDeleteChildTherapy = async (id: string) => {
    try {
      setTherapInfo((pre) => ({ ...pre, someAsyncAction: true }));
      const data = await delTherapyDetailsDocsListData({ id });
      displaySuccessMessage(data, enqueueSnackbar);
      setTherapInfo((pre) => ({ ...pre, someAsyncAction: false }));
      return true;
    } catch (error) {
      displaySuccessMessage(error, enqueueSnackbar);
      return false;
    }
  };

  const openAddModel = () => {
    setTherapInfo((pre) => ({ ...pre, docsAddModel: true }));
  };

  const closeAddModel = () => {
    setTherapInfo((pre) => ({ ...pre, docsAddModel: false }));
  };

  const openUpdateViewModel = (viewId: string, isViewModel: boolean = true) => {
    const uploadDocsFormData = data?.data?.therapy_info_document.find(
      ({ id }: any) => id === viewId
    );
    setTherapInfo((pre) => ({
      ...pre,
      uploadFormDataHolder: uploadDocsFormData,
    }));
    setTherapInfo((pre) => ({
      ...pre,
      updateViewModel: true,
      updateViewModelDisabled: isViewModel,
    }));
  };

  const closeUpdateViewModel = () => {
    setTherapInfo((pre) => ({ ...pre, updateViewModel: false }));
  };

  const columns = getColumns({
    handleDeleteChildTherapy,
    openUpdateViewModel,
    router,
  });
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
    openAddModel,
    closeAddModel,
    closeUpdateViewModel,
  };
};
