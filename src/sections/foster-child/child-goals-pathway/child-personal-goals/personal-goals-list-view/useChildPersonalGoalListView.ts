import dayjs from "dayjs";
import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import { useLazyGetChildPersonalViewDataQuery } from "@root/services/foster-child/child-goals-and-pathway/ChildGoalsAndPathwayApi";
import { childPersonalGoalListViewData } from ".";
import { enqueueSnackbar } from "notistack";

export const useChildPersonalGoalListView = () => {
  const [childPersonalGoalViewData] = React.useState(
    childPersonalGoalListViewData
  );
  const [getChildPersonalView] = useLazyGetChildPersonalViewDataQuery();
  const [isLoading1, setIsLoading] = React.useState(true);
  const [isSuccess1, setIsSuccess] = React.useState();
  const [isError1, setIsError] = React.useState();
  const router = useRouter();
  const { id, childId } = router.query;
  const dataObj = { id: id, fosterChildId: childId };

  const todayDate = dayjs().format("MM/DD/YYYY");
  const defaultValuesMain = {
    goalName: "NA",
    status: "NA",
    date: new Date(todayDate),
    comments: "43rtertretretre",
  };

  const getDefaultValue = async () => {
    const { data, isError, isLoading, isSuccess }: any =
      await getChildPersonalView(dataObj, true);
    setIsLoading(isLoading);
    setIsSuccess(isSuccess);
    setIsError(isError);
    if (isError) {
      enqueueSnackbar("Error occured", { variant: "error" });
      return defaultValuesMain;
    }
    const responseData = {
      goalName: data?.[0]?.goalName,
      status: data?.[0]?.status,
      date: new Date(data?.[0]?.date),
      comments: data?.[0]?.comments,
    };

    return responseData;
    
  };
  const methods: any = useForm({
    defaultValues: getDefaultValue,
  });
  const theme: any = useTheme();

  return {
    router,
    theme,
    childPersonalGoalViewData,
    methods,
    isLoading1,
    isSuccess1,
    isError1,
  };
};
