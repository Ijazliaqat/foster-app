import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useImmunisations = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();
  const router = useRouter();
  const tableHeaderRef = useRef<any>();
  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
  };
}
