import { useTableParams } from "@root/hooks/useTableParams";
import { useGetChildHolidayPrefrenceQuery } from "@root/services/foster-child/child-day-log/child-holiday-prefrence/childHolidayprefrence";
import React, { useState } from "react";

interface IChildholidayPrefrenceTable {
  fosterChildId: string;
}
const useChildholidayPrefrenceTable = (props: IChildholidayPrefrenceTable) => {
  // PROPS
  const { fosterChildId } = props;
  //  STATES
  const [search, setSearch] = useState("");
  //API HANDLER
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data: childHolidayList,
    isLoading: childHolidayListIsLoading,
    isSuccess: childHolidayListIsSuccess,
    isError: childHolidayListIsError,
    isFetching: childHolidayListIsFetching,
  } = useGetChildHolidayPrefrenceQuery({
    params: {
      fosterChildId: fosterChildId,
      search,
      ...params,
    },
  });
  return {
    childHolidayList,
    childHolidayListIsLoading,
    childHolidayListIsSuccess,
    childHolidayListIsError,
    childHolidayListIsFetching,
    setSearch,
    headerChangeHandler,
    pageChangeHandler,
  };
};

export default useChildholidayPrefrenceTable;
