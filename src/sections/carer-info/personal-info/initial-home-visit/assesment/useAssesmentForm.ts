import { usePostInitialHomeAssessmentDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/assessment/assessment";
import { useGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  assesmentFormFieldsInfoFunction,
  assesmentFormValues,
  defaultValuesAssesmentForm,
} from ".";
import useAuth from "@root/hooks/useAuth";

export const useAssesmentForm = () => {
  const { query } = useRouter();
  const { user }: any = useAuth();
  const assesmentFormFieldsInfo = assesmentFormFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [
    postInitialHomeAssessmentDataTrigger,
    postInitialHomeAssessmentDataStatus,
  ] = usePostInitialHomeAssessmentDataMutation();

  const queryParams = {
    value: "assessment",
    fosterCarerId: query?.fosterCarerId,
  };

  const apiDataParameter = { queryParams };
  const { data, isLoading } = useGetAllInitialHomeVisitDataQuery(
    apiDataParameter,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const submitAssesmentForm = async (data: any) => {
    const putParams = {
      fosterCarerId: query?.fosterCarerId,
    };
    const putDataParameter = { params: putParams, body: data };
    try {
      const res: any = await postInitialHomeAssessmentDataTrigger(
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
    submitAssesmentForm,
    postInitialHomeAssessmentDataStatus,
    assesmentFormFieldsInfo,
    user,
    data,
    isLoading,
  };
};
