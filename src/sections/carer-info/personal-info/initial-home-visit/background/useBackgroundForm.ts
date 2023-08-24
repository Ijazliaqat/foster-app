import { usePostInitialHomeBackgroundDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/background/background";
import { useGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { enqueueSnackbar } from "notistack";
import {
  backgroundFormFieldsInfoFunction,
  backgroundFormValues,
  defaultValuesBackgroundForm,
} from ".";
import { useRouter } from "next/router";
import useAuth from "@root/hooks/useAuth";

export const useBackgroundForm = () => {
  const { query } = useRouter();
  const { user }: any = useAuth();
  const backgroundFormFieldsInfo = backgroundFormFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [
    postInitialHomeBackgroundDataTrigger,
    postInitialHomeBackgroundDataStatus,
  ] = usePostInitialHomeBackgroundDataMutation();

  const queryParams = {
    value: "backGround",
    fosterCarerId: query?.fosterCarerId,
  };

  const apiDataParameter = { queryParams };
  const { data, isLoading } = useGetAllInitialHomeVisitDataQuery(
    apiDataParameter,
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const submitBackgroundForm = async (data: any) => {
    const putParams = {
      fosterCarerId: query?.fosterCarerId,
    };
    const putDataParameter = { params: putParams, body: data };
    try {
      const res: any = await postInitialHomeBackgroundDataTrigger(
        putDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    submitBackgroundForm,
    postInitialHomeBackgroundDataStatus,
    backgroundFormFieldsInfo,
    user,
    data,
    isLoading,
  };
};
