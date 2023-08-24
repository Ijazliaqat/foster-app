import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import {
  defaultValues,
  formSchema,
  formatters,
} from "./PlacementDischargeData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazyGetChildChronologyOfEventsDayLogByIdQuery,
  usePatchChildChronologyOfEventsDayLogByIdMutation,
  usePostChildChronologyOfEventsDayLogMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/DayLogAPI";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const usePlacementDischargeForm = () => {
  const router = useRouter();
  const { action, id, fosterChildId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      setIsLoading(false);
      return defaultValues;
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
    console.log(data);

    if (action === "add") {
      setIsFetching(true);
    } else if (action === "edit") {
      setIsFetching(true);
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
