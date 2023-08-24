import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazyGetChildChronologyOfEventsIncidentsInfoByIdQuery,
  usePostChildChronologyOfEventsIncidentsInfoMutation,
  usePatchChildChronologyOfEventsIncidentsInfoByIdMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/IncidentsInfoAPI";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
import { defaultValues, formSchema, formatters } from ".";
// import {
//   useGetChildIncidentByIdQuery,
//   useLazyGetChildIncidentByIdQuery,
//   usePatchChildIncidentMutation,
//   usePostChildIncidentMutation,
// } from "@root/services/foster-child/event-and-notification/incident/IncidentApi";

export const useIncidentForm = () => {
  const router = useRouter();
  const { action, id, fosterChildId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const [getIncidentsInfoList] =
    // useLazyGetChildIncidentByIdQuery();
    useLazyGetChildChronologyOfEventsIncidentsInfoByIdQuery();
  const [postIncidentsInfoData] =
    // usePostChildIncidentMutation({});
    usePostChildChronologyOfEventsIncidentsInfoMutation({});
  const [editIncidentsInfoList] =
    // usePatchChildIncidentMutation();
    usePatchChildChronologyOfEventsIncidentsInfoByIdMutation();

  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getIncidentsInfoList({ id });
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
      parseDatesToTimeStampByKey(responseData);
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
      postIncidentsInfoData({
        addIncidentsInfoRequestDto: {
          ...data,
          fosterChildId,
          status: "Pending",
        },
      })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/events-and-notification/incident/actions",
            query: { action: "edit", id: `${res?.data.id}`, fosterChildId },
          });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id,
        addIncidentsInfoRequestDto: {
          ...data,
        },
      };
      editIncidentsInfoList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          setIsFetching(false);
          router.push({
            pathname: "/foster-child/events-and-notification/incident",
            query: {
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
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
    action,
    id,
    fosterChildId,
  };
};
