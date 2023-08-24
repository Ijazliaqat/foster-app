import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";

import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import {
  allegationInfoFormDataFunction,
  allegationInfoFormSchema,
  allegationInfoFormValues,
  defaultValueAllegationInfoForm,
} from ".";
import {
  useGetSingleAllegationInfoDataQuery,
  usePatchAllegationInfoDataMutation,
  usePostAllegationInfoDataMutation,
} from "@root/services/foster-child/events-and-notification/allegation/allegationInfo";

export const useAllegationInfo = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const allegationInfoFormData = allegationInfoFormDataFunction(
    router?.query?.action === "view"
  );

  const [postAllegationInfoDataTrigger, postAllegationInfoDataStatus] =
    usePostAllegationInfoDataMutation();

  const [patchAllegationInfoDataTrigger, patchAllegationInfoDataStatus] =
    usePatchAllegationInfoDataMutation();

  // get api params
  const pathParams = {
    id: router.query?.id,
  };

  const apiDataParameter = { pathParams };
  const { data, isLoading } = useGetSingleAllegationInfoDataQuery(
    apiDataParameter,
    {
      skip: !!!router.query?.id,
      refetchOnMountOrArgChange: true,
    }
  );

  const methods: any = useForm({
    resolver: yupResolver(allegationInfoFormSchema),
    defaultValues: defaultValueAllegationInfoForm(allegationInfoFormValues),
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(() => defaultValueAllegationInfoForm(data?.data));
  }, [data, reset]);

  const saveAsDraft = (isDraft: any) => {
    console.log({ isDraft });
      if (!!router.query?.id) {
      return;
    }
    handleSubmit(submitAllegationInfoForm)(isDraft);
  };

  const submitAllegationInfoForm = async (data: any, isDraft: any) => {
    const body = {
      fosterChildId: router.query.fosterChildId,
      urnNumber: "CH001",
      ...data,
      status: typeof isDraft === "string" ? "Pending" : "Submit",
    };
    console.log({ body });
    const queryParams = {
      fosterChildId: router.query.fosterChildId,
    };
    const apiDataParameter = { body, queryParams };
    if (!!router.query?.id) {
      patchAllegationInfoForm(data);
      return;
    }
    try {
      const res: any = await postAllegationInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/events-and-notification/allegation/allegation-info`,
        query: {
          id: res?.data?.id,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });

      enqueueSnackbar(res?.message || `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };

  const patchAllegationInfoForm = async (data: any) => {
    const pathParams = {
      id: router.query?.id,
    };
   const body = {
      fosterChildId: router.query.fosterChildId,
      urnNumber: "CH001",
      ...data,
      status: "Submit",
    };
    const apiDataParameter = { body, pathParams };
    try {
      const res: any = await patchAllegationInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/events-and-notification/allegation/allegation-info`,
        query: {
          id: router.query?.id,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });
      enqueueSnackbar(res?.message || `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };

  return {
    allegationInfoFormData,
    methods,
    handleSubmit,
    submitAllegationInfoForm,
    router,
    postAllegationInfoDataStatus,
    patchAllegationInfoDataStatus,
    theme,
    isLoading,
    saveAsDraft,
  };
};
