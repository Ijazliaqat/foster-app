import { useGetOtherInfoAdditionalDocsQuery } from "@root/services/update-profile/other-information/otherInformationApi";
import { useState } from "react";

export const useAdditionalDocs = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetOtherInfoAdditionalDocsQuery({});
  const [tableStatusInfo, setTableStatusInfo] = useState({
    updateViewModel: false,
    updateId: "",
    refFormDataHolder: null,
    isDisabled: true,
    viewModel: false,
  });
  const closeViewUpdateModel = () => {
    setTableStatusInfo((pre) => ({ ...pre, updateViewModel: false }));
  };
  const openViewUpdateModel = (id: string, disabled: boolean) => {
    const tableRows = data?.data ?? [];
    const indexOf = tableRows.findIndex(({ id: Id }: any) => Id === id);
    setTableStatusInfo((pre) => ({
      ...pre,
      updateViewModel: true,
      updateId: id,
      refFormDataHolder: tableRows[indexOf],
      isDisabled: Boolean(disabled),
    }));
  };
  console.log({ data });
  return {
    tableRows: data?.data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    tableStatusInfo,
    closeViewUpdateModel,
    openViewUpdateModel,
  };
};
