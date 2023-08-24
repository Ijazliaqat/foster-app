import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema, formatters } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazySingleEmpReferenceTwoListQuery,
  usePatchEmpReferenceTwoListMutation,
  usePostEmpReferenceTwoListMutation,
} from "@root/services/carer-info/background-checks/statutory-check-list/employment-reference-2/employmentReference2Api";
export const useEmploymentReferenceTwoForm = (action: any, id: any) => {
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  //API For Getting Single Details
  const [getEmploymentReferenceTwo] = useLazySingleEmpReferenceTwoListQuery();
  //API For Posting Employment Reference Two Form
  const [postEmploymentReferenceTwo] = usePostEmpReferenceTwoListMutation();
  //API For Patch Employment Reference Two List
  const [editEmploymentReferenceTwo] = usePatchEmpReferenceTwoListMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getEmploymentReferenceTwo(id, true);
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

  //OnSubmit Function
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      const formData = {
        fosterCarerId,
        ...data,
      };
      postEmploymentReferenceTwo(formData)
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/employment-reference-2",
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
            pathname:
              "/carer-info/background-checks/statutory-checks-list",
            query: { fosterCarerId: fosterCarerId },
          });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id,
        ...data,
      };
      editEmploymentReferenceTwo(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list",
            query: { fosterCarerId: fosterCarerId },
          });
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list",
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
