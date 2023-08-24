import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import {
  defaultValueGpDetailsInfoForm,
  gpDetailsInfoFormDataFunction,
  gpDetailsInfoFormSchema,
  gpDetailsInfoFormValues,
} from ".";
import {
  useGetSingleGpDetailsInfoDataQuery,
  usePatchGpDetailsInfoDataMutation,
  usePostGpDetailsInfoDataMutation,
} from "@root/services/foster-child/health-medical-history/gp-details/gpDetailsInfo";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

export const useGPDetailsInfo = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const gpDetailsInfoFormData = gpDetailsInfoFormDataFunction(
    router?.query?.action === "view"
  );

  const [postGpDetailsInfoDataTrigger, postGpDetailsInfoDataStatus] =
    usePostGpDetailsInfoDataMutation();

  const [patchGpDetailsInfoDataTrigger, patchGpDetailsInfoDataStatus] =
    usePatchGpDetailsInfoDataMutation();

  // get api params
  const pathParams = {
    id: router.query?.gpInfoId,
  };

  const apiDataParameter = { pathParams };
  const { data, isLoading } = useGetSingleGpDetailsInfoDataQuery(
    apiDataParameter,
    {
      skip: !!!router.query?.gpInfoId,
      refetchOnMountOrArgChange: true,
    }
  );

  const methods: any = useForm({
    resolver: yupResolver(gpDetailsInfoFormSchema),
    defaultValues: defaultValueGpDetailsInfoForm(gpDetailsInfoFormValues),
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(() => defaultValueGpDetailsInfoForm(data?.data));
  }, [data, reset]);

  const submitGpDetailsInfoForm = async (data: any) => {
    const queryParams = {
      fosterChildId: router.query.fosterChildId,
    };
    const apiDataParameter = { body: data, queryParams };
    if (!!router.query?.gpInfoId) {
      patchGpDetailsInfoForm(data);
      return;
    }
    try {
      const res: any = await postGpDetailsInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/gp-details/gp-details-info`,
        query: {
          gpInfoId: res?.data?.id,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });

      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const patchGpDetailsInfoForm = async (data: any) => {
    const pathParams = {
      id: router.query?.gpInfoId,
    };
    const apiDataParameter = { body: data, pathParams };
    try {
      const res: any = await patchGpDetailsInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/gp-details/gp-details-info`,
        query: {
          gpInfoId: router.query?.gpInfoId,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    gpDetailsInfoFormData,
    methods,
    handleSubmit,
    submitGpDetailsInfoForm,
    router,
    postGpDetailsInfoDataStatus,
    patchGpDetailsInfoDataStatus,
    theme,
    isLoading,
  };
};
