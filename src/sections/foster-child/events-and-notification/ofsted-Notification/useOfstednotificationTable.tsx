import { useTableParams } from "@root/hooks/useTableParams";
import { useGetOfstedNotificationListQuery } from "@root/services/foster-child/events-and-notification/ofsted-notification/OfstedNotificationApi";
import React, { useState } from "react";

const useOfstednotificationTable = () => {
  const [search, setSearch] = useState("");

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data: OfstedNotificationdata,
    isError: OfstedNotificationIserror,
    isLoading: OfstedNotificationisLoading,
    isFetching: OfstedNotificationisFetching,
    isSuccess: OfstedNotificationisSuccess,
  } = useGetOfstedNotificationListQuery({ params: { params, search } });
  return {
    OfstedNotificationdata,
    OfstedNotificationIserror,
    OfstedNotificationisLoading,
    OfstedNotificationisFetching,
    OfstedNotificationisSuccess,
    headerChangeHandler,
    pageChangeHandler,
    setSearch,
    sortChangeHandler,
  };
};

export default useOfstednotificationTable;
