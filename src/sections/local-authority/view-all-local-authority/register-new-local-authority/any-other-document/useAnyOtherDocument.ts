import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const useAnyOtherDocument = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [actionType, setActionType] = useState<string>("add");
  const [viewTableRow, setViewTableRow] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const route = useRouter();
  const theme = useTheme();
  return {
    theme,
    isAddModalOpen,
    setIsAddModalOpen,
    actionType,
    setActionType,
    viewTableRow,
    setViewTableRow,
    route,
    isDeleteModalOpen,
    setIsDeleteModalOpen
  };
};
