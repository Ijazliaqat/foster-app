import React, { useEffect } from "react";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import {
  defaultValueEducationInfoForm,
  sanctionDetailsDefaultValues,
  sanctionDetailsFormDataFunction,
} from ".";
import {
  useGetSingleSanctionDetailsDataQuery,
  usePatchSanctionDetailsDataMutation,
  usePostSanctionDetailsDataMutation,
} from "@root/services/foster-child/other-information/saction-details/sactionDetailsList";

export const useSanctionDetailsForm = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const sanctionDetailsFormData = sanctionDetailsFormDataFunction(
    router?.query?.action === "view"
  );

  const [postSanctionDetailsDataTrigger, postSanctionDetailsDataStatus] =
    usePostSanctionDetailsDataMutation();

  const [patchSanctionDetailsDataTrigger, patchSanctionDetailsDataStatus] =
    usePatchSanctionDetailsDataMutation();

  const methods: any = useForm({
    // resolver: yupResolver(SchoolDetailInfoFormSchema),
    defaultValues: defaultValueEducationInfoForm(sanctionDetailsDefaultValues),
  });
  const { data, isLoading } = useGetSingleSanctionDetailsDataQuery(
    {
      sanctionDetailsId: router?.query?.sanctionDetailsId,
    },
    {
      skip: !!!router?.query?.sanctionDetailsId,
    }
  );
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset((formValues: any) =>
      defaultValueEducationInfoForm(data?.data?.getSanctionDetails)
    );
  }, [data]);

  const onSubmitHandler = async (data: any) => {
    const queryParams = {
      fosterChildId: router?.query?.fosterChildId,
    };
    const apiDataParameter = {
      body: data,
      queryParams,
    };
    if (!!router.query?.sanctionDetailsId) {
      patchEducationInfoForm(data);
      return;
    }

    try {
      const res: any = await postSanctionDetailsDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/other-information/sanction-details-list/sanction-details`,
        query: {
          sanctionDetailsId: res?.data?.id,
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

  const patchEducationInfoForm = async (data: any) => {
    const pathParams = {
      sanctionDetailsId: router?.query?.sanctionDetailsId,
    };

    const apiDataParameter = { body: data, pathParams };
    try {
      const res: any = await patchSanctionDetailsDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/other-information/sanction-details-list/sanction-details`,
        query: {
          sanctionDetailsId: router.query?.sanctionDetailsId,
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
    sanctionDetailsFormData,
    methods,
    isSubmitting,
    theme,
    handleSubmit,
    onSubmitHandler,
    isLoading,
    router,
    postSanctionDetailsDataStatus,
    patchSanctionDetailsDataStatus,
  };
};
