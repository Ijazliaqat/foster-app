import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema, formatters } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazySingleRecordingListQuery,
  usePatchRecordingListMutation,
  usePostDiaryRecordingListMutation,
} from "@root/services/foster-child/child-day-log/diary-recordings/DiaryRecordingsApi";
export const useDiaryRecordingsForm = (action: any, id: any) => {
  const router = useRouter();
  const { fosterChildId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  //API For Getting Single Details
  const [getsingleDiaryRecording] = useLazySingleRecordingListQuery();
  //API For Posting Diary Recordings Form
  const [postDiaryRecordings] = usePostDiaryRecordingListMutation();
  //API For Patch Diary Recordings List
  const [editDiaryRecording] = usePatchRecordingListMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getsingleDiaryRecording(id, true);
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

  //OnSubmit Function
  const onSubmit = async (data: any) => {
    const sendata: any = {};

    const keys = Object.keys(defaultValues);

    for (const key of keys) {
      if (data[key] !== undefined) {
        sendata[key] = data[key];
      }
    }
    if (action === "add") {
      setIsFetching(true);
      postDiaryRecordings({
        params: {
          fosterChildId: fosterChildId,
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
              "/foster-child/child-day-log/diary-recordings/child-diary-recordings",
            query: {
              action: "edit",
              id: `${res?.data.id}`,
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/foster-child/child-day-log/diary-recordings",
            query: {
              fosterChildId: fosterChildId,
            },
          });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      let formData = {
        id: id,
        ...sendata,
      };
      editDiaryRecording(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/child-day-log/diary-recordings",
            query: { fosterChildId: fosterChildId },
          });
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/foster-child/child-day-log/diary-recordings",
            query: { fosterChildId: fosterChildId },
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
    fosterChildId,
  };
};
