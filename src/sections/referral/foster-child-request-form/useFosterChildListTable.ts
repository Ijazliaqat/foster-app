import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { FosterChildListTableData } from ".";
import { SelectFilter } from ".";
export const useFosterChildListTable = () => {
  const [IsDeleteModal, setIsDeleteModal] = useState(false);
  const tableHeaderRef = useRef();
  const theme: any = useTheme();
  let router = useRouter();
  return {
    FosterChildListTableData,
    IsDeleteModal,
    setIsDeleteModal,
    tableHeaderRef,
    theme,
    router,
    SelectFilter,
  };
};
