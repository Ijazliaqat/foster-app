import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

export const useUploadDocumentsTable = (
  breadCrumbData: any,
) => {
  // const {breadCrumbData}= props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();
  const router = useRouter();
  const tableHeaderRef = useRef<any>();
  useEffect(() => {
    breadCrumbData("Upload Documents");
    // breadCrumbMiddleName("Immunisations");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
  };
};
