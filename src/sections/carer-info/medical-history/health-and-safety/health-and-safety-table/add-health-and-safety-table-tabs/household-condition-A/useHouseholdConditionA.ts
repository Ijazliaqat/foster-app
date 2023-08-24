import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { householdConditionA_Data, FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";
import { useHouseHoldConditionAPostMutation } from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { enqueueSnackbar } from "notistack";

export const useHouseholdConditionA = ({
  breadCrumbData,
  formData,
  submitFunction,
  initialValueProps,
}: any) => {
  const theme: any = useTheme();
  const router = useRouter();
  // const action = router.query;
  // console.log(router.query);

  const [resetTrigger, { data, isLoading, isSuccess }] =
    useHouseHoldConditionAPostMutation();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: initialValueProps,
  });
  const { handleSubmit } = methods;
  const onSubmit = async (data: any) => {
    formData(data);
    submitFunction();
    // try {
    //   const res: any = await resetTrigger(data);
    //   enqueueSnackbar(res?.data?.message, { variant: "success" });
    // } catch (error: any) {
    //   console.log(error?.message);

    //   const errMsg = error?.data?.message;
    //   console.log(errMsg);

    //   enqueueSnackbar(error?.message, { variant: "error" });
    // }
  };
  useEffect(() => {
    breadCrumbData("Household Condition - A");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    theme,
    handleSubmit,
    onSubmit,
    breadCrumbData,
    methods,
    router,
    isLoading,
  };
};
