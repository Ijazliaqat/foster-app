import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema, formatters } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazyReportByIdQuery,
  usePatchReportByIdMutation,
  useReportAddPostMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/ooh-report-api/reportApi";
export const useReportForm = (action: any, id: any) => {
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  //API For Getting Single Details
  const [getReportList] = useLazyReportByIdQuery();
  //API For Posting OOH Report Form
  const [postReportDetails] = useReportAddPostMutation();
  //API For Patch OOH Report List
  const [editReportList] = usePatchReportByIdMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getReportList(id, true);
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
    setValue,
    trigger,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      const formData = {
        fosterCarerId,
        ...data,
      };
      postReportDetails(formData)
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Report Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/carer-info/personal-info/carer-chronology-of-events/ooh-report",
            query: {
              action: "edit",
              id: `${res?.data.id}`,
              fosterCarerId: fosterCarerId,
            },
          });
        })
        .catch((error) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id: id,
        ...data,
      };
      editReportList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Report Edited Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
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
    setValue,
    trigger,
    handleSubmit,
    getValues,
    methods,
    isFetching,
    isSubmitting,
    fosterCarerId,
  };
};
