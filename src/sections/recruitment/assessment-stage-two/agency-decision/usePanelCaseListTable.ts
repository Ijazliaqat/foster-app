import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetCarerFamilyTableApiQuery } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import { useRouter } from "next/router";
import { useRef } from "react";

export const usePanelCaseListTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // ----------------------------------------------------------------------

  return {
    router,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  };
};
