import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema, formatters } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazySingleReferenceTwoListQuery,
  usePatchReferenceTwoListMutation,
  usePostReferenceTwoListMutation,
} from "@root/services/carer-info/background-checks/statutory-check-list/reference-2/reference2Api";
export const useReferenceTwoForm = (action: any, id: any) => {
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);

  //API For Getting Single Details
  const [getReferenceTwoList] = useLazySingleReferenceTwoListQuery();
  //API For Reference Two Form
  const [postReferenceTwoList] = usePostReferenceTwoListMutation();
  //API For Patch Reference Two List
  const [editReferenceTwoList] = usePatchReferenceTwoListMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getReferenceTwoList(id, true);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = { ...data.data };
      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }
      return responseData;
    } else {
      setIsLoading(false);
      return defaultValues;
    }
  };
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: getDefaultValue,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //Onsubmit Function
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      postReferenceTwoList({
        params: {
          fosterCarerId: fosterCarerId,
        },
        body: data,
      })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/reference-2",
            query: {
              action: "edit",
              id: `${res?.data.id}`,
              fosterCarerId: fosterCarerId,
            },
          });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/background-checks/statutory-checks-list",
            query: { fosterCarerId: fosterCarerId },
          });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id,
        ...data,
      };
      editReferenceTwoList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/carer-info/background-checks/statutory-checks-list",
            query: { fosterCarerId: fosterCarerId },
          });
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/background-checks/statutory-checks-list",
            query: { fosterCarerId: fosterCarerId },
          });
          setIsFetching(false);
        });
    } else {
      return null;
    }
  };
  return {
    router,
    onSubmit,
    isLoading,
    getDefaultValue,
    theme,
    handleSubmit,
    methods,
    isFetching,
    isSubmitting,
    fosterCarerId,
  };
};
