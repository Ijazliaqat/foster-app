import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { columnsIfaParticipationPolicyTable } from ".";
import {
  useDeleteIfaParticiaptionPolicyMutation,
  useGetIfaParticiaptionPolicyQuery,
} from "@root/services/foster-child/other-information/ifa-participation-policy/ifaParticipationPolicy";
import { enqueueSnackbar } from "notistack";

const useIfaParticipationPolicyChildList = () => {
  const [fosterChildId, setFosterChildId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const fosterId = router.query.fosterChildId;

  const { data, isLoading, isFetching } =
    useGetIfaParticiaptionPolicyQuery(fosterId);

  const [delteRecord] = useDeleteIfaParticiaptionPolicyMutation();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const deleteFosterChild = () => {
    delteRecord(fosterChildId);
    setFosterChildId(null);
    enqueueSnackbar("Deleted the participation policy.", {
      variant: "success",
    });
  };

  const closeDeleteModal = (id: string) => {
    setFosterChildId(null);
  };
  const openDeleteModel = (id: string) => {
    console.log(id);

    setFosterChildId(id);
  };
  const columnsIfaParticipationPolicyFunction =
    columnsIfaParticipationPolicyTable(router, openDeleteModel);

  return {
    tableHeaderRef,
    router,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsIfaParticipationPolicyFunction,
    fosterChildId,
    deleteFosterChild,
    closeDeleteModal,
    fosterId,
    data,
    isLoading,
    isFetching,
  };
};

export default useIfaParticipationPolicyChildList;
