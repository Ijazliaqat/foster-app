import { useGetReferencesInfoQuery } from "@root/services/update-profile/reference/referenceApi";
import { useGetWorkExperienceQuery } from "@root/services/update-profile/training-and-work-his/trainingAndWorkHistoryApi";
import { useState } from "react";

export const useWorkexperinceTable = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetWorkExperienceQuery({});
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
    const tableRows = data?.data?.workExperience ?? [];
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
    tableRows: data?.data?.workExperience,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    tableStatusInfo,
    closeViewUpdateModel,
    openViewUpdateModel,
  };
};
