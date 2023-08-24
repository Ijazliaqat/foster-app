import { useGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { usePostPrimaryCarerDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/primary/primaryCarer";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { primaryCarerFieldsInfoFunction } from ".";
import useAuth from "@root/hooks/useAuth";

export const usePrimaryCarerForm = () => {
  const { query } = useRouter();
  const { user }: any = useAuth();
  const primaryCarerFieldsInfo = primaryCarerFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [postPrimaryCarerDataTrigger, postPrimaryCarerDataStatus] =
    usePostPrimaryCarerDataMutation();
  // get api params
  const queryParams = {
    value: "primaryCarer",
    fosterCarerId: query?.fosterCarerId,
  };

  const apiDataParameter = { queryParams };
  const { data, isLoading } = useGetAllInitialHomeVisitDataQuery(
    apiDataParameter,
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const submitPrimaryCarerForm = async (data: any) => {
    const putParams = {
      fosterCarerId: query?.fosterCarerId,
    };
    const putDataParameter = { params: putParams, body: data };
    try {
      const res: any = await postPrimaryCarerDataTrigger(
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
    submitPrimaryCarerForm,
    postPrimaryCarerDataStatus,
    user,
    primaryCarerFieldsInfo,
    data,
    isLoading,
  };
};
