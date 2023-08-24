import { useGetAdditionalTrainingDetailsQuery } from "@root/services/update-profile/training-and-work-his/trainingAndWorkHistoryApi";
import { useState } from "react";

export const useAdditionalTable = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAdditionalTrainingDetailsQuery({});
  const [tableStatusInfo, setTableStatusInfo] = useState({
    updateViewModel: false,
    updateId: "",
    refFormDataHolder: null,
    isDisabled: true,
    viewModel: false,
  });
  console.log({ data });
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
