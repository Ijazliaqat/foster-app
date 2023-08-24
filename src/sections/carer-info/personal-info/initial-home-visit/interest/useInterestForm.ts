import { useGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { usePostInitialHomeInterestDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/interest/interest";
import { enqueueSnackbar } from "notistack";
import {
  defaultValueInterestForm,
  interestFormFieldsInfoFunction,
  interestFormValues,
} from ".";
import { useRouter } from "next/router";
import useAuth from "@root/hooks/useAuth";

export const useInterestForm = () => {
  const { query } = useRouter();
  const { user }: any = useAuth();
  const interestFormFieldsInfo = interestFormFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [
    postInitialHomeInterestDataTrigger,
    postInitialHomeInterestDataStatus,
  ] = usePostInitialHomeInterestDataMutation();

  const queryParams = {
    value: "interest",
    fosterCarerId: query?.fosterCarerId,
  };

  const apiDataParameter = { queryParams };
  const { data, isLoading } = useGetAllInitialHomeVisitDataQuery(
    apiDataParameter,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const submitInterestForm = async (data: any) => {
    const putParams = {
      fosterCarerId: query?.fosterCarerId,
    };
    const putDataParameter = { params: putParams, body: data };
    try {
      const res: any = await postInitialHomeInterestDataTrigger(
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
    submitInterestForm,
    postInitialHomeInterestDataStatus,
    interestFormFieldsInfo,
    user,
    data,
    isLoading,
  };
};
