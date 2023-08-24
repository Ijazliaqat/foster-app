import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { defaultValues, formSchema, formatters } from "./AllegationInfoData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazyGetChildChronologyOfEventsAllegationsInfoByIdQuery,
  usePostChildChronologyOfEventsAllegationsInfoMutation,
  usePatchChildChronologyOfEventsAllegationsInfoByIdMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/AllegationsInfoAPI";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const useAllegationInfoForm = () => {
  const router = useRouter();
  const { action, id, fosterChildId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [getAllegationsInfoList] = useLazyGetChildChronologyOfEventsAllegationsInfoByIdQuery();
  const [postAllegationsInfoData] = usePostChildChronologyOfEventsAllegationsInfoMutation({});
  const [editAllegationsInfoList] = usePatchChildChronologyOfEventsAllegationsInfoByIdMutation();

  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getAllegationsInfoList({ id });
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
    console.log("🚀 ~ file: useAllegationInfoForm.tsx:58 ~ onSubmit ~ data:", data);
    if (action === "add") {
      setIsFetching(true);
      postAllegationsInfoData({
        addAllegationsInfoRequestDto: { ...data, fosterChildId, status: "Pending" },
      })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/foster-child/child-background-info/child-chronology-of-events/allegation-info",
            query: { action: "edit", id: `${res?.data.id}`, fosterChildId },
          });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          // router.push("/carer-info/background-checks/statutory-checks-list");
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id,
        addAllegationsInfoRequestDto: { ...data },
        fosterChildId,
      };
      editAllegationsInfoList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          setIsFetching(false);
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
