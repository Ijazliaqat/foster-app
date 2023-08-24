import { useTheme } from "@mui/material";
import {
  useLazySingleComplaintListQuery,
  usePatchComplaintListMutation,
  usePostComplaintListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/ComplaintsApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { defaultValues, formSchema, formatters } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useComplaintsForm = (action: any, id: any) => {
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = React.useState(false);
  const [getComplaintList] = useLazySingleComplaintListQuery();
  const [postComplaintDetails] = usePostComplaintListMutation();
  const [editComplaintList] = usePatchComplaintListMutation();
  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getComplaintList(id, true);
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

  // Submit Function
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      postComplaintDetails({
        params: {
          fosterCarerId: fosterCarerId,
        },
        body: data,
      })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Complaint Added Successfully", {
            variant: "success",
          });
          router
            .push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/complaints",
              query: {
                action: "edit",
                id: `${res?.data.id}`,
                fosterCarerId: fosterCarerId,
              },
            })
            .catch((error) => {
              setIsFetching(false);
              const errMsg = error?.data?.message;
              enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
              router.push({
                pathname:
                  "/carer-info/personal-info/carer-chronology-of-events",
                query: { fosterCarerId: fosterCarerId },
              });
            });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id,
        ...data,
      };
      editComplaintList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Complaint Edited Successfully", {
            variant: "success",
          });
          setIsFetching(false);
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          setIsFetching(false);
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
        });
    } else {
      return null;
    }
  };
  return {
    router,
    isLoading,
    onSubmit,
    theme,
    getDefaultValue,
    isFetching,
    setValue,
    trigger,
    handleSubmit,
    getValues,
    methods,
    isSubmitting,
    fosterCarerId,
  };
};
